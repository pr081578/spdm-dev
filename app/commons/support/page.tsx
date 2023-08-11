import { CardHeaders as MyHeader } from '@components/commons/headers/CardHeaders';
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';

const Page = () => {
  // My Header Arguments //
  const supportTitle = 'Support Center';
  const supportDescription =
    "Welcome to our Support Center! We're here to assist you every step of the way. If you have questions, encounter issues, or need guidance on our car sharing host platform, here's how to get the support you need:";
  const supportCards = [
    {
      name: 'Sales',
      description:
        'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
      icon: PhoneIcon,
    },
    {
      name: 'Technical Support',
      description:
        'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
      icon: LifebuoyIcon,
    },
    {
      name: 'Media Inquiries',
      description:
        'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
      icon: NewspaperIcon,
    },
  ];

  return (
    <>
      <MyHeader
        title={supportTitle}
        description={supportDescription}
        cards={supportCards}
      />
    </>
  );
};

export default Page;
