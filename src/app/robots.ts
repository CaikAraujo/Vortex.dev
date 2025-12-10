import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://vortex-dev.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Example: disallow private routes
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
