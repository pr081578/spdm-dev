import { Footer } from '@components/commons/footers/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Footer Arguments //
  const footernavigation = {
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

  const footerLogo = {
    name: 'logo',
    src: '/images/logo2.png',
    href: '/',
    alt: 'logo',
  };
  return (
    <>
      {children}
      <Footer navigation={footernavigation} logo={footerLogo} />
    </>
  );
}
