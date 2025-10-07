import Navbar from '@/components/navbar';
import ReactLenis from 'lenis/react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
