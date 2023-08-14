import {
  siteFeaturedTestimonial,
  siteNavbarNavigation,
  siteTestimonials,
} from '@collections/siteCollections';
import { ConstrainedHeader } from '@components/commons/headers/ConstrainedHeader';
import { SimpleCenteredDarkCTA } from '@components/ctas/SimpleCenteredDarkCTA';
import { GridTestimonial } from '@components/testimonials/GridTestimonial';
import { WithLargerAvatarTestimonial } from '@components/testimonials/WithLargerAvatarTestimonial';

const Page = () => {
  return (
    <>
      <ConstrainedHeader navigation={siteNavbarNavigation} />
      <GridTestimonial
        featuredTestimonial={siteFeaturedTestimonial}
        testimonials={siteTestimonials}
      />
      <WithLargerAvatarTestimonial />
      <SimpleCenteredDarkCTA />
    </>
  );
};

export default Page;
