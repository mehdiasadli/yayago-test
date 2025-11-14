import { cn } from '@/lib/utils';

interface InfoCardTitleProps {
  name: string;
  subtitle?: string;
  tags?: string[];
  className?: string;
}

export default function InfoCardTitle({ name, subtitle, tags, className }: InfoCardTitleProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <h1 className='text-2xl sm:text-3xl font-bold tracking-tight text-gray-900'>{name}</h1>

      {subtitle && <p className='text-sm text-muted-foreground'>{subtitle}</p>}

      {tags && tags.length > 0 && (
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={tag}
              className='inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary border border-primary/10'
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
