'use client';

import Faq from '@components/faqs/CenteredFaqs';

// Host Arguments //
const hostFaqs = [
  {
    question: "What's involved in becoming a host on your platform?",
    answer:
      "Becoming a host is simple! Just sign up, list your vehicle with accurate details, set availability, and you're ready to welcome guests. Our platform ensures a streamlined hosting process, and we're here to assist you every step of the way.",
  },
  {
    question: 'How do I ensure the safety of my vehicle?',
    answer:
      'Safety is our top priority. We have comprehensive measures in place, including identity verification for guests, insurance coverage, and a review system. Additionally, we encourage communication with guests before and after trips to establish trust.',
  },
  {
    question: 'How can I maximize my earnings as a host?',
    answer:
      'Great question! Pricing your vehicle competitively, keeping it clean, and providing a positive guest experience are key. We also offer resources and tips to help you optimize your listing for maximum bookings and revenue.',
  },
  {
    question: `What if there's an issue with my vehicle during a booking?`,
    answer:
      'In the rare event of an issue, our support team is available to help. We have a resolution process to address any concerns, and our insurance coverage provides added peace of mind.',
  },
  {
    question: `Can I set my own availability and pricing?`,
    answer: `Absolutely! You have full control over your vehicle's availability and pricing. Whether it's specific days, weekends, or longer periods, you decide when your vehicle is available for bookings and at what rates.`,
  },
  {
    question: `How do I handle fuel and cleaning with each booking?`,
    answer: `You can choose to provide your vehicle with a full tank of fuel and request that it be returned in the same condition. We encourage open communication with guests about expectations, and many hosts find this approach works well.`,
  },
  {
    question: `Do I need to meet guests in person for vehicle handover?`,
    answer: `While some hosts prefer a personal handover, it's not always necessary. Our platform allows for keyless entry, making the process convenient for both you and the guest. You can set up arrangements that work best for you.`,
  },
  {
    question: `What if a guest damages my vehicle?`,
    answer: `Our platform includes insurance coverage to help protect your vehicle. We also encourage thorough pre- and post-trip vehicle inspections, and guests are responsible for any damages they cause.`,
  },
  {
    question: `Can I communicate with potential guests before accepting a booking?`,
    answer: `Absolutely. We encourage open communication. Feel free to exchange messages with potential guests to address any questions, discuss specifics, and establish a rapport before confirming a booking.`,
  },
  {
    question: `How do I get paid, and what are the payment terms?`,
    answer: `You'll receive payments directly to your chosen payment method. Payments are typically processed shortly after a completed booking, and you can review the details in your host dashboard.`,
  },
];
const hostTitle = 'Host(s) - Frequently asked questions';

// Owner Arguments //
const ownerFaqs = [
  {
    question: 'How do I list my vehicle on your platform as an owner?',
    answer:
      "Listing your vehicle is easy. Simply create an owner account, provide accurate details about your vehicle, upload photos, set availability, and you're ready to start receiving booking requests.",
  },
  {
    question:
      'What safeguards are in place to protect my vehicle and ensure a positive experience for guests?',
    answer:
      'We prioritize vehicle care and safety. Guests undergo identity verification, and we have insurance coverage to protect your vehicle in case of damage. Our review system encourages responsible behavior, and our support team is here to assist.',
  },
  {
    question: 'How can I maximize my profits as a vehicle owner?',
    answer:
      'Setting competitive pricing, maintaining your vehicle in good condition, and being responsive to booking requests are key. We also provide insights and tips to help you optimize your listing and attract more guests.',
  },
  {
    question: `What if my vehicle requires maintenance during a guest's booking?`,
    answer:
      'While we encourage hosts to ensure vehicles are in good condition before each booking, unexpected issues can arise. Our support team is available to help, and our resolution process ensures that any concerns are addressed.',
  },
  {
    question: `Can I manage the availability of my vehicle based on my schedule?`,
    answer: `Absolutely! You have full control over when your vehicle is available for bookings. Whether it's specific days, weekends, or longer periods, you decide when guests can book your vehicle.`,
  },
  {
    question: `How do I handle fuel and cleaning with each booking?`,
    answer: `You can specify your expectations regarding fuel levels and cleanliness in your listing. Communication with guests is important, and many owners find that setting clear expectations leads to a smoother experience.`,
  },
  {
    question: `Do I need to meet guests in person for vehicle handover?`,
    answer: `While some owners prefer a personal handover, it's not mandatory. Many guests appreciate the convenience of keyless entry. You can set up arrangements that work best for you and your guests.`,
  },
  {
    question: `What if a guest causes damage to my vehicle?`,
    answer: `Our platform includes insurance coverage to help protect your vehicle. You can also document the condition of your vehicle before and after each booking to ensure any damages are properly assessed.`,
  },
  {
    question: `Can I communicate with potential guests before accepting a booking?`,
    answer: `Absolutely. Open communication is encouraged. Feel free to exchange messages with potential guests to address any questions and discuss specific details before confirming a booking.`,
  },
  {
    question: `How do I receive payments, and what are the payment terms?`,
    answer: `Payments are processed through the platform, and you'll receive earnings directly to your chosen payment method. Payments are typically processed after a completed booking, and you can track everything in your owner dashboard.`,
  },
];
const ownerTitle = 'Owner(s) - Frequently asked questions';
export default function Page() {
  return (
    <>
      <Faq faqs={hostFaqs} title={hostTitle} />
      <Faq faqs={ownerFaqs} title={ownerTitle} />
    </>
  );
}
