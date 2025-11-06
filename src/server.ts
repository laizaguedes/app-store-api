import express, { type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import { routes } from './routes/main.js';
import { stripe } from './controllers/webhook.js';

const server = express();

// 🌍 Libera CORS e arquivos públicos
server.use(cors());
server.use(express.static('public'));

// ⚡ Webhook do Stripe precisa do corpo cru
server.post('/webhook/stripe', express.raw({ type: 'application/json' }), stripe);

// 🧩 Agora sim, libera JSON para o resto das rotas
server.use(express.json());

// 🚀 Rotas normais
server.use(routes);

// ⚠️ Middleware global de erro
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(500).json({ error: 'Ocorreu algum erro' });
});

// 🔊 Inicializa o servidor
const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log('AppStore running...');
});
