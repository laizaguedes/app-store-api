import { compare, hash } from "bcryptjs";
import { prisma } from "../libs/prisma";
import v4 from "uuid/dist/v4";

export const createUser = async(name: string, email: string, password: string) => {
    const existing = await prisma.user.findUnique({
        where: { email }
    });
    if(existing) return null;

    const hashedPassword = hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email: email.toLocaleLowerCase(),
            password: hashedPassword
        }
    });
    if(!user) return null;
    
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}

export const logUser = async(email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if(!user) return null;

    const isValid = await compare(password, user.password);
    if(!isValid) return null;

    const token = v4();
    await prisma.user.update({
        where: { id: user.id },
        data: { token }
    });

    return token;
}

export const getUserIdByToken = async(token: string) => {
    const user = await prisma.user.findFirst({
        where: { token },
    });

    if(!user) return null;

    return user.id;
}