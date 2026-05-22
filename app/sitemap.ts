import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.xpaylabs.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zh/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/zh/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/zh/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/pricing.md`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
  ];
}
