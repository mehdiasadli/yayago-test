import { blogs } from '@/data/blogs';
import { brands, cars } from '@/data/cars';
import { dubaiLocations } from '@/data/locations';
import { MetadataRoute } from 'next';

const base = 'https://yayago.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Mock data for dynamic routes
  const mockCarIds = cars.map((c) => c.id);
  const mockBlogIds = blogs.map((b) => b.id);
  const mockBrands = brands.map((b) => b.key);
  const mockModels = brands.flatMap((b) =>
    b.models.map((m) => ({
      model: m.key,
      brand: b.key,
    }))
  );
  const mockLocations = dubaiLocations.map((l) => l.key);

  const sitemap: MetadataRoute.Sitemap = [
    // Core Pages
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Company Pages
    {
      url: `${base}/company/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/company/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },

    // Support Pages
    {
      url: `${base}/support/how-it-works`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/support/list-your-car`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/support/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/support/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/support/help`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Legal Pages
    {
      url: `${base}/legal/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/legal/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/legal/insurance`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },

    // Cars Main Page
    {
      url: `${base}/cars/rent`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },

    // Auth Pages (lower priority as they're utility pages)
    {
      url: `${base}/auth`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${base}/auth/register`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${base}/auth/recover-password`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic Blog Posts
  mockBlogIds.forEach((blogId) => {
    sitemap.push({
      url: `${base}/company/blog/${blogId}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Dynamic Car Detail Pages
  mockCarIds.forEach((carId) => {
    sitemap.push({
      url: `${base}/cars/rent/${carId}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Dynamic Brand Pages
  mockBrands.forEach((brand) => {
    sitemap.push({
      url: `${base}/cars/brand/${brand}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  // Dynamic Brand + Model Pages (for selected brands)
  mockModels.forEach((model) => {
    sitemap.push({
      url: `${base}/cars/brand/${model.brand}/${model.model}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  });

  // Dynamic Location Pages
  mockLocations.forEach((location) => {
    sitemap.push({
      url: `${base}/cars/location/${location}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    });
  });

  return sitemap;
}
