import { RequestHandler } from "express";
import { getCategoryBySlug, getCategoryMetadata } from "../services/category";

export const getCategoryWithMetadata: RequestHandler = async (req, resp) => {
    const { slug } = req.params;

    const category = await getCategoryBySlug(slug);
    if (!category) {
        return resp.status(400).json({ error: 'Categoria não encontrada' });
    }

    const metadata = await getCategoryMetadata(category.id);

    resp.json({ error: null, category, metadata });
}