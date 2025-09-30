import z from "zod";

export const calculateShippingSchema = z.object({
    zipCode: z.string().min(4)
});