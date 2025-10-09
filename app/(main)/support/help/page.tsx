import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  CreditCard,
  Shield,
  Car,
  FileText,
  Users,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  MapPin,
  Settings,
  Clock,
  DollarSign,
  Key,
  TrendingUp,
} from 'lucide-react';
import HelpSearch from '@/components/help-search';

export const metadata: Metadata = {
  title: 'Help Center | Support & Resources',
  description:
    'Get help with Yayago car rental services. Browse guides, troubleshooting tips, and find answers to your questions about booking, payments, and more.',
  keywords: ['help center', 'support', 'car rental help', 'Yayago support', 'troubleshooting', 'guides', 'how to'],
  openGraph: {
    title: 'Help Center | Yayago',
    description: 'Get help with Yayago car rental services. Browse guides and find answers to your questions.',
    type: 'website',
  },
};

export default function HelpPage() {
  const popularTopics = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn how to use Yayago and book your first car',
      href: '/support/how-it-works',
      color: 'bg-blue-500',
    },
    {
      icon: CreditCard,
      title: 'Payments & Billing',
      description: 'Manage payment methods and understand charges',
      href: '/support/faq',
      color: 'bg-green-500',
    },
    {
      icon: Shield,
      title: 'Insurance & Protection',
      description: 'Learn about coverage and protection plans',
      href: '/support/faq',
      color: 'bg-purple-500',
    },
    {
      icon: Car,
      title: 'Booking a Car',
      description: 'Find, book, and manage your car rentals',
      href: '/cars/rent',
      color: 'bg-orange-500',
    },
    {
      icon: Users,
      title: 'Account & Profile',
      description: 'Manage your account settings and verification',
      href: '/profile/settings',
      color: 'bg-pink-500',
    },
    {
      icon: FileText,
      title: 'Policies & Terms',
      description: 'Review our terms, policies, and guidelines',
      href: '/legal/terms',
      color: 'bg-indigo-500',
    },
  ];

  const quickStartGuides = [
    {
      title: 'How to Book Your First Car',
      steps: [
        'Create an account',
        'Verify your identity',
        'Browse available cars',
        'Select dates & book',
        'Pick up your car',
      ],
      link: '/support/how-it-works',
    },
    {
      title: 'How to List Your Car',
      steps: ['Sign up as a host', 'Add car details & photos', 'Set your pricing', 'Review & publish', 'Start earning'],
      link: '/support/list-your-car',
    },
    {
      title: 'How to Verify Your Account',
      steps: [
        'Log in to your account',
        'Go to profile settings',
        'Upload required documents',
        'Submit for review',
        'Get verified in 1-2 hours',
      ],
      link: '/profile/settings',
    },
  ];

  const troubleshooting = [
    {
      issue: 'Booking not confirmed',
      solution:
        'Check your email for confirmation. If using "Request to Book", wait for host approval (usually within a few hours).',
    },
    {
      issue: 'Payment failed',
      solution:
        'Verify your card details and ensure sufficient funds. Try a different payment method or contact your bank.',
    },
    {
      issue: "Can't verify account",
      solution:
        'Ensure documents are clear, valid, and match your profile. Check that file sizes are under 5MB and in supported formats.',
    },
    {
      issue: 'Car location changed',
      solution:
        "Contact the host immediately through the app. You can modify or cancel your booking if the new location doesn't work.",
    },
  ];

  const quickActions = [
    { icon: Search, label: 'Track My Booking', href: '/profile/dashboard' },
    { icon: Settings, label: 'Verify My Account', href: '/profile/settings' },
    { icon: CreditCard, label: 'Update Payment', href: '/profile/settings/billing' },
    { icon: MessageCircle, label: 'Contact Support', href: '/support/contact' },
    { icon: MapPin, label: 'Find Cars Near Me', href: '/cars/rent' },
    { icon: TrendingUp, label: 'List My Car', href: '/support/list-your-car' },
  ];

  const popularArticles = [
    { question: 'What documents do I need to rent a car?', category: 'Requirements', href: '/support/faq' },
    { question: 'How does insurance work?', category: 'Insurance', href: '/support/faq' },
    { question: 'Can I modify or cancel my booking?', category: 'Modifications', href: '/support/faq' },
    { question: 'What if the car breaks down?', category: 'Vehicle Issues', href: '/support/faq' },
    { question: 'How do I add an additional driver?', category: 'Account', href: '/support/faq' },
    { question: 'Is there a mileage limit?', category: 'Driving', href: '/support/faq' },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section with Search */}
      <section className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 px-6 lg:px-8 border-b-2 border-primary'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='w-20 h-20 bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-6'>
            <HelpCircle className='w-10 h-10 text-primary' strokeWidth={2} />
          </div>

          <h1 className='text-5xl md:text-6xl font-bold mb-6 tracking-tight'>How can we help you?</h1>
          <p className='text-xl text-gray-300 mb-8'>
            Search our help center or browse by category to find the answers you need
          </p>

          {/* Search Bar */}
          <HelpSearch />
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>
        {/* Popular Topics */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>Browse by Topic</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {popularTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={topic.title}
                  href={topic.href}
                  className='group bg-white border-2 border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all'
                >
                  <div className={`w-12 h-12 ${topic.color} flex items-center justify-center mb-4`}>
                    <Icon className='w-6 h-6 text-white' strokeWidth={2} />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                    {topic.title}
                  </h3>
                  <p className='text-gray-600'>{topic.description}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick Actions */}
        <section className='mb-16 bg-white border-2 border-gray-200 p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Quick Actions</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className='flex flex-col items-center gap-3 p-4 hover:bg-gray-50 transition-colors group'
                >
                  <div className='w-12 h-12 bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors'>
                    <Icon className='w-6 h-6 text-primary group-hover:text-white' strokeWidth={2} />
                  </div>
                  <span className='text-sm font-semibold text-gray-700 text-center'>{action.label}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>Quick Start Guides</h2>
          <div className='grid md:grid-cols-3 gap-6'>
            {quickStartGuides.map((guide, index) => (
              <div key={guide.title} className='bg-white border-2 border-gray-200 p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 bg-primary flex items-center justify-center text-white font-bold'>
                    {index + 1}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900'>{guide.title}</h3>
                </div>
                <ul className='space-y-3 mb-6'>
                  {guide.steps.map((step, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <CheckCircle2 className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                      <span className='text-gray-700'>{step}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={guide.link}
                  className='inline-block w-full py-3 text-center bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className='mb-16'>
          <div className='flex items-center gap-3 mb-8'>
            <AlertCircle className='w-8 h-8 text-primary' strokeWidth={2} />
            <h2 className='text-3xl font-bold text-gray-900'>Common Issues</h2>
          </div>
          <div className='grid md:grid-cols-2 gap-6'>
            {troubleshooting.map((item, index) => (
              <div key={index} className='bg-white border-2 border-gray-200 p-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>{item.issue}</h3>
                <p className='text-gray-700'>{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>Popular Articles</h2>
          <div className='bg-white border-2 border-gray-200'>
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                href={article.href}
                className='flex items-center justify-between p-6 border-b-2 border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors group'
              >
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-1'>
                    {article.question}
                  </h3>
                  <span className='text-sm text-gray-500'>{article.category}</span>
                </div>
                <div className='text-primary'>→</div>
              </Link>
            ))}
          </div>
          <div className='mt-6 text-center'>
            <Link
              href='/support/faq'
              className='inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
            >
              View All FAQ
            </Link>
          </div>
        </section>

        {/* Support Options */}
        <section className='grid md:grid-cols-3 gap-6'>
          <div className='bg-white border-2 border-gray-200 p-8 text-center'>
            <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4'>
              <HelpCircle className='w-8 h-8 text-primary' strokeWidth={2} />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>Browse FAQ</h3>
            <p className='text-gray-600 mb-6'>Find answers to frequently asked questions</p>
            <Link
              href='/support/faq'
              className='inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors'
            >
              Go to FAQ
            </Link>
          </div>

          <div className='bg-white border-2 border-gray-200 p-8 text-center'>
            <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4'>
              <MessageCircle className='w-8 h-8 text-primary' strokeWidth={2} />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>Contact Support</h3>
            <p className='text-gray-600 mb-6'>Get help from our support team 24/7</p>
            <Link
              href='/support/contact'
              className='inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors'
            >
              Contact Us
            </Link>
          </div>

          <div className='bg-white border-2 border-gray-200 p-8 text-center'>
            <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4'>
              <BookOpen className='w-8 h-8 text-primary' strokeWidth={2} />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>Community Blog</h3>
            <p className='text-gray-600 mb-6'>Read tips, guides, and success stories</p>
            <Link
              href='/community/blog'
              className='inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors'
            >
              Read Blog
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
