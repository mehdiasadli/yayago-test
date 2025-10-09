'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import LanguageSelector from './navigation-elements/language-selector';
import CurrencySelector from './navigation-elements/currency-selector';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/support/how-it-works' },
    { label: 'Blog', href: '/community/blog' },
    { label: 'Careers', href: '/company/careers' },
  ],
  forRenters: [
    { label: 'Browse Cars', href: '/cars/rent' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Insurance', href: '/legal/insurance' },
    { label: 'FAQs', href: '/support/faq' },
  ],
  forOwners: [
    { label: 'List Your Car', href: '/support/list-your-car' },
    { label: 'How It Works', href: '/support/how-it-works' },
    { label: 'Pricing Plans', href: '/pricing' },
  ],
  support: [
    { label: 'Help Center', href: '/support/help' },
    { label: 'Contact Us', href: '/support/contact' },
    { label: 'FAQs', href: '/support/faq' },
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Privacy Policy', href: '/legal/privacy' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/yayago', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/yayago', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/yayago', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/yayago', label: 'LinkedIn' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8'>
          {/* Logo & Newsletter Column */}
          <div className='lg:col-span-4'>
            {/* Logo */}
            <Link href='/' className='inline-block mb-6'>
              <Image
                src='/assets/branding/Logo-White.svg'
                alt='YayaGo'
                width={140}
                height={40}
                className='h-10 w-auto'
              />
            </Link>

            {/* Company Description */}
            <p className='text-gray-400 leading-relaxed mb-6'>
              Dubai's premier peer-to-peer car rental platform. Rent the perfect car or earn money by sharing yours.
            </p>

            {/* Newsletter */}
            <div className='mb-6'>
              <h3 className='text-white font-semibold text-lg mb-3'>Subscribe to Our Newsletter</h3>
              <p className='text-gray-400 text-sm mb-4'>Get the latest deals and updates delivered to your inbox.</p>
              <form onSubmit={handleNewsletterSubmit} className='flex gap-2'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary'
                />
                <Button type='submit' size='icon' className='shrink-0'>
                  <Send className='h-4 w-4' />
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h3 className='text-white font-semibold text-sm mb-3'>Follow Us</h3>
              <div className='flex gap-3'>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:scale-110 transition-all duration-300 flex items-center justify-center group'
                    aria-label={social.label}
                  >
                    <social.icon className='w-5 h-5 text-gray-300 group-hover:text-white transition-colors' />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className='lg:col-span-2'>
            <h3 className='text-white font-semibold text-lg mb-4'>Company</h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-primary transition-colors duration-200 text-sm'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Renters Links */}
          <div className='lg:col-span-2'>
            <h3 className='text-white font-semibold text-lg mb-4'>For Renters</h3>
            <ul className='space-y-3'>
              {footerLinks.forRenters.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-primary transition-colors duration-200 text-sm'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Owners Links */}
          <div className='lg:col-span-2'>
            <h3 className='text-white font-semibold text-lg mb-4'>For Owners</h3>
            <ul className='space-y-3'>
              {footerLinks.forOwners.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-primary transition-colors duration-200 text-sm'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div className='lg:col-span-2'>
            <h3 className='text-white font-semibold text-lg mb-4'>Support</h3>
            <ul className='space-y-3 mb-6'>
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-gray-400 hover:text-primary transition-colors duration-200 text-sm'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className='space-y-3'>
              <a
                href='tel:+97145551234'
                className='flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group'
              >
                <Phone className='w-4 h-4 group-hover:scale-110 transition-transform' />
                <span>+971 4 555 1234</span>
              </a>
              <a
                href='mailto:support@yayago.com'
                className='flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm group'
              >
                <Mail className='w-4 h-4 group-hover:scale-110 transition-transform' />
                <span>support@yayago.com</span>
              </a>
              <div className='flex items-start gap-2 text-gray-400 text-sm'>
                <MapPin className='w-4 h-4 mt-0.5 shrink-0' />
                <span>Downtown Dubai, Sheikh Mohammed bin Rashid Blvd, Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-700'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Copyright */}
            <div className='text-gray-400 text-sm text-center md:text-left'>
              © {new Date().getFullYear()} YayaGo. All rights reserved.
            </div>

            {/* Language & Currency Selectors */}
            <div className='flex items-center gap-4'>
              <LanguageSelector variant='dark' />
              <CurrencySelector variant='dark' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
