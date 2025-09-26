import express, { type NextFunction, type Request, type Response } from 'express';
import cors from 'cors';
import { routes } from './routes/main.js';

const server = express();
server.use(cors());
server.use(express.static('public'));/* liberar a pasta pública como estática */
server.use(express.json());/* liberar o método de entrada e saída de dados */

server.use(routes);/* adicionar as rotas */

/* rota de erro */
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(500).json({ error: 'Ocorreu algum erro' })
})

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log('AppStore running...')
})