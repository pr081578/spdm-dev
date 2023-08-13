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
import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid';

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
      src: 'https://tailwindui.com/img/logos/workcation-logo-white.svg',
      alt: 'EASy Ride LLC',
      width: 150,
      height: 150,
    },
    comment: 'Amazing company to work with',
  },
};

const bulletins = [
  {
    icon: {
      element: CloudArrowUpIcon,
      width: 25,
      height: 25,
      color: '#4338ca',
    },
    strong: 'Push to deploy',
    text: 'dfadssfadsfadsfsd',
  },
  {
    icon: {
      element: LockClosedIcon,
      width: 25,
      height: 25,
      color: '#4338ca',
    },
    strong: 'SSL certificates',
    text: 'dfadssfadsfadsfsd',
  },
];
const Page = () => {
  return (
    <>
      <WithImageTileHero navigation={siteNavbarNavigation} />
      <WithTestimonialContent bulletins={bulletins} />
      <WithImageContent bulletins={bulletins} />
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
