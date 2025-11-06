import { RequestHandler } from "express";
import { registerSchema } from "../schemas/register-schema";
import { createAddress, createUser, getAddressesFromUserId, logUser } from "../services/user";
import { loginSchema } from "../schemas/login-schema";
import { addAddressSchema } from "../schemas/add-address-schema";

export const register: RequestHandler = async (req, resp) => {
    const result = registerSchema.safeParse(req.body);
    if (!result.success) {
        return resp.status(400).json({ error: 'Dados inválidos' });
    }

    const { name, email, password } = result.data;

    const user = await createUser(name, email, password);
    if (!user) {
        return resp.status(400).json({ error: 'E-mail já cadastrado' });
    }

    resp.status(200).json({ error: null, user });
}

export const login: RequestHandler = async (req, resp) => {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
        return resp.status(400).json({ error: 'Dados inválidos' });
    }

    const { email, password } = result.data;
    const token = await logUser(email, password);
    if (!token) {
        return resp.status(401).json({ error: 'Acesso negado' });
    }

    resp.json({ error: null, token });
}

export const addAddress: RequestHandler = async (req, resp) => {
    const userId = (req as any).userId;
    console.log(userId);
    if (!userId) {
        return resp.status(401).json({ error: 'Acesso negado' });
    }

    const result = addAddressSchema.safeParse(req.body);
    console.log(result);
    if (!result.success) {
        return resp.status(400).json({ error: 'Dados inválidos' });
    }

    const address = await createAddress(userId, result.data);
    console.log(address);
    if (!address) {
        return resp.status(400).json({ error: 'Aconteceu algum erro' });
    }

    resp.status(201).json({ error: null, address });
}

export const getAddresses: RequestHandler = async (req, resp) => {
    const userId = (req as any).userId;
    if (!userId) {
        return resp.status(401).json({ error: 'Acesso negado' });
    }
    

    const addresses = await getAddressesFromUserId(userId);

    resp.json({ error: null, addresses });
}