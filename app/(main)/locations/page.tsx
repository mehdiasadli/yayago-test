import { Metadata } from 'next';
import LocationsContent from './locations-content';

export const metadata: Metadata = {
  title: 'All Locations | Yayago',
  description: 'Explore car rentals across all Dubai locations. Find the perfect vehicle in your preferred area.',
};

export default function LocationsPage() {
  return <LocationsContent />;
}
