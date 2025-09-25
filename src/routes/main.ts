import { Router } from "express";

export const routes = Router();

/* rota de teste */
routes.get('/ping', (req, resp) => {
    resp.json({ pong: true });
})