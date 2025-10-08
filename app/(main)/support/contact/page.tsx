import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, BookOpen, Car } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with YayaGo. Contact our support team for any questions about car rentals, listings, or general inquiries.',
};

export default function ContactPage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 md:py-28 px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
        {/* Animated Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse' />
          <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000' />
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
              Get in Touch
            </span>
          </div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight'>
            We're Here to Help
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Have a question or need assistance? Our support team is ready to help you with anything you need.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-3 gap-12'>
            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <div className='bg-white border border-gray-200 p-8 md:p-10 shadow-lg'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight'>Send us a Message</h2>
                <p className='text-gray-600 mb-8'>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form className='space-y-6'>
                  {/* Name & Email */}
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='name' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                        Full Name *
                      </Label>
                      <Input
                        id='name'
                        type='text'
                        placeholder='John Doe'
                        required
                        className='h-12 border-gray-300 focus:border-primary'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='email' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                        Email Address *
                      </Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='john@example.com'
                        required
                        className='h-12 border-gray-300 focus:border-primary'
                      />
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <Label htmlFor='phone' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                        Phone Number
                      </Label>
                      <Input
                        id='phone'
                        type='tel'
                        placeholder='+971 50 123 4567'
                        className='h-12 border-gray-300 focus:border-primary'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='subject' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                        Subject *
                      </Label>
                      <Input
                        id='subject'
                        type='text'
                        placeholder='How can we help?'
                        required
                        className='h-12 border-gray-300 focus:border-primary'
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className='space-y-2'>
                    <Label htmlFor='message' className='text-sm font-semibold text-gray-700 uppercase tracking-wider'>
                      Message *
                    </Label>
                    <Textarea
                      id='message'
                      placeholder='Tell us more about your inquiry...'
                      required
                      rows={6}
                      className='border-gray-300 focus:border-primary resize-none'
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type='submit'
                    size='lg'
                    className='w-full md:w-auto px-8 h-12 text-base bg-primary hover:bg-primary/90'
                  >
                    Send Message
                    <Send className='ml-2 w-4 h-4' />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className='space-y-6'>
              {/* Contact Cards */}
              <div className='bg-white border border-gray-200 p-6 shadow-lg'>
                <h3 className='text-xl font-bold text-gray-900 mb-6'>Contact Information</h3>
                <div className='space-y-6'>
                  {/* Email */}
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0'>
                      <Mail className='w-6 h-6 text-primary' strokeWidth={2} />
                    </div>
                    <div>
                      <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Email</div>
                      <a
                        href='mailto:support@yayago.com'
                        className='text-gray-900 hover:text-primary transition-colors'
                      >
                        support@yayago.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0'>
                      <Phone className='w-6 h-6 text-primary' strokeWidth={2} />
                    </div>
                    <div>
                      <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Phone</div>
                      <a href='tel:+971501234567' className='text-gray-900 hover:text-primary transition-colors'>
                        +971 50 123 4567
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <MessageCircle className='w-6 h-6 text-green-600' strokeWidth={2} />
                    </div>
                    <div>
                      <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>WhatsApp</div>
                      <a
                        href='https://wa.me/971501234567'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-900 hover:text-green-600 transition-colors'
                      >
                        +971 50 123 4567
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0'>
                      <MapPin className='w-6 h-6 text-primary' strokeWidth={2} />
                    </div>
                    <div>
                      <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>Address</div>
                      <div className='text-gray-900'>
                        Dubai Silicon Oasis
                        <br />
                        Dubai, United Arab Emirates
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0'>
                      <Clock className='w-6 h-6 text-primary' strokeWidth={2} />
                    </div>
                    <div>
                      <div className='text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1'>
                        Business Hours
                      </div>
                      <div className='text-gray-900'>
                        Mon - Fri: 9:00 AM - 6:00 PM
                        <br />
                        Sat - Sun: 10:00 AM - 4:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className='bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-lg'>
                <h3 className='text-xl font-bold mb-4'>Need Quick Help?</h3>
                <p className='text-primary-foreground/90 mb-6 text-sm leading-relaxed'>
                  Check out our Help Center for instant answers to common questions.
                </p>
                <Link href='/support/help'>
                  <Button
                    variant='outline'
                    className='w-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50'
                  >
                    Visit Help Center
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 md:py-24 px-6 lg:px-8 bg-white border-t border-gray-100'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-block mb-4'>
            <span className='px-3 py-1 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wide'>
              More Resources
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
            Looking for Something Else?
          </h2>
          <p className='text-xl text-gray-600 mb-10'>
            Explore our resources to find the answers and information you need.
          </p>

          <div className='grid md:grid-cols-3 gap-6'>
            <Link
              href='/support/faq'
              className='group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all text-center'
            >
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors'>
                <HelpCircle className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>FAQs</h3>
              <p className='text-gray-600 text-sm'>Find answers to frequently asked questions</p>
            </Link>

            <Link
              href='/support/help'
              className='group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all text-center'
            >
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors'>
                <BookOpen className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                Help Center
              </h3>
              <p className='text-gray-600 text-sm'>Browse our comprehensive help articles</p>
            </Link>

            <Link
              href='/support/how-it-works'
              className='group p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all text-center'
            >
              <div className='w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors'>
                <Car className='w-6 h-6 text-primary' strokeWidth={2} />
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors'>
                How It Works
              </h3>
              <p className='text-gray-600 text-sm'>Learn how YayaGo car rental works</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
