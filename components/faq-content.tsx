'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { faqCategories, type TFAQ } from '@/data/faqs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

interface FAQContentProps {
  faqs: TFAQ[];
}

export default function FAQContent({ faqs }: FAQContentProps) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Initialize from URL params
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [faqs, searchQuery, selectedCategory]);

  // Group FAQs by category
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, TFAQ[]> = {};

    filteredFAQs.forEach((faq) => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      groups[faq.category].push(faq);
    });

    return groups;
  }, [filteredFAQs]);

  const categoryEntries = Object.entries(groupedFAQs);

  return (
    <div className='max-w-5xl mx-auto px-6 lg:px-8 py-12'>
      {/* Search & Filter Section */}
      <div className='bg-white border-2 border-gray-200 p-6 mb-8'>
        <div className='flex items-center gap-2 mb-6'>
          <Filter className='w-5 h-5 text-primary' strokeWidth={2} />
          <h3 className='text-lg font-bold text-gray-900'>Search & Filter</h3>
        </div>

        <div className='grid md:grid-cols-3 gap-4'>
          {/* Search */}
          <div className='md:col-span-2'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' strokeWidth={2} />
              <Input
                type='text'
                placeholder='Search questions and answers...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='pl-10 h-12 border-2 border-gray-300 focus:border-primary'
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='w-full h-12 px-4 border-2 border-gray-300 bg-white text-gray-900 font-medium focus:border-primary focus:outline-none cursor-pointer'
            >
              {faqCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(searchQuery || selectedCategory !== 'All') && (
          <div className='flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200'>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors'
              >
                Search: "{searchQuery}"<span className='text-xs'>✕</span>
              </button>
            )}
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className='inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors'
              >
                Category: {selectedCategory}
                <span className='text-xs'>✕</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className='mb-6'>
        <p className='text-lg font-semibold text-gray-900'>
          {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'} found
        </p>
      </div>

      {/* FAQ Accordions */}
      {categoryEntries.length > 0 ? (
        <div className='space-y-8'>
          {categoryEntries.map(([category, categoryFAQs]) => (
            <div key={category} className='bg-white border-2 border-gray-200 p-6'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200'>{category}</h2>

              <Accordion type='single' collapsible className='space-y-4'>
                {categoryFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={`faq-${faq.id}`} className='border-2 border-gray-200'>
                    <AccordionTrigger className='px-6 py-4 hover:bg-gray-50 text-left font-semibold text-gray-900 hover:text-primary transition-colors'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='px-6 py-4 text-gray-700 leading-relaxed border-t-2 border-gray-200'>
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      ) : (
        <div className='text-center py-20 bg-white border-2 border-gray-200'>
          <div className='max-w-md mx-auto'>
            <div className='w-20 h-20 bg-gray-100 flex items-center justify-center mx-auto mb-6'>
              <Search className='w-10 h-10 text-gray-400' strokeWidth={2} />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>No questions found</h3>
            <p className='text-gray-600 mb-6'>Try adjusting your search or filter criteria to find more answers.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className='px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Contact Support CTA */}
      <div className='mt-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 border-2 border-gray-900'>
        <div className='text-center'>
          <h3 className='text-2xl font-bold mb-3'>Still have questions?</h3>
          <p className='text-gray-300 mb-6'>
            Our support team is available 24/7 to help you with any questions or concerns.
          </p>
          <a
            href='/support/contact'
            className='inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
