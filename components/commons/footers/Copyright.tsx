'use client';

import { Link } from '@nextui-org/react';

export const Copyright = () => (
  <>
    <Link href="/">
      <p className="mt-10 text-center text-xs leading-5 text-gray-500">
        &copy; {new Date().getFullYear()} SPDM LLC, All rights reserved.
      </p>
    </Link>{' '}
    {'.'}
  </>
);
