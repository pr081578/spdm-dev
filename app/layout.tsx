import type { Metadata } from 'next';

import { GlobalContextProvider } from '@context/globalContext';
import { Providers } from './providers';

import Footer from '@components/commons/footers/Footer';
import Header from '@components/commons/headers/Header';
import Sidebar from '@components/commons/sidebars/Sidebar';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'SPDM - Share Parking Depot Management',
  description: 'Car sharing fleet mangement operating services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <GlobalContextProvider>
            <Header />
            <Sidebar />
            {children}
            <Footer />
          </GlobalContextProvider>
        </Providers>
      </body>
    </html>
  );
}
