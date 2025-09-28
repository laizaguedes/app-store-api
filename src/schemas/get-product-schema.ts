import z from "zod";

export const getProductsSchema = z.object({
    metadata: z.string().optional(),
    orderBy: z.enum(['views', 'selling', 'price']).optional(),
    limit: z.string().regex(/^\d+$/).optional(), //valida se dentro da string possui um numero
});