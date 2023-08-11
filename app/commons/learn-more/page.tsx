import { SimpleWithEyebrow as MyHeader } from '@components/commons/headers/SimpleWithEyebrowHeader';
import { SideBySideNewletter } from '@components/newsletters/SideBySideNewsletter';

const Page = () => {
  // MyHeader Arguments //
  const learnMoreTitle = 'Learn More';
  const learnMoreDescription = `Welcome to the Learn More section, your gateway to discovering the incredible benefits and features our car sharing platform has to offer. Dive into the details, unravel the advantages, and take your car sharing experience to the next level with us. Whether you're an owner, host, or guest, this is where the journey gets exciting. Let's explore!`;
  const learnMoreEyebrow = 'Get the help you need';

  return (
    <>
      <MyHeader
        title={learnMoreTitle}
        description={learnMoreDescription}
        eyebrow={learnMoreEyebrow}
      />
      <SideBySideNewletter />
    </>
  );
};

export default Page;
