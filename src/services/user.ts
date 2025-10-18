import { compare, hash } from "bcryptjs";
import { prisma } from "../libs/prisma";
import { Address } from "../types/address";
import { v4 } from "uuid";

export const createUser = async (name: string, email: string, password: string) => {
    const existing = await prisma.user.findUnique({
        where: { email }
    });
    if (existing) return null;

    const hashedPassword:any = hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email: email.toLocaleLowerCase(),
            password: hashedPassword
        }
    });
    if (!user) return null;

    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}

export const logUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (!user) return null;

    const isValid = await compare(password, user.password);
    if (!isValid) return null;

    const token = v4();
    await prisma.user.update({
        where: { id: user.id },
        data: { token }
    });

    return token;
}

export const getUserIdByToken = async (token: string) => {
    const user = await prisma.user.findFirst({
        where: { token },
    });

    if (!user) return null;

    return user.id;
}

export const createAddress = async (userId: number, address: Address) => {
    return await prisma.userAddress.create({
        data: {
            ...address,
            userId
        }
    });
}

export const getAddressesFromUserId = async (userId: number) => {
    return await prisma.userAddress.findMany({
        where: { userId },
        select: {
            id: true,
            zipcode: true,
            street: true,
            number: true,
            city: true,
            state: true,
            country: true,
            complement: true
        }
    });
}

export const getAddressById = async (userId: number, addressId: number) => {
    return prisma.userAddress.findFirst({
        where: { id: addressId, userId },
        select: {
            id: true,
            zipcode: true,
            street: true,
            number: true,
            city: true,
            state: true,
            country: true,
            complement: true
        }
    });
}   