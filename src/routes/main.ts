import { Router } from "express";
import * as bannerController from '../controllers/banner';
import * as productController from '../controllers/product';
import * as categoryController from '../controllers/category';
import * as cartController from '../controllers/cart';
import * as userController from '../controllers/user';

export const routes = Router();

/* rota de teste */
routes.get('/ping', (req, resp) => {
    resp.json({ pong: true });
})

routes.get('/banners', bannerController.getBanners);
routes.get('/products', productController.getProducts);
routes.get('/product/:id', productController.getOneProduct);
routes.get('/product/:id/related', productController.getRelatedProducts);
routes.get('/product/:slug/metadata', categoryController.getCategoryWithMetadata);
routes.post('/cart/mount', cartController.cartMount);
routes.get('/cart/shipping', cartController.calculateShipping);
routes.post('/user/register', userController.register);
routes.post('/user/login', userController.login);