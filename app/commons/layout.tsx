import { Footer } from '@components/commons/footers/Footer';
import { StackedFlyoutMenuHeader as MyHeader } from '@components/commons/headers/StackedFlyoutMenuHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  // MyNavbar Arguments //
  const navLogo = {
    src: '/images/logo2.png',
    href: '/',
  };

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
      <MyHeader />
      {children}
      <Footer navigation={footernavigation} logo={footerLogo} />
    </>
  );
}
