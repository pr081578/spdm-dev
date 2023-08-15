import type { Metadata } from 'next';

import { GlobalContextProvider } from '@context/globalContext';

import '@styles/globals.css';
import { Providers } from './providers';

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
      <body suppressHydrationWarning={true}>
        <Providers>
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </Providers>
      </body>
    </html>
  );
}
