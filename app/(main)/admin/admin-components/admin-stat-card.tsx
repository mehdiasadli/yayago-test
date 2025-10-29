import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface AdminStatCardProps {
  value: number | string;
  label: string;
  Icon: LucideIcon;
  description?: string;
  valueSuffix?: string;
  color?: string;
}

export default function AdminStatCard({ value, label, Icon, description, valueSuffix, color }: AdminStatCardProps) {
  return (
    <Card className='shadow-xs'>
      <CardHeader className='flex items-center gap-4'>
        <Icon className={`w-7 h-7 text-${color}-600`} strokeWidth={2} />
        <div>
          <CardTitle className={`text-${color}-600 text-2xl`}>
            {value}
            {valueSuffix && <span className='text-sm text-gray-500'> {valueSuffix}</span>}
          </CardTitle>
          <CardDescription className={`text-${color}-700`}>{label}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className={`text-${color}-700 text-xs`}>{description}</p>
      </CardContent>
    </Card>
  );
}
