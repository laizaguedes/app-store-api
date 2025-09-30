import { RequestHandler } from "express";
import { cartMountSchema } from "../schemas/cart-mount-schema";
import { getProductById } from "../services/product";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";
import { calculateShippingSchema } from "../schemas/calculate-shipping-schema";

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