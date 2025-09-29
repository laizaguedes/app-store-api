import { RequestHandler } from "express";
import { getProductsSchema } from "../schemas/get-product-schema";
import { get } from "http";
import { getAllProducts, getProductById, incrementProductViewsCount } from "../services/product";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";
import { getOneProductSchema } from "../schemas/get-one-product-schema";
import { getCategory } from "../services/category";

export const getProducts: RequestHandler = async (req, resp) => {
    const parseResult = getProductsSchema.safeParse(req.query);
    if(!parseResult.success) {
        return resp.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const { metadata, orderBy, limit } = parseResult.data;
    
    const parsedLimit = limit ? parseInt(limit) : undefined;
    const parsedMetadata = metadata ? JSON.parse(metadata) : undefined;

    const products = await getAllProducts({
        metadata: parsedMetadata,
        order: orderBy,
        limit: parsedLimit
    });

    const productsWithAbsoluteImageUrl = products.map((product: any) => ({
        ...product,
        image: product.image ? getAbsoluteImageUrl(product.image) : null,
        liked: false // TODO: Once have like functionality, fetch thos.
    }));

    resp.json({ error: null, products: productsWithAbsoluteImageUrl });
}

export const getOneProduct: RequestHandler = async (req, resp) => {
    const paramsResult = getOneProductSchema.safeParse(req.params);
    if(!paramsResult.success) {
        return resp.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const { id } = paramsResult.data;

    // Getting product by id
    const product = await getProductById(parseInt(id!));
    if(!product) {
        return resp.status(404).json({ error: 'Produto não encontrado' });
    }

    const productWithAbsoluteImageUrl = {
        ...product,
        images: product.images.length > 0 ? getAbsoluteImageUrl(product.image) : null,
    }

    // Getting category by product's categoryId
    const category = await getCategory(product.categoryId);

    // Incrementing product's view count
    await incrementProductViewsCount(product.id);
    
    resp.json({
        error: null,
        product: productWithAbsoluteImageUrl,
        category
    });
}