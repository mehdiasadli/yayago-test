import Link from 'next/link';
import { Briefcase, ArrowLeft, Home } from 'lucide-react';

export default function VacancyNotFound() {
  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-6'>
      <div className='max-w-2xl w-full text-center'>
        <div className='bg-white border-2 border-gray-200 p-12'>
          {/* Icon */}
          <div className='w-24 h-24 bg-primary/10 flex items-center justify-center mx-auto mb-8'>
            <Briefcase className='w-12 h-12 text-primary' strokeWidth={2} />
          </div>

          {/* Title */}
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>Position Not Found</h1>

          {/* Description */}
          <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
            Sorry, we couldn't find the job position you're looking for. It may have been filled or removed.
          </p>

          {/* Actions */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/company/careers/vacancies'
              className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
            >
              <ArrowLeft className='w-5 h-5' strokeWidth={2} />
              View All Positions
            </Link>
            <Link
              href='/company/careers'
              className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold border-2 border-gray-200 transition-colors'
            >
              <Home className='w-5 h-5' strokeWidth={2} />
              Careers Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
