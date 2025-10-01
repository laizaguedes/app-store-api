import { get } from "http";
import { prisma } from "../libs/prisma";
import { Address } from "../types/address";
import { CartItem } from "../types/cart-item";
import { getProductById } from "./product";
import { id } from "zod/locales";

type CreateOrderParams = {
    userId: number;
    address: Address,
    shippingCost: number;
    shippingDays: number;
    cart: CartItem[];
}

export const createOrder = async({ userId, address, shippingCost, shippingDays, cart }: CreateOrderParams) => {
    let subtotal = 0;
    let orderItems = [];

    for (let item of cart) {
        const product = await getProductById(item.productId);
        if (product) {
            subtotal += product.price * item.quantity;

            orderItems.push({
                productId: product.id,
                quantity: item.quantity,
                price: product.price
            });
        }
    }

    let total = subtotal + shippingCost;

    const order = await prisma.order.create({
        data: {
            userId,
            total,
            shippingCost,
            shippingDays,
            shippingZipCode: address.zipcode,
            shippingStreet: address.street,
            shippingNumber: address.number,
            shippingCity: address.city,
            shippingState: address.state,
            shippingCountry: address.country,
            shippingComplement: address.complement,
            orderItems: { create: orderItems }
        }
    });

    if(!order) return null;

    return order.id;
}

export const updateOrderStatus = async (orderId: number, status: 'paid' | 'cancelled') => {
    return await prisma.order.update({
        where: { id: orderId },
        data: { status }
    });
}

export const getUserOrders = async (userId: number) => {
    return await prisma.order.findMany({
        where: { userId },
        select: {
            id: true,
            total: true,
            createdAt: true,
            status: true
        },
        orderBy: { createdAt: 'desc' }
    });
}

export const getOrderById = async (id: number, userId: number) => {
    const order = await prisma.order.findFirst({ 
        where: { id, userId },
        select: {
            id: true,
            total: true,
            status: true,
            shippingCost: true,
            shippingDays: true,
            shippingCity: true,
            shippingComplement: true,
            shippingCountry: true,
            shippingNumber: true,
            shippingState: true,
            shippingStreet: true,
            shippingZipCode: true,
            createdAt: true,
            orderItems: {
                select: {
                    id: true,
                    quantity: true,
                    price: true,
                    productId: {
                        select: {
                            id: true,
                            label: true,
                            price: true,
                            images: {
                                take:1,
                                orderBy: { id: 'asc' }
                            }
                        }
                    }
                }
            }
        }
    });

    if(!order) return null;

    return {
        ...order,
        orderItems: order.orderItems.map((item: any) => ({
            ...item,
            product: {
                ...item.productId,
                image: item.productId.images[0] ? `media/products/${item.productId.images[0].url}` : null,
                images: undefined
            }
        }))
    };
}