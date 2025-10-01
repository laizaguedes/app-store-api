import { RequestHandler } from "express";
import { cartMountSchema } from "../schemas/cart-mount-schema";
import { getProductById } from "../services/product";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";
import { calculateShippingSchema } from "../schemas/calculate-shipping-schema";
import { cartFinishSchema } from "../schemas/cart-finish-schema";
import { getAddressById } from "../services/user";
import { createOrder } from "../services/order";
import { createPaymentLink } from "../services/payment";

export const cartMount: RequestHandler = async (req, resp) => {
    const parseResult = cartMountSchema.safeParse(req.body);
    if (!parseResult.success) {
        return resp.status(400).json({ error: 'Array de ids inválido' });
    }
    const { ids } = parseResult.data;

    let products = [];
    for (let id of ids) {
        const product = await getProductById(id);
        if (product) {
            products.push({
                id: product.id,
                label: product.label,
                price: product.price,
                image: product.image[0] ? getAbsoluteImageUrl(product.image[0]) : null,
            });
        }
    }

    resp.json({ error: null, products });
}

export const calculateShipping: RequestHandler = async (req, resp) => {
    const parseResult = calculateShippingSchema.safeParse(req.query);
    if (!parseResult.success) {
        return resp.status(400).json({ error: 'CEP inválido' });
    }
    const { zipCode } = parseResult.data;

    resp.json({ error: null, zipCode, cost: 7, days: 3 });// TODO: Implement real shipping calculation
}

export const finish: RequestHandler = async (req, resp) => {
    const userId = (req as any).userId;
    if (!userId) {
        return resp.status(401).json({ error: 'Acesso negado' });
    }

    const result = cartFinishSchema.safeParse(req.body);
    if (!result.success) {
        return resp.status(400).json({ error: 'Carrinho inexistente' });
    }

    const { addressId, cart } = result.data;

    const address = await getAddressById(userId, addressId);
    if (!address) {
        return resp.status(400).json({ error: 'Endereço inválido' });
    }

    const shippingCost = 7;// TODO: Implement real shipping calculation
    const shippingDays = 3;// TODO: Implement real shipping calculation

    const orderId = await createOrder({
        userId,
        address,
        shippingCost,
        shippingDays,
        cart
    });

    if (!orderId) {
        return resp.status(400).json({ error: 'Aconteceu algum erro' });
    }

    let url = await createPaymentLink({ cart, shippingCost, orderId });

    if (!url) {
        return resp.status(400).json({ error: 'Aconteceu algum erro' });
    }

    resp.status(201).json({ error: null, url });
}