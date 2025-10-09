import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'YayaGo - Peer-to-peer car rental marketplace in Dubai',
    short_name: 'YayaGo',
    description:
      "YayaGo is a peer-to-peer car rental marketplace founded in Dubai, UAE. It's a B2B and B2C platform where individual car owners can list their vehicles for rent, and renters can browse and contact hosts directly to arrange rentals.",
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f5f5',
    theme_color: '#f5f5f5',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
