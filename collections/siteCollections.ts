import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';

const siteNavbarNavigation = [
  { name: 'About Us', href: '/commons/about' },
  { name: 'Support', href: '/commons/support' },
  { name: "FAQ's", href: '/commons/faqs' },
];

const siteFooterNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

const sitePlatformStat = [
  { id: 1, name: 'Members on the platform', value: '8,000+' },
  { id: 2, name: 'Platform fee low as', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Market Size Revenue', value: '$6B' },
];

const siteCompanystats = [
  { label: 'Founded', value: '2023' },
  { label: 'Employees', value: '23' },
  { label: 'Countries', value: '3' },
  { label: 'Revenue', value: '$25M' },
];

const siteCompanyPersonel = [
  {
    name: 'Perrie Russell',
    role: 'Founder / CEO',
    imageUrl: '/images/company/employees/ceo-photo.jpeg',
  },
  {
    name: 'Leslie Alexander',
    role: 'President',
    imageUrl: '/images/company/employees/pres-photo.jpeg',
  },
];

const siteOurMission = [
  {
    strong: `Our mission: `,
    text: ` is more than just providing a car sharing platform; 
    it's about revolutionizing the way people experience transportation, 
    fostering a sense of community, and contributing to a greener, more sustainable future. 
    Our driving force is the belief that sharing resources and embracing innovative technology 
    can transform the way we move, connect, and care for our environment.`,
    class: 'mt-6',
  },
  {
    strong: `Empowering Mobility: `,
    text: `We're committed to empowering individuals with flexible, 
    convenient, and affordable mobility options. Whether you're a guest seeking the perfect 
    vehicle for a memorable journey or an owner looking to maximize the value of your vehicle, 
    we strive to create an ecosystem where mobility is accessible to all, regardless of where you're 
    going or what you're driving.`,
    class: 'mt-8',
  },
  {
    strong: `Creating Community: `,
    text: `Beyond the practicality of car sharing, we aim to foster a vibrant community of like-minded
     individuals who share a passion for adventure, sustainability, and seamless travel experiences. 
     By connecting owners willing to share their vehicles with responsible guests, we're not just 
     facilitating transactions; we're enabling connections, trust, and a sense of shared responsibility.`,
    class: 'mt-8',
  },
  {
    strong: `Sustainability at Heart: `,
    text: `At the core of our mission is the commitment to sustainability. By optimizing vehicle usage, 
    reducing congestion, and promoting a "less is more" approach, we're taking tangible steps toward a 
    more environmentally friendly future. We're not just providing a service; we're contributing to a 
    world where fewer cars on the road translate to cleaner air and a healthier planet for generations 
    to come.`,
    class: 'mt-8',
  },
];

const siteFaqsHost = {
  title: 'Host(s) - Frequently asked questions',
  faqs: [
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
  ],
};

const siteFaqsOwner = {
  title: 'Owner(s) - Frequently asked questions',
  faqs: [
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
  ],
};

const siteSupport = {
  title: 'Support Center',
  description: `Welcome to our Support Center! We're here to assist you every step of the way. 
  If you have questions, encounter issues, or need guidance on our car sharing host platform, 
  here's how to get the support you need:`,
  cards: [
    {
      name: 'Phone Support',
      description: `Our customer phone support is your direct line to quick solutions and personalized 
        assistance.`,
      icon: PhoneIcon,
    },
    {
      name: 'Technical Support',
      description: `Tech glitches? We've got your back. Our technical support ensures smooth sailing through any digital challenges, so you can focus on enjoying the ride.`,
      icon: LifebuoyIcon,
    },
    {
      name: 'Claim Inquiries',
      description: `Got a claim inquiry? We're here to make it right. Your peace of mind is our top priority.`,
      icon: NewspaperIcon,
    },
  ],
};

const siteContact = {
  title: 'Contact Us',
  description: `Need assistance? Have a question or suggestion? Reach out to us through our 
  contact section, where our dedicated team is ready to respond and ensure your car sharing 
  experience is the best it can be.`,
  address: {
    street: `123 Forest Ln.`,
    cityStateZip: 'Kansas City, MO. 64105',
    phone: `+1 (555) 234-5678`,
    email: `support@thespdm.com`,
  },
};
export {
  siteCompanyPersonel,
  siteCompanystats,
  siteContact,
  siteFaqsHost,
  siteFaqsOwner,
  siteFooterNavigation,
  siteNavbarNavigation,
  siteOurMission,
  sitePlatformStat,
  siteSupport,
};
