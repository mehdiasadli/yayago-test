'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  UserPlus,
  CreditCard,
  Upload,
  FileText,
  Camera,
  DollarSign,
  CheckCircle,
  Phone,
  Shield,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Create Your Account',
    icon: UserPlus,
    description:
      'Start by creating your free YayaGo account. This only takes a few minutes and gives you access to our listing platform.',
    details: [
      'Provide your full name, email address, and create a secure password',
      'Verify your email address through the confirmation link sent to your inbox',
      'Complete your profile with a profile photo and contact information',
      'Add your phone number for renters to contact you directly',
      'Set up your preferred communication method (phone, WhatsApp, or both)',
    ],
    tips: [
      'Use a professional profile photo to build trust with renters',
      'Ensure your phone number is active and you can receive calls/messages',
      'Complete all profile fields to appear more credible to potential renters',
    ],
  },
  {
    number: 2,
    title: 'Choose Your Membership',
    icon: CreditCard,
    description:
      'Select a membership plan that matches the number of vehicles you want to list. All plans include the same features with no commission fees.',
    details: [
      'Review our membership tiers: Basic (1 car), Enthusiast (3 cars), Professional (5 cars), Fleet (10 cars), Lord of Cars (25 cars)',
      'Each plan allows unlimited photo uploads per listing',
      'All plans include priority customer support and listing analytics',
      'Monthly subscription with the flexibility to upgrade or downgrade anytime',
      'No setup fees, no commission on rentals—just a flat monthly rate',
    ],
    tips: [
      'Start with a lower tier and upgrade as you add more vehicles',
      'Annual payment options available with discounted rates',
      'You can pause your membership if your car becomes unavailable',
    ],
  },
  {
    number: 3,
    title: 'Prepare Your Documentation',
    icon: FileText,
    description:
      'Gather all necessary documents for your vehicle. Having these ready makes the listing process smooth and builds renter confidence.',
    details: [
      'Vehicle registration (mulkiyyə) - must be current and in your name',
      'Proof of insurance coverage showing the vehicle is insured',
      'Valid inspection certificate (texniki baxış) if applicable',
      "Your driver's license or ID for identity verification",
      'Maintenance records (optional but recommended to show car condition)',
    ],
    tips: [
      'Scan or photograph documents in high quality for upload',
      'Ensure all documents are valid and not expired',
      'Keep digital copies easily accessible for quick updates',
    ],
  },
  {
    number: 4,
    title: 'Photograph Your Car',
    icon: Camera,
    description:
      'High-quality photos are crucial for attracting renters. Take multiple photos from different angles in good lighting.',
    details: [
      'Exterior: Front, back, both sides, and 3/4 angles—minimum 8-10 photos',
      'Interior: Dashboard, front seats, back seats, trunk, control panels',
      'Special features: Sunroof, entertainment system, unique features',
      'Clean your car thoroughly before photographing',
      'Use natural daylight and avoid harsh shadows or reflections',
      'Include close-ups of any damage or wear for transparency',
    ],
    tips: [
      'Shoot in a clean, uncluttered location (parking lot, clean street)',
      "Avoid using filters—show the car's true condition",
      'Take photos from a slight angle rather than straight on',
      'Include 15-20 photos for the best results',
    ],
  },
  {
    number: 5,
    title: 'Create Your Listing',
    icon: Upload,
    description:
      'Fill out your car listing with complete and accurate information. The more detail you provide, the more attractive your listing becomes.',
    details: [
      'Basic Info: Make, model, year, color, mileage, license plate',
      'Specifications: Engine size, fuel type, transmission, drivetrain',
      'Features: GPS, Bluetooth, backup camera, parking sensors, etc.',
      'Upload all your prepared photos in the listing dashboard',
      'Write a compelling description highlighting what makes your car special',
      'Set your location—be specific to help renters find you',
    ],
    tips: [
      'Be honest about the condition—transparency builds trust',
      'Highlight recent maintenance or new parts',
      'Mention any accessories included (phone holder, USB charger, etc.)',
    ],
  },
  {
    number: 6,
    title: 'Set Your Pricing',
    icon: DollarSign,
    description:
      "Determine competitive daily and weekly rental rates. Consider your car's value, market demand, and local competition.",
    details: [
      'Research similar cars in your area to understand market rates',
      'Set daily rate (minimum rental period of 1 day)',
      'Offer weekly rates (typically 15-25% discount from daily rate)',
      'Optional: Set monthly rates for long-term rentals',
      'Define your security deposit amount (recommended: 20-30% of car value)',
      'Specify minimum rental period if you prefer longer bookings',
    ],
    tips: [
      'Price competitively for your first few rentals to build reviews',
      'Adjust prices seasonally (higher in summer, lower in winter)',
      'Consider offering discounts for repeat renters',
    ],
  },
  {
    number: 7,
    title: 'Set Terms & Conditions',
    icon: Shield,
    description:
      'Define your rental rules and requirements. Clear terms help prevent misunderstandings and protect your vehicle.',
    details: [
      'Minimum age requirement for renters (typically 21-25 years)',
      'Required documents from renters (license, ID, deposit)',
      'Mileage limits (e.g., 200km/day with charges for excess)',
      'Fuel policy (return with full tank, same fuel level, etc.)',
      'Smoking policy, pet policy, and cross-border travel restrictions',
      'Late return fees and cancellation policy',
    ],
    tips: [
      'Keep terms reasonable but protective of your interests',
      'Be flexible where possible to attract more renters',
      'Clearly state what happens in case of damage or accidents',
    ],
  },
  {
    number: 8,
    title: 'Publish & Manage',
    icon: CheckCircle,
    description:
      'Review your listing carefully, then publish it to make it visible to thousands of renters. Monitor and manage inquiries actively.',
    details: [
      'Review all listing details for accuracy before publishing',
      'Once published, your listing goes live immediately',
      'Renters can contact you via phone or WhatsApp directly',
      'Respond to inquiries promptly (within 1-2 hours ideally)',
      'Update availability calendar regularly to avoid double bookings',
      'Mark car as unavailable when rented or for personal use',
    ],
    tips: [
      'Quick responses increase your chances of securing rentals',
      'Be professional and friendly in all communications',
      'Keep your listing photos and description updated',
    ],
  },
  {
    number: 9,
    title: 'Handle Rentals',
    icon: Phone,
    description:
      'When a renter contacts you, discuss details, agree on terms, and arrange the rental. You maintain full control throughout.',
    details: [
      'Discuss rental duration, pickup location, and any special requests',
      'Agree on payment method (cash, bank transfer, etc.)',
      'Schedule pickup time and location convenient for both parties',
      'Inspect the car together before handover, document condition',
      "Verify renter's license and ID, collect security deposit",
      'Provide keys, documents, and explain car features',
      'Stay in touch during rental for any questions',
    ],
    tips: [
      'Use a rental agreement template (we provide one in your dashboard)',
      'Take photos of the car before and after each rental',
      'Always check the car thoroughly upon return',
    ],
  },
];

export function ListCarSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = steps[currentStep];
  const Icon = step.icon;

  return (
    <div className='max-w-5xl mx-auto'>
      {/* Step Navigation */}
      <div className='mb-8'>
        <div className='flex items-center justify-between mb-4'>
          <span className='text-sm font-medium text-gray-600'>
            Step {currentStep + 1} of {steps.length}
          </span>
          <div className='flex gap-2'>
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep ? 'w-8 bg-primary' : index < currentStep ? 'bg-primary/50' : 'bg-gray-300'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className='w-full h-2 bg-gray-200 rounded-full overflow-hidden'>
          <div
            className='h-full bg-primary transition-all duration-500 ease-out'
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className='bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm'>
        {/* Step Header */}
        <div className='flex items-start gap-6 mb-6'>
          <div className='flex-shrink-0 w-16 h-16 bg-primary text-white flex items-center justify-center rounded-lg'>
            <Icon className='w-8 h-8' strokeWidth={2} />
          </div>
          <div className='flex-1'>
            <div className='text-sm font-semibold text-primary mb-2'>STEP {step.number}</div>
            <h3 className='text-3xl font-bold text-gray-900 mb-3'>{step.title}</h3>
            <p className='text-lg text-gray-600 leading-relaxed'>{step.description}</p>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className='mb-6'>
          <h4 className='text-lg font-bold text-gray-900 mb-4'>What to do:</h4>
          <ul className='space-y-3'>
            {step.details.map((detail, index) => (
              <li key={index} className='flex items-start gap-3'>
                <CheckCircle className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' strokeWidth={2} />
                <span className='text-gray-700 leading-relaxed'>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tips */}
        <div className='bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-6'>
          <h4 className='text-lg font-bold text-gray-900 mb-3'>💡 Pro Tips:</h4>
          <ul className='space-y-2'>
            {step.tips.map((tip, index) => (
              <li key={index} className='flex items-start gap-2 text-gray-700'>
                <span className='text-primary font-bold mt-1'>•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='flex items-center justify-between mt-8'>
        <Button variant='outline' size='lg' onClick={goToPrevious} disabled={currentStep === 0} className='h-12 px-6'>
          <ArrowLeft className='w-5 h-5 mr-2' />
          Previous
        </Button>

        <Button
          size='lg'
          onClick={goToNext}
          disabled={currentStep === steps.length - 1}
          className='h-12 px-6 bg-primary hover:bg-primary/90'
        >
          Next Step
          <ArrowRight className='w-5 h-5 ml-2' />
        </Button>
      </div>
    </div>
  );
}
