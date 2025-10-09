export type TFAQ = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

export const faqCategories = [
  'All',
  'Getting Started',
  'Booking & Reservations',
  'Payments & Pricing',
  'Insurance & Protection',
  'Driving & Usage',
  'Requirements',
  'Modifications & Cancellations',
  'Vehicle Issues',
  'Returns & Extensions',
  'Account & Profile',
];

export const faqs: TFAQ[] = [
  // Getting Started
  {
    id: 1,
    question: 'How does Yayago work?',
    answer:
      'Yayago is a peer-to-peer car rental marketplace that connects car owners with people who need to rent a vehicle. Browse available cars in your area, book the one that fits your needs, and pick it up at the agreed location. You can learn more on our <a href="/support/how-it-works" class="text-primary font-semibold hover:underline">How It Works</a> page.',
    category: 'Getting Started',
  },
  {
    id: 2,
    question: 'Is Yayago available in my city?',
    answer:
      'Yayago is currently available in major cities across the UAE, including Dubai, Abu Dhabi, Sharjah, and Ajman. Check our <a href="/cars/rent" class="text-primary font-semibold hover:underline">Browse Cars</a> page and enter your location to see available vehicles in your area.',
    category: 'Getting Started',
  },
  {
    id: 3,
    question: 'Do I need to create an account to rent a car?',
    answer:
      'Yes, you need to create a free Yayago account to rent a car. This helps us verify your identity and ensure a safe experience for everyone. Creating an account takes less than 2 minutes.',
    category: 'Getting Started',
  },
  {
    id: 4,
    question: 'Can I list my own car on Yayago?',
    answer:
      'Absolutely! Listing your car on Yayago is a great way to earn extra income when you\'re not using it. Visit our <a href="/support/list-your-car" class="text-primary font-semibold hover:underline">List Your Car</a> page to learn more about the process and calculate your potential earnings.',
    category: 'Getting Started',
  },

  // Booking & Reservations
  {
    id: 5,
    question: 'How do I book a car?',
    answer:
      'Browse available cars on our platform, select the vehicle you want, choose your rental dates and times, review the price breakdown, and click "Book Now". You\'ll receive an instant confirmation once your booking is approved.',
    category: 'Booking & Reservations',
  },
  {
    id: 6,
    question: 'How far in advance should I book?',
    answer:
      'You can book a car as little as 2 hours in advance or up to 12 months ahead. However, we recommend booking at least 24 hours in advance to ensure availability, especially during peak seasons or for popular vehicles.',
    category: 'Booking & Reservations',
  },
  {
    id: 7,
    question: 'Can I book a car for someone else?',
    answer:
      'No, the person who creates the booking must be the primary driver. All drivers must be verified and approved on the platform for insurance and safety purposes. However, you can add additional drivers to your booking for an extra fee.',
    category: 'Booking & Reservations',
  },
  {
    id: 8,
    question: 'What is instant booking vs. request to book?',
    answer:
      "Instant booking allows you to book a car immediately without waiting for the host's approval. Request to book requires the host to accept your booking request, which usually takes a few hours. Cars with instant booking are marked with a lightning bolt icon.",
    category: 'Booking & Reservations',
  },

  // Payments & Pricing
  {
    id: 9,
    question: 'How much does it cost to rent a car?',
    answer:
      'Rental prices vary depending on the vehicle type, location, and rental duration. Daily rates typically range from AED 100 to AED 2,000+. You can view detailed pricing on each car\'s listing page. Visit our <a href="/pricing" class="text-primary font-semibold hover:underline">Pricing</a> page for more information.',
    category: 'Payments & Pricing',
  },
  {
    id: 10,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards (Visa, Mastercard, American Express), Apple Pay, and Google Pay. Payment is processed securely through our encrypted payment gateway.',
    category: 'Payments & Pricing',
  },
  {
    id: 11,
    question: 'When will I be charged?',
    answer:
      "For instant bookings, you'll be charged immediately upon confirmation. For request bookings, you'll be charged once the host approves your booking. A security deposit may also be held on your card and released after the rental ends.",
    category: 'Payments & Pricing',
  },
  {
    id: 12,
    question: 'Are there any additional fees?',
    answer:
      'The total price includes the daily rental rate, service fee, and insurance. Additional fees may apply for extra drivers, young drivers (under 25), delivery/pickup services, toll charges, and mileage overages if you exceed the included daily mileage.',
    category: 'Payments & Pricing',
  },
  {
    id: 13,
    question: 'Do you offer weekly or monthly discounts?',
    answer:
      'Yes! Many hosts offer discounted rates for weekly (7+ days) and monthly (28+ days) rentals. Discounts can range from 10% to 30% depending on the host and vehicle. These discounts are automatically applied at checkout.',
    category: 'Payments & Pricing',
  },

  // Insurance & Protection
  {
    id: 14,
    question: 'Is insurance included in the rental?',
    answer:
      'Yes, all rentals include basic insurance coverage that protects both you and the car owner. The coverage includes liability protection, collision damage, and theft protection. Additional coverage options are available at checkout.',
    category: 'Insurance & Protection',
  },
  {
    id: 15,
    question: 'What does the insurance cover?',
    answer:
      "Our standard insurance covers collision damage, theft, third-party liability, and roadside assistance. However, there may be an excess/deductible amount that you're responsible for in case of an accident. You can reduce or eliminate the excess by purchasing additional protection plans.",
    category: 'Insurance & Protection',
  },
  {
    id: 16,
    question: 'What is not covered by insurance?',
    answer:
      'Insurance does not cover interior damage, key loss, fuel charges, toll violations, parking tickets, reckless driving, off-road driving, or damage caused while under the influence of alcohol or drugs. Review our <a href="/legal/insurance" class="text-primary font-semibold hover:underline">Insurance Policy</a> for full details.',
    category: 'Insurance & Protection',
  },
  {
    id: 17,
    question: 'Can I purchase additional insurance?',
    answer:
      'Yes, you can purchase premium protection plans that reduce or eliminate your excess/deductible. Options include Zero Excess Protection and Premium Plus Protection, which provide more comprehensive coverage.',
    category: 'Insurance & Protection',
  },

  // Driving & Usage
  {
    id: 18,
    question: 'Is there a mileage limit?',
    answer:
      "Most rentals include 200-300 km per day. Additional mileage packages can be purchased, or you may be charged per extra kilometer at the end of the rental. Check each car's listing for specific mileage limits.",
    category: 'Driving & Usage',
  },
  {
    id: 19,
    question: 'Can I drive outside the UAE?',
    answer:
      'Cross-border travel is not permitted by default. Some hosts may allow travel to other GCC countries (Saudi Arabia, Oman, etc.) with prior approval and additional insurance. You must get written permission from the host before leaving the UAE.',
    category: 'Driving & Usage',
  },
  {
    id: 20,
    question: 'Can I smoke in the car?',
    answer:
      'No, smoking is prohibited in all Yayago vehicles. If the host detects smoking odor upon return, you will be charged a cleaning fee of up to AED 500.',
    category: 'Driving & Usage',
  },
  {
    id: 21,
    question: 'Are pets allowed in the car?',
    answer:
      "Pet policies vary by host. Some hosts allow pets, while others do not. If pets are allowed, there may be an additional cleaning fee. Always check the car's listing details and confirm with the host before bringing a pet.",
    category: 'Driving & Usage',
  },
  {
    id: 22,
    question: 'Can I take the car to the desert or off-road?',
    answer:
      'Off-road driving is generally not permitted and voids insurance coverage. If you need a vehicle for off-road use, look for listings that specifically mention off-road capability and get written permission from the host.',
    category: 'Driving & Usage',
  },

  // Requirements
  {
    id: 23,
    question: 'What documents do I need to rent a car?',
    answer:
      "You need a valid driver's license (UAE license for residents, international driving permit for tourists), Emirates ID or passport, and a credit/debit card in your name. Some hosts may require additional documentation.",
    category: 'Requirements',
  },
  {
    id: 24,
    question: 'What is the minimum age to rent a car?',
    answer:
      'The minimum age is 21 years old with at least 1 year of driving experience. Drivers under 25 may be subject to a young driver fee and may have restrictions on certain vehicle categories (sports cars, luxury vehicles).',
    category: 'Requirements',
  },
  {
    id: 25,
    question: 'Can tourists rent cars on Yayago?',
    answer:
      "Yes! Tourists can rent cars with a valid international driving permit (IDP) and their home country license. You'll also need a passport and a credit card. Make sure your IDP is valid and translated to English or Arabic.",
    category: 'Requirements',
  },
  {
    id: 26,
    question: "Do you accept international driver's licenses?",
    answer:
      'We accept international driving permits (IDP) issued in accordance with the 1949 Geneva Convention or 1968 Vienna Convention. Your home country license must also be presented along with the IDP.',
    category: 'Requirements',
  },

  // Modifications & Cancellations
  {
    id: 27,
    question: 'Can I modify my booking?',
    answer:
      'Yes, you can modify your booking dates, times, or pickup location by contacting the host. Modifications are subject to availability and may affect the price. Changes must be approved by the host.',
    category: 'Modifications & Cancellations',
  },
  {
    id: 28,
    question: 'What is the cancellation policy?',
    answer:
      "Cancellation policies vary by host. Common policies include: Flexible (full refund up to 24 hours before), Moderate (full refund up to 5 days before), and Strict (50% refund up to 7 days before). Check the specific policy on the car's listing page.",
    category: 'Modifications & Cancellations',
  },
  {
    id: 29,
    question: 'How do I cancel my booking?',
    answer:
      'Go to your <a href="/profile/dashboard" class="text-primary font-semibold hover:underline">Dashboard</a>, select the booking you want to cancel, and click "Cancel Booking". Review the cancellation policy and refund amount before confirming.',
    category: 'Modifications & Cancellations',
  },
  {
    id: 30,
    question: 'What if the host cancels my booking?',
    answer:
      "If a host cancels your confirmed booking, you'll receive a full refund and may be eligible for a discount credit for your next booking. We take host cancellations seriously and it may affect their listing status.",
    category: 'Modifications & Cancellations',
  },

  // Vehicle Issues
  {
    id: 31,
    question: 'What if the car breaks down during my rental?',
    answer:
      'Contact the host immediately and our 24/7 roadside assistance at the number provided in your booking confirmation. Roadside assistance is included in all rentals for mechanical breakdowns, flat tires, and battery issues.',
    category: 'Vehicle Issues',
  },
  {
    id: 32,
    question: 'What if the car is not as described?',
    answer:
      "Take photos and videos of any issues immediately upon pickup and contact our support team within 30 minutes. If the vehicle is significantly different from the listing, we'll help you find an alternative or provide a full refund.",
    category: 'Vehicle Issues',
  },
  {
    id: 33,
    question: 'What if I get into an accident?',
    answer:
      'Ensure everyone is safe and call the police immediately (999). Do not move the vehicle until police arrive. Take photos of all damage and exchange information with other parties. Contact the host and Yayago support as soon as possible. Fill out a police report and obtain a copy.',
    category: 'Vehicle Issues',
  },
  {
    id: 34,
    question: 'Who pays for damages?',
    answer:
      "If you're at fault, you'll be responsible for the excess/deductible amount (typically AED 1,500-3,000) depending on your insurance plan. Insurance covers the rest. If the other party is at fault, their insurance covers the damage.",
    category: 'Vehicle Issues',
  },

  // Returns & Extensions
  {
    id: 35,
    question: 'What if I return the car late?',
    answer:
      "You'll be charged an hourly rate for each hour you're late, up to the full daily rate. If you know you'll be late, contact the host immediately to request an extension, subject to availability.",
    category: 'Returns & Extensions',
  },
  {
    id: 36,
    question: 'Can I extend my rental?',
    answer:
      "Yes, if the car is available. Contact the host through the app to request an extension. Once approved, you'll be charged for the additional days at the original daily rate.",
    category: 'Returns & Extensions',
  },
  {
    id: 37,
    question: 'What if I return the car early?',
    answer:
      "Unfortunately, we don't provide refunds for early returns unless the return is due to a vehicle issue or emergency. Contact the host to discuss your situation.",
    category: 'Returns & Extensions',
  },
  {
    id: 38,
    question: 'What condition should the car be in when I return it?',
    answer:
      'Return the car in the same condition you received it: clean (inside and out), with the same fuel level, and free of damage. You may be charged cleaning fees (AED 100-500) if the car is returned excessively dirty.',
    category: 'Returns & Extensions',
  },

  // Account & Profile
  {
    id: 39,
    question: 'How do I verify my account?',
    answer:
      'Go to your <a href="/profile/settings" class="text-primary font-semibold hover:underline">Profile Settings</a> and complete the verification process by uploading your driver\'s license, Emirates ID or passport, and a selfie. Verification typically takes 1-2 hours.',
    category: 'Account & Profile',
  },
  {
    id: 40,
    question: 'How do I update my payment method?',
    answer:
      'Visit your <a href="/profile/settings/billing" class="text-primary font-semibold hover:underline">Billing Settings</a> to add, remove, or update your payment methods. All payment information is securely encrypted.',
    category: 'Account & Profile',
  },
  {
    id: 41,
    question: 'Can I have multiple drivers on one booking?',
    answer:
      'Yes, you can add additional drivers to your booking. Each additional driver must be verified on Yayago and will be charged an extra fee (typically AED 50-100 per day).',
    category: 'Account & Profile',
  },
  {
    id: 42,
    question: 'How do I contact customer support?',
    answer:
      'You can reach our support team 24/7 through the in-app chat, email at support@yayago.com, or by calling our hotline. Visit our <a href="/support/contact" class="text-primary font-semibold hover:underline">Contact Us</a> page for all contact options.',
    category: 'Account & Profile',
  },
  {
    id: 43,
    question: 'Is my personal information secure?',
    answer:
      'Yes, we take data security seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your consent. Read our <a href="/legal/privacy" class="text-primary font-semibold hover:underline">Privacy Policy</a> for more details.',
    category: 'Account & Profile',
  },
  {
    id: 44,
    question: 'How do I delete my account?',
    answer:
      'To delete your account, go to <a href="/profile/settings/privacy" class="text-primary font-semibold hover:underline">Privacy Settings</a> and select "Delete Account". Note that you cannot delete your account if you have active bookings or pending payments.',
    category: 'Account & Profile',
  },
];
