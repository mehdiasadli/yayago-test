'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function HelpSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/support/faq?q=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push('/support/faq');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='relative max-w-2xl mx-auto'>
      <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400' strokeWidth={2} />
      <input
        type='text'
        placeholder='Search for help articles, guides, and FAQs...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className='w-full h-16 pl-14 pr-4 bg-white text-gray-900 text-lg border-2 border-gray-200 focus:border-primary focus:outline-none'
      />
    </div>
  );
}
