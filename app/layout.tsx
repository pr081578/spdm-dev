import type { Metadata } from 'next';

import { AuthProvider } from '@context/authContext';
import { GlobalContextProvider } from '@context/globalContext';
import { NextUiProviders } from '../context/nextUiContext';

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
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <NextUiProviders>
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </NextUiProviders>
        </AuthProvider>
      </body>
    </html>
  );
}
