import { Button } from '@/components/ui/button';
import { ListCarSteps } from '@/components/list-car-steps';
import {
  DollarSign,
  Shield,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  FileText,
  Camera,
  CreditCard,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'List Your Car on YayaGo',
  description:
    'Turn your car into a source of income. List your vehicle on YayaGo and connect with thousands of renters. No commission fees, full control, and unlimited earning potential.',
};

export default function ListYourCarPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
        {/* Animated Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000' />
        </div>

        {/* Grid Pattern */}
        <div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className='relative max-w-4xl mx-auto text-center'>
          <div className='inline-block mb-6'>
            <span className='px-4 py-2 bg-primary/20 text-primary-foreground text-sm font-semibold tracking-wide uppercase backdrop-blur-sm border border-primary/30'>
              List Your Car
            </span>
          </div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight'>
            Turn Your Car Into Income
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8'>
            List your vehicle on YayaGo and earn money from your idle car. Keep 100% of rental income with no commission
            fees—just a simple monthly membership.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/auth/register'>
              <Button
                size='lg'
                className='h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all'
              >
                Get Started Now
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            </Link>
            <Link href='/pricing'>
              <Button
                size='lg'
                variant='outline'
                className='h-14 px-8 text-lg font-semibold bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border-white/30'
              >
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
                Why List on YayaGo
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
              The Smartest Way to Monetize Your Car
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Unlike traditional rental platforms, YayaGo lets you keep 100% of your earnings. No hidden fees, no
              commission cuts—just pure profit.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg'>
                <DollarSign className='w-8 h-8 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Zero Commission</h3>
              <p className='text-gray-600'>
                Keep 100% of your rental income. We only charge a flat monthly membership fee—no percentage cuts, ever.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg'>
                <Users className='w-8 h-8 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Direct Contact</h3>
              <p className='text-gray-600'>
                Renters contact you directly via phone or WhatsApp. Build relationships and negotiate terms personally.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg'>
                <Shield className='w-8 h-8 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Full Control</h3>
              <p className='text-gray-600'>
                You set your own prices, rental terms, requirements, and availability. Your car, your rules.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg'>
                <TrendingUp className='w-8 h-8 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Unlimited Potential</h3>
              <p className='text-gray-600'>
                List multiple vehicles under one account. Scale your rental business without additional commission fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>How Much Can You Earn?</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Your earning potential depends on your car type, location, and rental frequency. Here are realistic
              estimates:
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all'>
              <div className='text-center mb-4'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Economy Cars</h3>
                <p className='text-gray-600'>Toyota Corolla, Hyundai Elantra</p>
              </div>
              <div className='text-center mb-6'>
                <div className='text-4xl font-bold text-primary mb-2'>₼40-60</div>
                <div className='text-gray-600'>per day</div>
              </div>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>₼1,200-1,800/month (rented 30 days)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>₼600-900/month (rented 15 days)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>High demand in Baku</span>
                </li>
              </ul>
              <div className='bg-gray-50 p-4 rounded text-sm text-gray-600'>
                <strong>Annual potential:</strong> ₼7,200-10,800 at 50% utilization
              </div>
            </div>

            <div className='bg-white border-2 border-primary rounded-lg p-8 shadow-lg relative'>
              <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                <span className='px-4 py-1 bg-primary text-white text-sm font-bold rounded-full'>POPULAR</span>
              </div>
              <div className='text-center mb-4'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Mid-Range Cars</h3>
                <p className='text-gray-600'>Camry, Accord, Passat</p>
              </div>
              <div className='text-center mb-6'>
                <div className='text-4xl font-bold text-primary mb-2'>₼70-100</div>
                <div className='text-gray-600'>per day</div>
              </div>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>₼2,100-3,000/month (rented 30 days)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>₼1,050-1,500/month (rented 15 days)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>Great balance of demand and profit</span>
                </li>
              </ul>
              <div className='bg-primary/5 p-4 rounded text-sm text-gray-600'>
                <strong>Annual potential:</strong> ₼12,600-18,000 at 50% utilization
              </div>
            </div>

            <div className='bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary/50 hover:shadow-lg transition-all'>
              <div className='text-center mb-4'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>Luxury & SUVs</h3>
                <p className='text-gray-600'>Mercedes, BMW, Lexus</p>
              </div>
              <div className='text-center mb-6'>
                <div className='text-4xl font-bold text-primary mb-2'>₼120-200+</div>
                <div className='text-gray-600'>per day</div>
              </div>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>₼3,600-6,000/month (rented 30 days)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>₼1,800-3,000/month (rented 15 days)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <span className='text-gray-700'>Premium market segment</span>
                </li>
              </ul>
              <div className='bg-gray-50 p-4 rounded text-sm text-gray-600'>
                <strong>Annual potential:</strong> ₼21,600-36,000 at 50% utilization
              </div>
            </div>
          </div>

          <div className='mt-12 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-8'>
            <div className='flex items-start gap-4'>
              <AlertCircle className='w-6 h-6 text-primary flex-shrink-0 mt-1' strokeWidth={2} />
              <div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Maximize Your Earnings</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary font-bold'>•</span>
                    <span>
                      <strong>Keep your car in excellent condition</strong> - well-maintained cars rent faster and
                      command higher prices
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary font-bold'>•</span>
                    <span>
                      <strong>Respond quickly to inquiries</strong> - fast responses increase booking rates by 60%
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary font-bold'>•</span>
                    <span>
                      <strong>Offer competitive rates</strong> - research similar cars in your area and price
                      accordingly
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary font-bold'>•</span>
                    <span>
                      <strong>Build positive reviews</strong> - great reviews lead to more bookings and higher rates
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary font-bold'>•</span>
                    <span>
                      <strong>List multiple cars</strong> - diversify your fleet to maximize income potential
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white border-t border-gray-100'>
        <div className='max-w-4xl mx-auto text-center mb-16'>
          <div className='inline-block mb-4'>
            <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
              Complete Guide
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
            How to List Your Car in 9 Steps
          </h2>
          <p className='text-xl text-gray-600'>
            Follow our comprehensive guide to create a professional listing that attracts renters. Navigate through each
            step for detailed instructions.
          </p>
        </div>

        <ListCarSteps />
      </section>

      {/* Requirements Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
              Requirements to List Your Car
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              To ensure quality and safety for all users, your vehicle must meet these basic requirements:
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white border border-gray-200 rounded-lg p-8'>
              <div className='flex items-center gap-3 mb-4'>
                <FileText className='w-8 h-8 text-primary' strokeWidth={2} />
                <h3 className='text-2xl font-bold text-gray-900'>Vehicle Requirements</h3>
              </div>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Valid Registration:</strong>
                    <span className='text-gray-600'>
                      {' '}
                      Current mulkiyyə (vehicle registration) in your name or with proper authorization
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Insurance:</strong>
                    <span className='text-gray-600'>
                      {' '}
                      Active vehicle insurance policy covering third-party liability
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Vehicle Condition:</strong>
                    <span className='text-gray-600'>
                      {' '}
                      Good working condition, safe to drive, clean interior and exterior
                    </span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Age Limit:</strong>
                    <span className='text-gray-600'> Vehicles must be 15 years old or newer (model year 2010+)</span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Technical Inspection:</strong>
                    <span className='text-gray-600'>
                      {' '}
                      Valid texniki baxış certificate if required by Azerbaijani law
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className='bg-white border border-gray-200 rounded-lg p-8'>
              <div className='flex items-center gap-3 mb-4'>
                <Shield className='w-8 h-8 text-primary' strokeWidth={2} />
                <h3 className='text-2xl font-bold text-gray-900'>Owner Requirements</h3>
              </div>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Age Requirement:</strong>
                    <span className='text-gray-600'> Must be 21 years or older to list vehicles</span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Valid ID:</strong>
                    <span className='text-gray-600'> Government-issued ID card or passport for verification</span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Contact Information:</strong>
                    <span className='text-gray-600'> Active phone number capable of receiving calls and messages</span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Email Address:</strong>
                    <span className='text-gray-600'> Valid email for account verification and notifications</span>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                  <div>
                    <strong className='text-gray-900'>Active Membership:</strong>
                    <span className='text-gray-600'> Paid monthly membership based on number of vehicles listed</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-8 bg-white border-2 border-primary/30 rounded-lg p-8'>
            <div className='flex items-start gap-4'>
              <Camera className='w-8 h-8 text-primary flex-shrink-0 mt-1' strokeWidth={2} />
              <div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Photo Requirements</h3>
                <p className='text-gray-600 mb-4'>
                  High-quality photos are essential for attracting renters. Your listing must include:
                </p>
                <ul className='grid md:grid-cols-2 gap-3'>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>Minimum 10 photos (15-20 recommended)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>Exterior from all angles</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>Interior shots (front, rear, dashboard)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>Trunk/cargo space</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>Good lighting (natural daylight preferred)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>Clean, uncluttered background</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>High resolution (minimum 1920x1080)</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                    <span className='text-gray-700'>No watermarks or text overlays</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white border-t border-gray-100'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>Common questions from car owners about listing on YayaGo</p>
          </div>

          <div className='space-y-6'>
            <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>How much does it cost to list my car?</h3>
              <p className='text-gray-600 leading-relaxed'>
                YayaGo operates on a simple monthly membership model. Pricing depends on how many cars you want to list,
                starting from ₼29/month for one vehicle. We never take commission from your rentals—you keep 100% of
                what you earn. Check our{' '}
                <Link href='/pricing' className='text-primary hover:underline font-medium'>
                  pricing page
                </Link>{' '}
                for detailed plans.
              </p>
            </div>

            <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Do you handle payments between me and renters?</h3>
              <p className='text-gray-600 leading-relaxed'>
                No, YayaGo is a listing platform, not a booking system. You communicate directly with renters and handle
                payment arrangements yourselves. This gives you flexibility to accept cash, bank transfer, or any method
                you both agree on. We recommend discussing payment terms clearly before the rental begins.
              </p>
            </div>

            <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>What if my car gets damaged during a rental?</h3>
              <p className='text-gray-600 leading-relaxed'>
                You are responsible for setting your own security deposit and rental terms. We recommend always
                collecting a security deposit, taking photos before and after each rental, and having a signed rental
                agreement. Consider requiring renters to have their own insurance or add temporary coverage. YayaGo is
                not responsible for damages, but we can provide resources and templates to help protect yourself.
              </p>
            </div>

            <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Can I set my own rental prices?</h3>
              <p className='text-gray-600 leading-relaxed'>
                Absolutely! You have complete control over your pricing. Set daily, weekly, and monthly rates based on
                your car's value, market demand, and competition. You can adjust prices anytime through your dashboard.
                We provide market insights to help you price competitively, but the final decision is always yours.
              </p>
            </div>

            <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>How quickly can I start receiving inquiries?</h3>
              <p className='text-gray-600 leading-relaxed'>
                Once your listing is published, it's immediately visible to thousands of potential renters. Most well-
                presented listings with competitive pricing receive their first inquiry within 24-48 hours. Having
                high-quality photos, detailed descriptions, and competitive rates significantly increases your chances
                of quick bookings.
              </p>
            </div>

            <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Can I list multiple cars?</h3>
              <p className='text-gray-600 leading-relaxed'>
                Yes! YayaGo is perfect for individuals with multiple vehicles or small rental businesses. Our membership
                tiers support from 1 up to 25 vehicles under a single account. The more cars you list, the more income
                potential you have—all while paying just one flat monthly fee with no commission on any rental.
              </p>
            </div>

            <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>What if I need to make my car unavailable?</h3>
              <p className='text-gray-600 leading-relaxed'>
                You can instantly mark your car as unavailable through your dashboard whenever you need to use it
                personally or for maintenance. You can also set availability calendars to block specific dates. Your
                listing remains active but shows as currently unavailable to renters. No need to delete and recreate
                listings.
              </p>
            </div>

            <div className='bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Can I cancel my membership anytime?</h3>
              <p className='text-gray-600 leading-relaxed'>
                Yes, there are no long-term contracts. You can cancel your membership anytime from your account
                settings. When you cancel, your listings remain active until the end of your current billing period.
                After that, your listings will be hidden until you reactivate your membership. You can reactivate
                whenever you're ready to start renting again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
              Need Help Getting Started?
            </h2>
            <p className='text-xl text-gray-600'>
              Our support team is here to help you create the perfect listing and answer any questions.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            <Link
              href='/support/help'
              className='bg-white border border-gray-200 rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center'
            >
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg'>
                <AlertCircle className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Help Center</h3>
              <p className='text-gray-600'>Browse articles and guides</p>
            </Link>

            <Link
              href='/support/contact'
              className='bg-white border border-gray-200 rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center'
            >
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg'>
                <Phone className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>Contact Support</h3>
              <p className='text-gray-600'>Speak with our team</p>
            </Link>

            <Link
              href='/support/faq'
              className='bg-white border border-gray-200 rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center'
            >
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4 rounded-lg'>
                <FileText className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>FAQ</h3>
              <p className='text-gray-600'>Quick answers to common questions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-dark text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <Star className='w-16 h-16 text-white mx-auto mb-6' strokeWidth={2} />
          <h2 className='text-4xl md:text-5xl font-bold mb-6 tracking-tight'>Ready to Start Earning?</h2>
          <p className='text-xl text-primary-foreground/90 mb-10 leading-relaxed'>
            Join hundreds of car owners already earning on YayaGo. Create your account, list your car, and start
            receiving inquiries today.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/auth/register'>
              <Button
                size='lg'
                className='h-14 px-8 text-lg font-semibold bg-white text-primary hover:bg-gray-100 border-0 shadow-lg'
              >
                Create Your Account
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            </Link>
            <Link href='/pricing'>
              <Button
                size='lg'
                className='h-14 px-8 text-lg font-semibold bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/30'
              >
                View Pricing Plans
                <CreditCard className='w-5 h-5 ml-2' />
              </Button>
            </Link>
          </div>
          <p className='mt-8 text-primary-foreground/70'>
            No credit card required to get started • Cancel anytime • Keep 100% of rental income
          </p>
        </div>
      </section>
    </div>
  );
}
