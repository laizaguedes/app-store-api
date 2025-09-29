import { Router } from "express";
import * as bannerController from '../controllers/banner';
import * as productController from '../controllers/product';

export const routes = Router();

/* rota de teste */
routes.get('/ping', (req, resp) => {
    resp.json({ pong: true });
})

routes.get('/banners', bannerController.getBanners);
routes.get('/products', productController.getProducts);
routes.get('/product/:id', productController.getOneProduct);
routes.get('/product/:id/related', productController.getRelatedProducts);