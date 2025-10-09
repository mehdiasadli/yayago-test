import type { Metadata } from 'next';
import Link from 'next/link';
import { vacancies, departments } from '@/data/vacancies';
import { ArrowLeft, ArrowRight, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Open Positions | Careers at Yayago',
  description: 'Explore all open positions at Yayago. Find your next career opportunity and join our team.',
};

export default function VacanciesPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16 px-6 lg:px-8 border-b-2 border-primary'>
        <div className='max-w-7xl mx-auto'>
          <Link
            href='/company/careers'
            className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mb-6'
          >
            <ArrowLeft className='w-5 h-5' strokeWidth={2} />
            Back to Careers
          </Link>

          <h1 className='text-5xl md:text-6xl font-bold mb-6 tracking-tight'>Open Positions</h1>
          <p className='text-xl text-gray-300 leading-relaxed max-w-3xl'>
            Browse all available positions and find the perfect role for you. We have {vacancies.length} open positions
            across {departments.length - 1} departments.
          </p>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>
        {/* Department Filter (Future enhancement) */}
        <div className='mb-8 bg-white border-2 border-gray-200 p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-4'>Filter by Department</h2>
          <div className='flex flex-wrap gap-2'>
            {departments.map((dept) => (
              <button
                key={dept}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  dept === 'All' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Positions List */}
        <div className='space-y-6'>
          {vacancies.map((vacancy) => (
            <div
              key={vacancy.id}
              className='bg-white border-2 border-gray-200 p-8 hover:border-primary hover:shadow-lg transition-all group'
            >
              <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4'>
                <div className='flex-1'>
                  <div className='flex flex-wrap items-center gap-3 mb-3'>
                    <span className='px-3 py-1 bg-primary/10 text-primary text-sm font-semibold'>
                      {vacancy.department}
                    </span>
                    {vacancy.featured && (
                      <span className='px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold'>Featured</span>
                    )}
                  </div>

                  <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors'>
                    {vacancy.title}
                  </h3>

                  <p className='text-gray-600 mb-4 line-clamp-2'>{vacancy.description}</p>

                  <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600'>
                    <div className='flex items-center gap-1.5'>
                      <MapPin className='w-4 h-4' strokeWidth={2} />
                      <span>{vacancy.location}</span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <Briefcase className='w-4 h-4' strokeWidth={2} />
                      <span>{vacancy.type}</span>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <Clock className='w-4 h-4' strokeWidth={2} />
                      <span>{vacancy.experience}</span>
                    </div>
                    {vacancy.salary && (
                      <div className='flex items-center gap-1.5'>
                        <DollarSign className='w-4 h-4' strokeWidth={2} />
                        <span>{vacancy.salary}</span>
                      </div>
                    )}
                  </div>
                </div>

                <Link
                  href={`/company/careers/vacancies/${vacancy.slug}`}
                  className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-primary text-white font-semibold transition-colors whitespace-nowrap self-start'
                >
                  View Details
                  <ArrowRight className='w-5 h-5' strokeWidth={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-16 bg-gradient-to-br from-primary to-primary-dark text-white p-8 text-center'>
          <h2 className='text-2xl font-bold mb-3'>Don't see the right position?</h2>
          <p className='text-white/90 mb-6 max-w-2xl mx-auto'>
            We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind
            for future opportunities.
          </p>
          <a
            href='mailto:careers@yayago.com?subject=General Application'
            className='inline-block px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-colors'
          >
            Send Us Your Resume
          </a>
        </div>
      </div>
    </div>
  );
}
