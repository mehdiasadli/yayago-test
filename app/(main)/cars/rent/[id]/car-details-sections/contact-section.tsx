import { MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  name: string;
}

const whatsappNumber = '994557908445';
const getWhatsappMessage = (name: string) => `Hi, I'm interesed in renting the ${name}`;
const getWhatsappLink = (name: string) => `https://wa.me/${whatsappNumber}?text=${getWhatsappMessage(name)}`;

export default function ContactSection({ name }: ContactSectionProps) {
  return (
    <div className='space-y-3'>
      {/* <a
    href={`tel:1234567890`}
    className='flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors'
  >
    <Phone className='w-5 h-5' strokeWidth={2} />
    Call Now
  </a> */}
      <a
        href={getWhatsappLink(name)}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors'
      >
        <MessageCircle className='w-5 h-5' strokeWidth={2} />
        Book Now
      </a>
    </div>
  );
}
