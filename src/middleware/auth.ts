import { NextFunction, Request, Response } from "express";
import { getUserIdByToken } from "../services/user";

export const authMiddleware = async (req: Request, resp: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return resp.status(401).json({ error: 'Acesso TOKEN negado' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return resp.status(401).json({ error: 'Acesso TOKEN negado' });
    }

    const userId = await getUserIdByToken(token);
    if (!userId) {
        return resp.status(401).json({ error: 'Acesso negado' });
    }
    
    (req as any).userId = userId;
    next();
}