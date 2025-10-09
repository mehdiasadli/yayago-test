import type { Metadata } from 'next';
import Link from 'next/link';
import { vacancies } from '@/data/vacancies';
import {
  Users,
  Target,
  Heart,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Award,
  Coffee,
  Briefcase,
  Home,
  GraduationCap,
  Calendar,
  DollarSign,
  HeartHandshake,
  PartyPopper,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers at Yayago | Join Our Team',
  description:
    'Join Yayago and help shape the future of car rental in Dubai. Explore exciting career opportunities, learn about our culture, values, and benefits.',
  keywords: ['careers', 'jobs', 'Yayago careers', 'Dubai jobs', 'work at Yayago', 'job opportunities'],
  openGraph: {
    title: 'Careers at Yayago | Join Our Team',
    description: 'Join Yayago and help shape the future of car rental in Dubai.',
    type: 'website',
  },
};

export default function CareersPage() {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, creating exceptional experiences.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace change and constantly seek new ways to improve and innovate.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We act with honesty, transparency, and accountability in all our interactions.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'We build trust through reliability, security, and consistent quality.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, continuously raising the bar.',
    },
    {
      icon: Globe,
      title: 'Collaboration',
      description: 'We work together as one team, leveraging diverse perspectives and skills.',
    },
  ];

  const principles = [
    {
      title: 'Think Big, Start Small',
      description: 'We dream big but execute with focus, taking calculated steps toward ambitious goals.',
    },
    {
      title: 'Ownership Mindset',
      description: 'We take full ownership of our work, treating every challenge as an opportunity to excel.',
    },
    {
      title: 'Data-Driven Decisions',
      description: 'We base our decisions on data and insights, not assumptions or opinions.',
    },
    {
      title: 'Fail Fast, Learn Faster',
      description: 'We embrace experimentation and learn quickly from both successes and failures.',
    },
    {
      title: 'Customer Obsession',
      description: 'We obsess over customer needs and continuously seek ways to delight them.',
    },
    {
      title: 'Speed & Quality',
      description: 'We move fast without compromising on quality, finding the right balance.',
    },
  ];

  const benefits = {
    employee: [
      {
        icon: DollarSign,
        title: 'Competitive Salary',
        description: 'Market-leading compensation packages with performance bonuses',
      },
      {
        icon: Briefcase,
        title: 'Career Growth',
        description: 'Clear career progression paths and promotion opportunities',
      },
      {
        icon: Award,
        title: 'Recognition Programs',
        description: 'Regular recognition and rewards for outstanding performance',
      },
      {
        icon: Calendar,
        title: 'Flexible Work',
        description: 'Hybrid work options and flexible hours for better work-life balance',
      },
    ],
    lifeFamily: [
      {
        icon: Heart,
        title: 'Health Insurance',
        description: 'Comprehensive medical, dental, and vision coverage for you and family',
      },
      {
        icon: Home,
        title: 'Housing Allowance',
        description: 'Generous housing allowance or accommodation support',
      },
      {
        icon: HeartHandshake,
        title: 'Parental Leave',
        description: 'Generous parental leave policies for new parents',
      },
      {
        icon: Coffee,
        title: 'Wellness Programs',
        description: 'Gym memberships, wellness activities, and mental health support',
      },
    ],
    cultureDevelopment: [
      {
        icon: GraduationCap,
        title: 'Learning & Development',
        description: 'Training programs, workshops, and conference attendance',
      },
      {
        icon: Globe,
        title: 'Global Exposure',
        description: 'Opportunities to work with international teams and markets',
      },
      {
        icon: PartyPopper,
        title: 'Team Events',
        description: 'Regular team building activities, celebrations, and social events',
      },
      {
        icon: Zap,
        title: 'Innovation Time',
        description: '20% time to work on passion projects and new ideas',
      },
    ],
  };

  // Get featured vacancies
  const featuredRoles = vacancies.filter((vacancy) => vacancy.featured);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 px-6 lg:px-8 border-b-2 border-primary overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-block mb-4'>
            <span className='px-4 py-2 bg-primary/20 text-primary text-sm font-semibold tracking-wide uppercase border border-primary'>
              Join Our Team
            </span>
          </div>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight'>
            Build the Future of Mobility
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8'>
            Join a diverse team of innovators, dreamers, and doers who are revolutionizing car rental in the Middle
            East. Let's create something extraordinary together.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/company/careers/vacancies'
              className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
            >
              View Open Positions
              <ArrowRight className='w-5 h-5' strokeWidth={2} />
            </Link>
            <Link
              href='#life-at-yayago'
              className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-colors'
            >
              Learn About Life at Yayago
            </Link>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className='py-20 px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>Why Join Yayago?</h2>
              <div className='space-y-4 text-gray-700 leading-relaxed'>
                <p className='text-lg'>
                  At Yayago, we're not just building a car rental platform—we're creating a movement that transforms how
                  people access and share vehicles in the Middle East.
                </p>
                <p>
                  Founded in 2023, we've grown from a small startup to a thriving marketplace connecting thousands of
                  car owners with renters across the UAE. Our success is driven by our incredible team of talented,
                  passionate individuals who share a common vision.
                </p>
                <p>
                  We're backed by leading investors and are expanding rapidly. This is your chance to be part of
                  something special—to build products that impact millions of lives and shape the future of urban
                  mobility.
                </p>
              </div>

              <div className='grid grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-gray-200'>
                <div>
                  <div className='text-4xl font-bold text-primary mb-2'>50+</div>
                  <div className='text-sm text-gray-600'>Team Members</div>
                </div>
                <div>
                  <div className='text-4xl font-bold text-primary mb-2'>15+</div>
                  <div className='text-sm text-gray-600'>Nationalities</div>
                </div>
                <div>
                  <div className='text-4xl font-bold text-primary mb-2'>4.8</div>
                  <div className='text-sm text-gray-600'>Glassdoor Rating</div>
                </div>
              </div>
            </div>

            <div className='relative h-[500px]'>
              <img
                src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
                alt='Team collaboration'
                className='w-full h-full object-cover border-2 border-gray-200'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life at Yayago */}
      <section id='life-at-yayago' className='py-20 px-6 lg:px-8 bg-gray-100'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Life at Yayago</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We foster a culture of innovation, collaboration, and continuous growth where everyone can thrive
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <div className='relative h-64 overflow-hidden group'>
              <img
                src='https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80'
                alt='Modern office space'
                className='w-full h-full object-cover border-2 border-gray-200 group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
                <p className='text-white font-semibold text-lg'>Modern Workspace</p>
              </div>
            </div>
            <div className='relative h-64 overflow-hidden group'>
              <img
                src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80'
                alt='Team meeting'
                className='w-full h-full object-cover border-2 border-gray-200 group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
                <p className='text-white font-semibold text-lg'>Collaborative Culture</p>
              </div>
            </div>
            <div className='relative h-64 overflow-hidden group'>
              <img
                src='https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80'
                alt='Team celebration'
                className='w-full h-full object-cover border-2 border-gray-200 group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6'>
                <p className='text-white font-semibold text-lg'>Celebrate Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-20 px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Our Core Values</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              These principles guide our decisions, actions, and how we work together every day
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className='bg-gray-50 border-2 border-gray-200 p-8 hover:border-primary transition-colors group'
                >
                  <div className='w-14 h-14 bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors'>
                    <Icon className='w-7 h-7 text-primary group-hover:text-white' strokeWidth={2} />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{value.title}</h3>
                  <p className='text-gray-600'>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className='py-20 px-6 lg:px-8 bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold mb-4'>Operating Principles</h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>How we operate and make decisions as a team</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {principles.map((principle, index) => (
              <div
                key={index}
                className='bg-white/5 border-2 border-white/10 p-6 hover:border-primary transition-colors'
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-8 h-8 bg-primary flex items-center justify-center text-white font-bold'>
                    {index + 1}
                  </div>
                  <h3 className='text-lg font-bold'>{principle.title}</h3>
                </div>
                <p className='text-gray-300'>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className='py-20 px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Benefits & Perks</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We invest in our people with comprehensive benefits and perks
            </p>
          </div>

          <div className='space-y-12'>
            {/* Employee Benefits */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary inline-block'>
                For Employees
              </h3>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {benefits.employee.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className='border-2 border-gray-200 p-6 hover:border-primary transition-colors'>
                      <Icon className='w-8 h-8 text-primary mb-4' strokeWidth={2} />
                      <h4 className='text-lg font-bold text-gray-900 mb-2'>{benefit.title}</h4>
                      <p className='text-sm text-gray-600'>{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Life & Family */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary inline-block'>
                Life & Family
              </h3>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {benefits.lifeFamily.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className='border-2 border-gray-200 p-6 hover:border-primary transition-colors'>
                      <Icon className='w-8 h-8 text-primary mb-4' strokeWidth={2} />
                      <h4 className='text-lg font-bold text-gray-900 mb-2'>{benefit.title}</h4>
                      <p className='text-sm text-gray-600'>{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Culture & Development */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary inline-block'>
                Culture & Development
              </h3>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {benefits.cultureDevelopment.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className='border-2 border-gray-200 p-6 hover:border-primary transition-colors'>
                      <Icon className='w-8 h-8 text-primary mb-4' strokeWidth={2} />
                      <h4 className='text-lg font-bold text-gray-900 mb-2'>{benefit.title}</h4>
                      <p className='text-sm text-gray-600'>{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Roles */}
      <section className='py-20 px-6 lg:px-8 bg-gray-50'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center justify-between mb-12'>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-4'>Open Positions</h2>
              <p className='text-xl text-gray-600'>Join our team and make an impact</p>
            </div>
            <Link
              href='/company/careers/vacancies'
              className='hidden md:inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
            >
              View All Positions
              <ArrowRight className='w-5 h-5' strokeWidth={2} />
            </Link>
          </div>

          <div className='space-y-6'>
            {featuredRoles.map((role) => (
              <div
                key={role.id}
                className='bg-white border-2 border-gray-200 p-8 hover:border-primary hover:shadow-lg transition-all group'
              >
                <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4'>
                  <div className='flex-1'>
                    <div className='flex flex-wrap items-center gap-3 mb-3'>
                      <span className='px-3 py-1 bg-primary/10 text-primary text-sm font-semibold'>
                        {role.department}
                      </span>
                      <span className='text-sm text-gray-500'>•</span>
                      <span className='text-sm text-gray-600'>{role.location}</span>
                      <span className='text-sm text-gray-500'>•</span>
                      <span className='text-sm text-gray-600'>{role.type}</span>
                      {role.salary && (
                        <>
                          <span className='text-sm text-gray-500'>•</span>
                          <span className='text-sm text-gray-600'>{role.salary}</span>
                        </>
                      )}
                    </div>
                    <h3 className='text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors'>
                      {role.title}
                    </h3>
                    <p className='text-gray-600'>{role.description}</p>
                  </div>
                  <Link
                    href={`/company/careers/vacancies/${role.slug}`}
                    className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-primary text-white font-semibold transition-colors whitespace-nowrap'
                  >
                    Apply Now
                    <ArrowRight className='w-5 h-5' strokeWidth={2} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-12 md:hidden'>
            <Link
              href='/company/careers/vacancies'
              className='inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
            >
              View All Positions
              <ArrowRight className='w-5 h-5' strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-dark text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>Ready to Start Your Journey?</h2>
          <p className='text-xl text-white/90 mb-8 leading-relaxed'>
            Whether you're an engineer, designer, marketer, or operations expert, we'd love to hear from you. Let's
            build the future together.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/company/careers/vacancies'
              className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold transition-colors'
            >
              Explore Opportunities
              <ArrowRight className='w-5 h-5' strokeWidth={2} />
            </Link>
            <Link
              href='/support/contact'
              className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold border-2 border-white transition-colors'
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
