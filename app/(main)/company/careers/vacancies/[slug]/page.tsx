import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { vacancies } from '@/data/vacancies';
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';

interface VacancyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return vacancies.map((vacancy) => ({
    slug: vacancy.slug,
  }));
}

export async function generateMetadata({ params }: VacancyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = vacancies.find((v) => v.slug === slug);

  if (!vacancy) {
    return {
      title: 'Vacancy Not Found',
    };
  }

  return {
    title: `${vacancy.title} | Careers at Yayago`,
    description: vacancy.description,
    keywords: [vacancy.title, vacancy.department, 'Yayago careers', 'Dubai jobs', vacancy.location],
    openGraph: {
      title: `${vacancy.title} | Yayago`,
      description: vacancy.description,
      type: 'website',
    },
  };
}

export default async function VacancyPage({ params }: VacancyPageProps) {
  const { slug } = await params;
  const vacancy = vacancies.find((v) => v.slug === slug);

  if (!vacancy) {
    notFound();
  }

  const formattedDate = new Date(vacancy.postedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white border-b-2 border-gray-200 pt-24 pb-8 px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='flex items-center justify-between'>
            <Link
              href='/company/careers/vacancies'
              className='inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mb-6'
            >
              <ArrowLeft className='w-5 h-5' strokeWidth={2} />
              Back to All Positions
            </Link>

            {/* Department Badge */}
            <div className='inline-block mb-4'>
              <span className='px-3 py-1.5 bg-primary text-white text-sm font-semibold uppercase tracking-wide'>
                {vacancy.department}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>{vacancy.title}</h1>

          {/* Meta Info */}
          <div className='flex flex-wrap items-center gap-6 text-gray-600 mb-6'>
            <div className='flex items-center gap-2'>
              <MapPin className='w-5 h-5' strokeWidth={2} />
              <span className='font-medium'>{vacancy.location}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Briefcase className='w-5 h-5' strokeWidth={2} />
              <span>{vacancy.type}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock className='w-5 h-5' strokeWidth={2} />
              <span>{vacancy.experience}</span>
            </div>
            {vacancy.salary && (
              <div className='flex items-center gap-2'>
                <DollarSign className='w-5 h-5' strokeWidth={2} />
                <span>{vacancy.salary}</span>
              </div>
            )}
            <div className='flex items-center gap-2'>
              <Calendar className='w-5 h-5' strokeWidth={2} />
              <span>Posted {formattedDate}</span>
            </div>
          </div>

          {/* Apply Button */}
          <a
            href={`mailto:careers@yayago.com?subject=Application for ${vacancy.title}&body=Hi, I am interested in applying for the ${vacancy.title} position.`}
            className='inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
          >
            Apply for this Position
          </a>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-5xl mx-auto px-6 lg:px-8 py-12'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Description */}
            <section className='bg-white border-2 border-gray-200 p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>About the Role</h2>
              <p className='text-gray-700 leading-relaxed'>{vacancy.description}</p>
            </section>

            {/* Responsibilities */}
            <section className='bg-white border-2 border-gray-200 p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>Responsibilities</h2>
              <ul className='space-y-3'>
                {vacancy.responsibilities.map((responsibility, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <CheckCircle2 className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className='bg-white border-2 border-gray-200 p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>Requirements</h2>
              <ul className='space-y-3'>
                {vacancy.requirements.map((requirement, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <CheckCircle2 className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>{requirement}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Nice to Have */}
            {vacancy.niceToHave.length > 0 && (
              <section className='bg-white border-2 border-gray-200 p-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-6'>Nice to Have</h2>
                <ul className='space-y-3'>
                  {vacancy.niceToHave.map((item, index) => (
                    <li key={index} className='flex items-start gap-3'>
                      <CheckCircle2 className='w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5' strokeWidth={2} />
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Benefits */}
            <section className='bg-white border-2 border-gray-200 p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>What We Offer</h2>
              <ul className='space-y-3'>
                {vacancy.benefits.map((benefit, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <CheckCircle2 className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Apply Section */}
            <section className='bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 border-2 border-gray-900'>
              <h2 className='text-2xl font-bold mb-4'>Ready to Apply?</h2>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                If you're excited about this opportunity and think you'd be a great fit, we'd love to hear from you.
                Send us your resume and a brief cover letter explaining why you're interested in this role.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <a
                  href={`mailto:careers@yayago.com?subject=Application for ${vacancy.title}&body=Hi, I am interested in applying for the ${vacancy.title} position.`}
                  className='inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
                >
                  Apply via Email
                </a>
                <Link
                  href='/company/careers'
                  className='inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-colors'
                >
                  Learn More About Yayago
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1 space-y-6'>
            {/* Quick Info */}
            <div className='bg-white border-2 border-gray-200 p-6 sticky top-24'>
              <h3 className='text-lg font-bold text-gray-900 mb-4'>Position Details</h3>
              <div className='space-y-4'>
                <div>
                  <div className='text-sm text-gray-500 mb-1'>Department</div>
                  <div className='font-semibold text-gray-900'>{vacancy.department}</div>
                </div>
                <div>
                  <div className='text-sm text-gray-500 mb-1'>Location</div>
                  <div className='font-semibold text-gray-900'>{vacancy.location}</div>
                </div>
                <div>
                  <div className='text-sm text-gray-500 mb-1'>Employment Type</div>
                  <div className='font-semibold text-gray-900'>{vacancy.type}</div>
                </div>
                <div>
                  <div className='text-sm text-gray-500 mb-1'>Experience Required</div>
                  <div className='font-semibold text-gray-900'>{vacancy.experience}</div>
                </div>
                {vacancy.salary && (
                  <div>
                    <div className='text-sm text-gray-500 mb-1'>Salary Range</div>
                    <div className='font-semibold text-gray-900'>{vacancy.salary}</div>
                  </div>
                )}
                <div>
                  <div className='text-sm text-gray-500 mb-1'>Posted Date</div>
                  <div className='font-semibold text-gray-900'>{formattedDate}</div>
                </div>
              </div>

              <div className='mt-6 pt-6 border-t-2 border-gray-200'>
                <a
                  href={`mailto:careers@yayago.com?subject=Application for ${vacancy.title}`}
                  className='block w-full text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* Share */}
            <div className='bg-gray-100 border-2 border-gray-200 p-6'>
              <h3 className='text-sm font-bold text-gray-900 mb-3'>Share this Position</h3>
              <p className='text-sm text-gray-600'>
                Know someone who would be perfect for this role? Share this job posting with them!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Positions */}
      <section className='bg-white border-t-2 border-gray-200 py-16 px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>Explore Other Positions</h2>
            <p className='text-xl text-gray-600'>Find more opportunities at Yayago</p>
          </div>
          <div className='text-center'>
            <Link
              href='/company/careers/vacancies'
              className='inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
            >
              View All Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
