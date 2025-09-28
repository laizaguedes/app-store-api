import { error } from "console";
import { RequestHandler } from "express";
import { getAllBanners } from "../services/banner";
import { getAbsoluteImageUrl } from "../utils/get-absolute-image-url";

export const getBanners: RequestHandler = async (req, resp) => {
    const banners = await getAllBanners();
    const bannersWithAbsoluteUrl = banners.map((banner: any) => ({
        ...banner,
        img: getAbsoluteImageUrl(banner.img) // url completa
    }));
    
    resp.json({ error: null, banners: bannersWithAbsoluteUrl })
}