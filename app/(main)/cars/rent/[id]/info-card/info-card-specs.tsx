import { LucideIcon } from 'lucide-react';

interface InfoCardSpecsProps {
  features: { Icon: LucideIcon; label: string; value: string | number }[];
}

export default function InfoCardSpecs({ features }: InfoCardSpecsProps) {
  return (
    <div className='grid grid-cols-2 gap-3 mb-6'>
      {features.map((feature, index) => (
        <div key={index} className='flex items-center gap-2'>
          <feature.Icon className='w-4 h-4 text-primary flex-shrink-0' strokeWidth={2} />
          <span className='text-sm text-gray-700 capitalize'>
            {feature.value} {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
}
