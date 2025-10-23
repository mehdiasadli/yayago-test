import { useDebouncedValue } from '@/hooks/use-debounce-value';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group';
import { Search } from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import qs from 'qs';

interface SearchInputProps {
  q?: string;
  setQ: (q?: string) => void;
}

export default function SearchInput({ q, setQ }: SearchInputProps) {
  const [debouncedQ] = useDebouncedValue(q, 500);
  const router = useRouter();

  const handleSearch = () => {
    const currentParams = new URLSearchParams(window.location.search);
    const params = qs.parse(currentParams.toString());
    const queryString = qs.stringify({ ...params, q: debouncedQ });
    const url = queryString ? `/cars/rent?${queryString}` : '/cars/rent';

    router.push(url, { scroll: false });
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQ(e.target.value);
  }

  useEffect(() => {
    handleSearch();
  }, [debouncedQ]);

  return (
    <InputGroup>
      <InputGroupInput
        type='text'
        placeholder='Search by brand, model, or year...'
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className='h-12 focus:border-primary'
      />
      <InputGroupAddon>
        <Search className='w-5 h-5 text-gray-400' strokeWidth={2} />
      </InputGroupAddon>
    </InputGroup>
  );
}
