import { RequestHandler } from "express";
import { getStripeWebhookSecret } from "../utils/get-stripe-webhook-secret";
import { getConstructEvent } from "../libs/stripe";
import { parse } from "path";
import { updateOrderStatus } from "../services/order";

export const stripe: RequestHandler = async (req, resp) => {
    const sig = req.headers['stripe-signature'] as string;
    const webhookKey = getStripeWebhookSecret();
    const rawBody = req.body;
    
    const event = await getConstructEvent(rawBody, sig, webhookKey);

    if(event){
        const session = event.data.object as any;
        const orderId = parseInt(session.metadata?.orderId);

        switch(event.type){
            case 'checkout.session.completed':
            case 'checkout.session.async_payment_succeeded':
                //Deu tudo certo
                await updateOrderStatus(orderId, 'paid');
                break;
            case 'checkout.session.expired':
            case 'checkout.session.async_payment_failed':
                //Deu errado
                await updateOrderStatus(orderId, 'cancelled');
                break;
        }
    }

    resp.json({ error: null })
}