'use client';
import { useRouter } from 'next/navigation';
const Page = () => {
  const router = useRouter();
  router.push('/commons/about');
  return <></>;
};

export default Page;
