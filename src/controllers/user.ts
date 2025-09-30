import { RequestHandler } from "express";
import { registerSchema } from "../schemas/register-schema";
import { createUser, logUser } from "../services/user";
import { loginSchema } from "../schemas/login-schema";

export const register: RequestHandler = async (req, resp) => {
    const result = registerSchema.safeParse(req.body);
    if(!result.success) {
        return resp.status(400).json({ error: 'Dados inválidos' });
    }

    const { name, email, password } = result.data;

    const user = await createUser(name, email, password);
    if(!user) {
        return resp.status(400).json({ error: 'E-mail já cadastrado' });
    }

    resp.status(200).json({ error: null, user });
}

export const login: RequestHandler = async (req, resp) => {
    const result = loginSchema.safeParse(req.body);
    if(!result.success) {
        return resp.status(400).json({ error: 'Dados inválidos' });
    }

    const { email, password } = result.data;
    const token = await logUser(email, password);
    if(!token) {
        return resp.status(401).json({ error: 'Acesso negado' });
    }

    resp.json({ error: null, token });
}