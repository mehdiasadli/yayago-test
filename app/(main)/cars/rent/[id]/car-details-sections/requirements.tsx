import { Info } from 'lucide-react';

const requirements = [
  "Valid Driver's License (minimum 1 year)",
  'Passport or Emirates ID',
  'Minimum age: 21 years',
  'Credit card for security deposit',
  'International drivers must have IDP',
];

export default function Requirements() {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      <div className='flex items-center gap-2 mb-4'>
        <Info className='w-6 h-6 text-blue-600' strokeWidth={2} />
        <h2 className='text-2xl font-bold text-gray-900'>Rental Requirements</h2>
      </div>
      <ul className='space-y-3'>
        {requirements.map((req, index) => (
          <li key={index} className='flex items-start gap-2 text-gray-700'>
            <span className='text-primary font-bold mt-1'>•</span>
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
