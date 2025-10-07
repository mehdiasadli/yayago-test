import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Providers from '@/components/providers';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | YayaGo - Peer-to-peer car rental marketplace in Dubai',
    default: 'YayaGo - Peer-to-peer car rental marketplace in Dubai',
  },
  description:
    "YayaGo is a peer-to-peer car rental marketplace founded in Dubai, UAE. It's a B2B and B2C platform where individual car owners can list their vehicles for rent, and renters can browse and contact hosts directly to arrange rentals.",
  openGraph: {
    title: 'YayaGo - Peer-to-peer car rental marketplace in Dubai',
    description:
      "YayaGo is a peer-to-peer car rental marketplace founded in Dubai, UAE. It's a B2B and B2C platform where individual car owners can list their vehicles for rent, and renters can browse and contact hosts directly to arrange rentals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} antialiased`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
