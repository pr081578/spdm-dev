import { Footer } from '@components/commons/footers/Footer';
import { NavbarWithSearch } from '@components/commons/navbars/NavbarWithSearch';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navLogo = {
    src: '/images/logo2.png',
    href: '/',
  };

  return (
    <>
      <NavbarWithSearch logo={navLogo} />
      {children}
      <Footer />
    </>
  );
}
