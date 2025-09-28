import { RequestHandler } from "express";
import { getProductsSchema } from "../schemas/get-product-schema";
import { get } from "http";
import { getAllProducts } from "../services/product";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";

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