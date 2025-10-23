import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface SortSelectorProps {
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export default function SortSelector({ sortBy, setSortBy }: SortSelectorProps) {
  return (
    <Select value={sortBy} onValueChange={setSortBy}>
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
