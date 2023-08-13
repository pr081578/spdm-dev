import { Footer } from '@components/commons/footers/Footer';
import { SimpleCenteredDarkCTA as MyCTA } from '@components/ctas/DarkPanel';
import { CenteredFeature as MyFeature } from '@components/features/CenteredFeature';
import { SimpleHero as MyHero } from '@components/heroes/SimpleHero';
import { SimpleStatDark as MyStat } from '@components/stats/SimpleStatDark';
import {
  ArrowTrendingUpIcon,
  Cog8ToothIcon,
  FingerPrintIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

import {
  siteFooterNavigation,
  siteNavbarNavigation,
  sitePlatformStat,
} from '@collections/siteCollections';

// My Hero Arguments //
const heroAnnouncement = {
  name: 'Becoming one of SPDM Host or Owners',
  href: '/commons/read-more',
};
const heroCompanyName = {
  name: 'SPDM',
  href: '/',
};

const heroTagline = 'Enrich and empower your car sharing business';
const heroTaglineDescription =
  "Welcome to our car sharing host, where convenience meets community. Whether you're in need of a sleek city cruiser or a rugged adventure companion, our diverse fleet of well-maintained vehicles is at your fingertips, all supported by a network of friendly hosts ready to make your journey unforgettable.";
const heroPrimaryLink = {
  name: 'Get started',
  href: '/commons/get-started',
};
const heroSecondaryLink = {
  name: 'Learn more',
  href: '/commons/learn-more',
};

const statTitle = 'Trusted by owners and hosts worldwide';
const statBrief =
  'For hosts and owners, unlock the road to shared adventures and sustainable solutions.';

// My Features Arguments //
const features = [
  {
    name: 'Streamline Operations',
    description:
      'Revolutionize your car sharing experience with our automated platform, streamlining operations for both owners and hosts. Owners enjoy effortless vehicle management, while hosts benefit from a seamless hosting process, all powered by cutting-edge automation, maximizing convenience and efficiency for everyone involved.',
    icon: Cog8ToothIcon,
  },
  {
    name: 'Faster Revenue',
    description:
      "Accelerate your revenue generation with our platform's innovative features. Unlock new streams of income, reach a wider audience, and optimize your business growth in record time. Experience the power of our platform and start generating faster revenue today.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Platform Synergies',
    description:
      'Experience the perfect synergy of our platform, connecting owners, hosts, and guests seamlessly. Owners efficiently manage their vehicles, hosts enjoy a hassle-free hosting experience, and guests access a diverse range of well-maintained vehicles. Join our platform and witness the harmonious collaboration that creates a winning experience for everyone involved.',
    icon: LinkIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Your security is our top priority. Our platform employs advanced encryption and robust privacy measures to safeguard your personal information. Trust in our commitment to keeping your data safe, allowing you to enjoy the benefits of our platform with peace of mind.',
    icon: FingerPrintIcon,
  },
];
const featureTitle = 'Earn Faster';
const featureTagline =
  'Everything you need to operate your car sharing business';
const featureDescription =
  'For owners, empower change as a car sharing owner, sharing your wheels and shaping a greener, more connected world, one ride at a time. For hosts, elevate guest travels as a gracious car sharing host, offering wheels and warmth to wanderers from near and far.';

// CTA Arguments //
const ctaTitle = 'Boost your business revenue.';
const ctaTagline = 'Start using our app today';
const ctaDescription =
  "Unlock the path to boosted revenue with our cutting-edge app. Tap into new markets, optimize operations, and enhance customer engagement, all while gaining valuable insights to drive your business forward. Elevate your revenue potential and thrive in today's dynamic landscape with our powerful app.";
const ctaPrimaryLink = {
  name: 'Get started',
  href: '/commons/get-started',
};
const ctaSecondaryLink = {
  name: 'Learn more',
  href: '/commons/learn-more',
};

// Footer Arguments //

const footerLogo = {
  name: 'logo',
  src: '/images/logo2.png',
  href: '/',
  alt: 'logo',
};

export default function Home() {
  return (
    <div>
      <MyHero
        announcement={heroAnnouncement}
        navigation={siteNavbarNavigation}
        companyName={heroCompanyName}
        tagline={heroTagline}
        taglineDescription={heroTaglineDescription}
        primaryLink={heroPrimaryLink}
        secondaryLink={heroSecondaryLink}
      />
      <MyStat stats={sitePlatformStat} title={statTitle} brief={statBrief} />
      <MyFeature
        features={features}
        title={featureTitle}
        tagline={featureTagline}
        description={featureDescription}
      />
      <MyCTA
        title={ctaTitle}
        tagline={ctaTagline}
        description={ctaDescription}
        primaryLink={ctaPrimaryLink}
        secondaryLink={ctaSecondaryLink}
      />
      <Footer navigation={siteFooterNavigation} logo={footerLogo} />
    </div>
  );
}
