import { prisma } from "../libs/prisma"

export const getAllBanners = async () => {
    const banners = await prisma.banner.findMany({
        select: {
            image: true,
            link: true
        }
    })
    return banners.map((banner: any) => ({
        ...banner,
        img: `media/banners/${banner.img}`//url relativa
    }));
}