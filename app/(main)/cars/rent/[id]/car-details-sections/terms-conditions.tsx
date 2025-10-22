import { Shield } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className='bg-white border-2 border-gray-200 p-6'>
      <div className='flex items-center gap-2 mb-4'>
        <Shield className='w-6 h-6 text-primary' strokeWidth={2} />
        <h2 className='text-2xl font-bold text-gray-900'>Terms & Conditions</h2>
      </div>
      <div className='space-y-3 text-sm text-gray-700'>
        <p>
          <strong>Daily Mileage:</strong> 100km per day included. Additional kilometers charged at ₼1.50/km.
        </p>
        <p>
          <strong>Fuel Policy:</strong> The vehicle is provided with a full tank and must be returned with a full tank.
        </p>
        <p>
          <strong>Insurance:</strong> Comprehensive insurance included with an excess of ₼1,500 per incident.
        </p>
        <p>
          <strong>Late Return:</strong> A grace period of 1 hour is provided. After that, late returns are charged at
          hourly rates.
        </p>
        <p>
          <strong>Cancellation:</strong> Free cancellation up to 48 hours before rental start. Cancellations within 48
          hours incur a 25% fee.
        </p>
      </div>
    </div>
  );
}
