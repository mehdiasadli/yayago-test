import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

export default function BioSection() {
  return (
    <div className='bg-white border-2 border-gray-200 overflow-hidden'>
      <div className='border-b-2 border-gray-200 px-8 py-6 bg-gradient-to-r from-gray-50 to-white'>
        <h2 className='text-2xl font-bold text-gray-900'>About Me</h2>
        <p className='text-gray-600 mt-1'>Share your story with the community</p>
      </div>

      <div className='p-8'>
        <p className='text-gray-700 leading-relaxed mb-6'>
          Hello! I'm John, a passionate car enthusiast based in Baku, Azerbaijan. I've been renting out my vehicles
          through YayaGo for the past 3 months and absolutely love being part of this community. My mission is to
          provide clean, well-maintained cars with exceptional service. I respond quickly to inquiries and am flexible
          with pickup and drop-off arrangements. Each of my vehicles undergoes regular maintenance and thorough cleaning
          before every rental. Looking forward to helping you with your transportation needs!
        </p>
        <Button variant='outline' className='hover:bg-gray-50'>
          <Edit className='w-4 h-4 mr-2' />
          Edit Bio
        </Button>
      </div>
    </div>
  );
}
