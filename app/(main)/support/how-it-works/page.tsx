import { Button } from '@/components/ui/button';
import {
  Search,
  Filter,
  Phone,
  MessageCircle,
  UserPlus,
  Car,
  CreditCard,
  Upload,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'How It Works',
  description:
    'Learn how YayaGo connects car owners with renters. Simple, transparent, and direct communication between both parties.',
};

export default function HowItWorksPage() {
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
              How It Works
            </span>
          </div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight'>
            Simple, Transparent, Direct
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            YayaGo is a platform that connects car owners directly with renters. No middleman, no booking fees, just
            direct communication.
          </p>
        </div>
      </section>

      {/* How YayaGo Operates */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-block mb-4'>
            <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
              Our Platform
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>How YayaGo Operates</h2>
          <p className='text-xl text-gray-600 mb-12 leading-relaxed'>
            YayaGo is a listing platform that brings car owners and renters together. We provide the tools and
            visibility, while you handle the rest. Think of us as your marketplace—you control the terms, pricing, and
            communication.
          </p>

          <div className='grid md:grid-cols-3 gap-8 mb-16'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                <Car className='w-8 h-8 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Car Owners List</h3>
              <p className='text-gray-600'>
                Owners create detailed listings with photos, pricing, and availability for their vehicles.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                <Search className='w-8 h-8 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Renters Browse</h3>
              <p className='text-gray-600'>
                Renters search and filter through available cars to find their perfect match.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4'>
                <MessageCircle className='w-8 h-8 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Direct Contact</h3>
              <p className='text-gray-600'>
                Both parties communicate directly to arrange rental terms, payment, and pickup.
              </p>
            </div>
          </div>

          <div className='bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-8 md:p-10'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>No Booking Fees, No Commissions</h3>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Unlike other platforms, we don't take a cut from your transactions or charge booking fees. Owners pay a
              monthly membership to list their cars, and renters browse completely free. Everything else—pricing,
              payment methods, rental terms—is between you and the other party.
            </p>
          </div>
        </div>
      </section>

      {/* For Renters */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
                For Renters
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>Find Your Perfect Car</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Browse, search, and connect with car owners in minutes. It's completely free to use.
            </p>
          </div>

          {/* Steps */}
          <div className='space-y-12'>
            {/* Step 1 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>1</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <Search className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>Browse & Search</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Open the YayaGo website and explore our collection of available cars. Use the search bar to find
                  specific makes or models, or browse by category.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Search by Brand</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Filter by Category</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Browse by Location</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>2</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <Filter className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>Apply Filters</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Narrow down your search using our advanced filters. Set your budget, choose preferred features,
                  transmission type, fuel type, and more to find exactly what you need.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Price Range</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Body Type</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Transmission</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Features</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>3</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <Car className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>View Car Details</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Click on any car to see its full details, including photos, specifications, pricing, owner
                  information, and availability. Review everything before reaching out.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>High-Quality Photos</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Detailed Specs</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Owner Reviews</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>4</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <Phone className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>Contact the Owner</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Found the perfect car? Contact the owner directly using the provided phone number or WhatsApp button.
                  Discuss rental terms, pricing, pickup location, and any questions you have.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Direct Phone Call</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>WhatsApp Chat</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Negotiate Terms</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>5</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <CheckCircle className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>Arrange & Enjoy</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Once you've agreed on terms, arrange the pickup time and location with the owner. Handle payment as
                  agreed, complete any paperwork, and enjoy your rental. It's that simple!
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Flexible Payment</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Meet in Person</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Drive Away</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='mt-16 text-center'>
            <Link href='/cars/rent'>
              <Button
                size='lg'
                className='h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all'
              >
                Browse Available Cars
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Hosts */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white border-t border-gray-100'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-block mb-4'>
              <span className='px-4 py-2 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase'>
                For Car Owners
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
              Start Earning from Your Car
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              List your car on YayaGo and connect with thousands of potential renters. Simple setup, full control.
            </p>
          </div>

          {/* Steps */}
          <div className='space-y-12'>
            {/* Step 1 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>1</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <UserPlus className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>Create Your Account</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Sign up for a free YayaGo account. Provide your basic information, verify your email, and you're ready
                  to start listing your vehicles.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Quick Registration</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Email Verification</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Secure Profile</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>2</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <CreditCard className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>Choose Your Membership</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Select a membership plan that fits your needs. From Basic to Lord of Cars, we have plans for every
                  scale. Pay monthly with no hidden fees or commissions on rentals.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Flexible Plans</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>No Commissions</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Cancel Anytime</span>
                </div>
                <Link href='/pricing' className='inline-block mt-4'>
                  <Button variant='outline' className='hover:bg-primary hover:text-primary-foreground'>
                    View Pricing Plans
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>3</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <Upload className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>List Your Car</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Upload high-quality photos, add detailed specifications, set your pricing, and describe your car's
                  features. The more detail you provide, the more attractive your listing will be to renters.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Photo Upload</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Set Your Price</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Full Control</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>4</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <MessageCircle className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>Receive Inquiries</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Once your car is live, interested renters will contact you directly via phone or WhatsApp. Your
                  contact information is displayed on your listing for direct communication.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Direct Calls</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>WhatsApp Messages</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Your Terms</span>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className='flex flex-col md:flex-row gap-8 items-center'>
              <div className='flex-shrink-0 w-20 h-20 bg-primary text-white flex items-center justify-center'>
                <span className='text-3xl font-bold'>5</span>
              </div>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-3'>
                  <CheckCircle className='w-6 h-6 text-primary' strokeWidth={2} />
                  <h3 className='text-2xl font-bold text-gray-900'>Rent & Earn</h3>
                </div>
                <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                  Discuss terms with renters, agree on pricing and conditions, arrange pickup, and collect payment
                  directly. You keep 100% of the rental fee—we never take a commission.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Keep 100%</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Your Rules</span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium'>Direct Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='mt-16 text-center'>
            <Link href='/support/list-your-car'>
              <Button
                size='lg'
                className='h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all'
              >
                Learn More About Listing
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight'>Why Choose YayaGo?</h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We're different from traditional rental platforms. Here's what makes us special.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white border border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all'>
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4'>
                <CheckCircle className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>No Commission Fees</h3>
              <p className='text-gray-600 leading-relaxed'>
                Owners keep 100% of rental income. We only charge a flat monthly membership fee, nothing more.
              </p>
            </div>

            <div className='bg-white border border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all'>
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4'>
                <MessageCircle className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Direct Communication</h3>
              <p className='text-gray-600 leading-relaxed'>
                Connect directly with the other party. No intermediaries, no delays, just straightforward conversation.
              </p>
            </div>

            <div className='bg-white border border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all'>
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4'>
                <Car className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Full Control</h3>
              <p className='text-gray-600 leading-relaxed'>
                Owners set their own prices, terms, and conditions. Renters negotiate directly for the best deals.
              </p>
            </div>

            <div className='bg-white border border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all'>
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4'>
                <CreditCard className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Transparent Pricing</h3>
              <p className='text-gray-600 leading-relaxed'>
                Clear membership plans with no hidden fees. What you see is what you pay—no surprises.
              </p>
            </div>

            <div className='bg-white border border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all'>
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4'>
                <Search className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Easy Discovery</h3>
              <p className='text-gray-600 leading-relaxed'>
                Powerful search and filters help renters find exactly what they need in seconds.
              </p>
            </div>

            <div className='bg-white border border-gray-200 p-8 hover:border-primary/30 hover:shadow-lg transition-all'>
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4'>
                <CheckCircle className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Quality Listings</h3>
              <p className='text-gray-600 leading-relaxed'>
                Professional listing tools help owners showcase their cars in the best possible way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-dark text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 tracking-tight'>Ready to Get Started?</h2>
          <p className='text-xl text-primary-foreground/90 mb-10 leading-relaxed'>
            Whether you're looking to rent or list a car, YayaGo makes it simple and straightforward.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/cars/rent'>
              <Button
                size='lg'
                variant='outline'
                className='h-14 px-8 text-lg font-semibold bg-white text-primary hover:bg-gray-100 border-0'
              >
                Browse Cars
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            </Link>
            <Link href='/support/list-your-car'>
              <Button
                size='lg'
                className='h-14 px-8 text-lg font-semibold bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/30'
              >
                List Your Car
                <ArrowRight className='w-5 h-5 ml-2' />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
