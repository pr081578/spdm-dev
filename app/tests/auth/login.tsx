'use client';

import { signIn, signOut } from 'next-auth/react';

export const LogInButton = () => {
  return (
    <button className="p-4 bg-gray-300" onClick={() => signIn()}>
      Sign In
    </button>
  );
};
export const LogOutButton = () => {
  return (
    <button className="p-4 bg-gray-300" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
