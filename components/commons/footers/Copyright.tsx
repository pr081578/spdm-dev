'use client';
import { Link } from '@nextui-org/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const Copyright = () => (
  <div className={inter.className}>
    {'Copyright © '}
    <Link href="https://material-ui.com/">SPDM LLC</Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </div>
);
