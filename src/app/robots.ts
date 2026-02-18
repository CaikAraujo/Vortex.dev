import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://athana.ch';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Example: disallow private routes
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
