'use client';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  router.push('/register');

  return <></>;
};

export default Page;
