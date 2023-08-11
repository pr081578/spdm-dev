import { CenteredHeader as MyHeader } from '@components/commons/headers/CenteredHeader';
import { WithTestimonialContent as MyContent } from '@components/contents/WithTestimonialContent';

const Page = () => {
  const aboutTitle = 'About Us';
  const aboutDescription =
    'Discover the game-changer in car sharing with our revolutionary Car Sharing SaaS solution. Seamlessly designed to empower owners and hosts, our platform operates on a foundation of trust, guaranteeing meticulous vehicle care, safety, and heightened guest experiences. By leveraging our innovative technology, owners can rest assured knowing their vehicles are in the best hands, ensuring high profit margins while enhancing the guest experience. Join us in reshaping the industry, where trust and cutting-edge solutions redefine car sharing, making it not just convenient, but truly extraordinary.';
  return (
    <>
      <MyHeader title={aboutTitle} description={aboutDescription} />
      <MyContent />
    </>
  );
};

export default Page;
