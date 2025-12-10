export default function StructuredData() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'ProfessionalService',
                '@id': 'https://vortex-dev.com/#organization',
                name: 'VORTEX.DEV',
                url: 'https://vortex-dev.com',
                logo: 'https://vortex-dev.com/og-image.jpg',
                image: 'https://vortex-dev.com/og-image.jpg',
                description: 'Agence de développement web premium à Genève. Spécialistes Next.js, SEO et Design UI/UX.',
                telephone: '+41 79 123 45 67', // Placeholder
                email: 'contact@vortex-dev.com', // Placeholder
                foundingDate: '2024',

                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Rue du Rhône 14', // Placeholder location
                    addressLocality: 'Genève',
                    postalCode: '1204',
                    addressCountry: 'CH'
                },

                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 46.2044,
                    longitude: 6.1432
                },

                areaServed: [
                    { '@type': 'City', name: 'Genève' },
                    { '@type': 'City', name: 'Lausanne' },
                    { '@type': 'City', name: 'Zurich' },
                    { '@type': 'AdministrativeArea', name: 'Vaud' },
                    { '@type': 'AdministrativeArea', name: 'Romandie' },
                    { '@type': 'Country', name: 'Switzerland' }
                ],

                priceRange: 'CHF 2000 - CHF 50000',
                paymentAccepted: 'Cash, Credit Card, Invoice, TWINT',
                currenciesAccepted: 'CHF, EUR',

                openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '18:00'
                },

                sameAs: [
                    'https://instagram.com/vortex.dev',
                    'https://linkedin.com/company/vortex-dev',
                    'https://github.com/vortex-dev',
                    'https://twitter.com/vortex_dev'
                ],

                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Services de Développement Web',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Création Site Web Next.js'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Optimisation SEO Technique'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Design UI/UX & Refonte'
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Développement E-commerce'
                            }
                        }
                    ]
                }
            },
            {
                '@type': 'WebSite',
                '@id': 'https://vortex-dev.com/#website',
                url: 'https://vortex-dev.com',
                name: 'VORTEX.DEV',
                publisher: {
                    '@id': 'https://vortex-dev.com/#organization'
                },
                inLanguage: 'fr-CH'
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Accueil',
                        item: 'https://vortex-dev.com'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Services',
                        item: 'https://vortex-dev.com/services'
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'Templates',
                        item: 'https://vortex-dev.com/templates'
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
