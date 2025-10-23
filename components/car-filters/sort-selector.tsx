import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import qs from 'qs';
import { useEffect } from 'react';

interface SortSelectorProps {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export default function SortSelector({ sortBy, setSortBy }: SortSelectorProps) {
  const router = useRouter();

  const handleSort = (sortBy: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    const params = qs.parse(currentParams.toString());
    const queryString = qs.stringify({ ...params, sortBy });
    const url = queryString ? `/cars/rent?${queryString}` : '/cars/rent';

    router.push(url, { scroll: false });
  };

  useEffect(() => {
    if (!sortBy) return;
    handleSort(sortBy);
  }, [sortBy]);

  return (
    <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
      <SelectTrigger>
        <SelectValue placeholder='Sort by' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='relevance'>Most Relevant</SelectItem>
        <SelectItem value='expensive'>Most Expensive</SelectItem>
        <SelectItem value='cheap'>Cheapest</SelectItem>
        <SelectItem value='popular'>Most Popular</SelectItem>
        <SelectItem value='latest'>Latest</SelectItem>
        <SelectItem value='closest'>Closest</SelectItem>
      </SelectContent>
    </Select>
  );
}
