import { cn } from '@/lib/utils';

interface InfoCardTitleProps {
  name: string;
  className?: string;
}

export default function InfoCardTitle({ name, className }: InfoCardTitleProps) {
  return <h1 className={cn('text-3xl font-bold text-gray-900 mb-2', className)}>{name}</h1>;
}
