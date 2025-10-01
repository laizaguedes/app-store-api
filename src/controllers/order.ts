import { RequestHandler } from "express";
import { getOrderBySessionIdSchema } from "../schemas/get-order-by-session-id-schema";
import { getOrderIdFromSession } from "../services/payment";
import { getOrderById, getUserOrders } from "../services/order";
import { getOrderSchema } from "../schemas/get-order-schema";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";

export const getOrderBySessionId: RequestHandler = async (req, resp) => {
    const result = await getOrderBySessionIdSchema.safeParseAsync(req.query);
    if (!result.success) {
        return resp.status(400).json({ error: 'Session ID não enviada'});
    }

    const { session_id } = result.data;

    const orderId = await getOrderIdFromSession(session_id);
    if (!orderId) {
        return resp.status(400).json({ error: 'Pedido não encontrado' });
    }

    resp.json({ error: null, orderId });
}

export const getOrders: RequestHandler = async (req, resp) => {
    const userId = (req as any).userId;
    if (!userId) {
        return resp.status(401).json({ error: 'Acesso negado' });
    }

    const orders = await getUserOrders(userId);

    resp.json({ error: null, orders });
}

export const getOrder: RequestHandler = async (req, resp) => {
    const userId = (req as any).userId;
    if (!userId) {
        return resp.status(401).json({ error: 'Acesso negado' });
    }

    const result = await getOrderSchema.safeParseAsync(req.params);
    if (!result.success) {
        return resp.status(400).json({ error: 'Id inválido' });
    }

    const { id } = result.data;

    const order = await getOrderById(parseInt(id), userId);
    if (!order) {
        return resp.status(404).json({ error: 'Pedido não encontrado' });
    }

    const itemsWithAbsoluteURL = order.orderItems.map((item: any) => ({
        ...item,
        product: {
            ...item.product,
            images: item.product.image ? getAbsoluteImageUrl(item.product.image) : null
        }
    }));

    resp.json({
        error: null,
        order: {
            ...order,
            orderItems: itemsWithAbsoluteURL
        }
    });
}