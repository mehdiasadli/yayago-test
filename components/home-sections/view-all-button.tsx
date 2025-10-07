import { AnimateIcon } from '../animate-ui/icons/icon';
import { Button } from '../ui/button';
import { ChevronRight } from '../animate-ui/icons/chevron-right';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ViewAllButtonProps extends Omit<React.ComponentProps<typeof Button>, 'children' | 'asChild'> {
  href: string;
  text: string;
  textClassName?: string;
  iconClassName?: string;
}

export default function ViewAllButton({ href, text, textClassName, iconClassName, ...props }: ViewAllButtonProps) {
  return (
    <AnimateIcon animateOnHover>
      <Button asChild variant='link' {...props} className={cn('h-12 w-50 text-white', props.className)}>
        <Link href={href}>
          <span className={cn('text-white', textClassName)}>{text}</span>
          <ChevronRight
            className={cn('w-5 h-5 transition-transform duration-300 group-hover:translate-x-1', iconClassName)}
            strokeWidth={2.5}
          />
        </Link>
      </Button>
    </AnimateIcon>
  );
}
