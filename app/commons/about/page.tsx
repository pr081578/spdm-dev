import { siteNavbarNavigation } from '@collections/siteCollections';
import { WithImageTileHero } from '@components/heroes/WithImageTileHero';
import { SplitWithImageStat } from '@components/stats/SplitWithImageStat';

import {
  siteCompanyPersonel,
  siteCompanystats,
  siteOurMission,
  sitePlatformStat,
} from '@collections/siteCollections';
import { WithImageContent } from '@components/contents/WithImageContent';
import { WithTestimonialAndStatContent } from '@components/contents/WithTestimonialAndStatContent';
import { WithTestimonialContent } from '@components/contents/WithTestimonialContent';
import { WithSmallImageTeam } from '@components/teams/WithSmallImageTeam';
import {
  ChartBarIcon,
  HandThumbUpIcon,
  HomeIcon,
} from '@heroicons/react/20/solid';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const team = {
  title: 'Discover our team',
  description: `Welcome to our team! We're a passionate group of individuals dedicated to making a positive impact in car sharing hosting and fleet management operations. Our diverse backgrounds and unique skills come together to create a dynamic force focused on simplifying in innovative way to put our clients at ease an excel profit and customer experiences for customer satisfaction. With a shared commitment to our core values,, collaboration, integrity and creativity, we thrive on challenges and continuously seek new opportunities to for customers, clients and community. Get to know the faces behind our collective drive, and join us on this exciting journey towards our vision and mission to serve you. Together, we're not just a team; we're a partner and advocate that's ready to exceed expectations and make a difference.`,
  people: siteCompanyPersonel,
};

const stat = {
  title: 'Deep Dive into our numbers',
  headline: 'Trusted by thousand of owner and host globally',
  description: `Unlock the path to boosted revenue with our cutting-edge app. 
  Tap into new markets, optimize operations, and enhance customer engagement, 
  all while gaining valuable insights to drive your business forward. 
  Elevate your revenue potential and thrive in today's dynamic landscape with our powerful app`,
  stats: sitePlatformStat,
};

const ourMission = {
  title: 'Our values',
  headline: ' On a mission to empower our parnters',
  contents: siteOurMission,
  stats: siteCompanystats,
  testimonial: {
    name: 'Jane Doe',
    title: 'Owner',
    company: 'EASY Ride LLC',
    image: {
      src: '',
      alt: 'EASy Ride LLC',
      width: 150,
      height: 150,
    },
    comment: 'Amazing company to work with',
  },
};

const ourContent = {
  title: 'Seemless Operations',
  headline: 'An automated workflow',
  description: `At SPDM we understand that time is precious, and efficiency is paramount. 
  That's why we've meticulously designed an automated workflow tailored specifically for 
  owners and hosts.`,
  introduction: ` Our goal is to empower you with a seamless, hassle-free experience 
  that maximizes your convenience and potential, allowing you to focus on what truly matters: 
  providing exceptional experiences and optimizing your returns.`,
  bulletins: [
    {
      icon: {
        element: ArrowTrendingUpIcon,
        width: 35,
        height: 35,
        color: '#4338ca',
      },
      strong: 'Streamlined Operations',
      text: ` No more manual coordination or time-consuming tasks—just effortless ownership with peace of mind.`,
    },
    {
      icon: {
        element: HomeIcon,
        width: 35,
        height: 35,
        color: '#4338ca',
      },
      strong: 'Effortless Hosting',
      text: `Hosting on our platform is a breeze, from handling guest inquiries, bookings, our system controls without the stress`,
    },
    {
      icon: {
        element: ChartBarIcon,
        width: 35,
        height: 35,
        color: '#4338ca',
      },
      strong: 'Real-Time Insights',
      text: `Our platform provides real-time insights into your vehicle's performance, earnings, and guest reviews.`,
    },
    {
      icon: {
        element: HandThumbUpIcon,
        width: 35,
        height: 35,
        color: '#4338ca',
      },
      strong: 'Peace of Mind and Growth',
      text: `With our automated workflow, we aim to offer peace of mind to owners and hosts.`,
    },
  ],
  summary: `Discover the power of automation with SPDM Fleet Management Operations Service. 
  Join us, and let our platform revolutionize your ownership and hosting journey. Experience 
  the future of car sharing, where technology and convenience work together seamlessly for 
  your benefit.`,
  closing: {
    title: 'No operations? No Problem',
    content: `At SPDM, we're more than just a platform; we're a community united by a shared 
  vision of convenience, sustainability, and exceptional experiences. Join us as we reshape 
  the way we move, connect, and care for our world. Together, we're driving towards a brighter 
  future, one ride at a time. Thank you for being a part of this journey with us.`,
  },
  testimonial: {
    name: 'Jane Doe',
    image: {
      src: '/images/test-photo.jpeg',
      alt: 'Jane Doe',
      width: 40,
      height: 40,
    },
    comment: `I'm thrilled with this car sharing platform! It's incredibly user-friendly, 
    and the range of vehicles available is impressive. It's changed the way I travel,
     making it both convenient and eco-friendly. Highly recommend it!`,
    socialTagName: '@jdoe',
  },
};

const ourHero = {
  title: `We're changing the way car sharing operations`,
  description: `We're revolutionizing car sharing operations by introducing an innovative 
  platform that streamlines every step of the journey. Our technology simplifies vehicle listings, 
  automates bookings, and enhances communication between owners, hosts, and guests. With a focus on trust, 
  safety, and sustainability, we're reshaping the car sharing landscape to create a more efficient, 
  convenient, and community-driven experience for everyone involved.`,
  primaryLink: {
    name: 'Get started',
    href: '/commons/get-started',
  },
  secondaryLink: {
    name: 'Read more',
    href: '/commons/read-more',
  },
  navigation: siteNavbarNavigation,
};
const Page = () => {
  return (
    <>
      <WithImageTileHero
        title={ourHero.title}
        description={ourHero.description}
        primaryLink={ourHero.primaryLink}
        secondaryLink={ourHero.secondaryLink}
        navigation={siteNavbarNavigation}
      />
      <WithTestimonialContent
        title={ourContent.title}
        headline={ourContent.headline}
        description={ourContent.description}
        introduction={ourContent.introduction}
        summary={ourContent.summary}
        closing={ourContent.closing}
        bulletins={ourContent.bulletins}
        testimonial={ourContent.testimonial}
      />
      <WithImageContent
        title={ourContent.title}
        headline={ourContent.headline}
        description={ourContent.description}
        introduction={ourContent.introduction}
        summary={ourContent.summary}
        closing={ourContent.closing}
        bulletins={ourContent.bulletins}
      />
      <WithTestimonialAndStatContent
        title={ourMission.title}
        headline={ourMission.headline}
        stats={ourMission.stats}
        contents={ourMission.contents}
        testimonial={ourMission.testimonial}
      />
      <SplitWithImageStat
        stats={stat.stats}
        title={stat.title}
        headline={stat.headline}
        description={stat.description}
      />
      <WithSmallImageTeam
        title={team.title}
        people={team.people}
        description={team.description}
      />
    </>
  );
};

export default Page;
