import express from 'express';
import cors from 'cors';
import { routes } from './routes/main.js';

const server = express();
server.use(cors());
server.use(express.static('public'));/* liberar a pasta pública como estática */
server.use(express.json());/* liberar o método de entrada e saída de dados */

server.use(routes);/* adicionar as rotas */

const port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log('AppStore running...')
})