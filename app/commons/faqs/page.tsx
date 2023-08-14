'use client';

import {
  siteFaqsHost,
  siteFaqsOwner,
  siteNavbarNavigation,
} from '@collections/siteCollections';
import { ConstrainedHeader } from '@components/commons/headers/ConstrainedHeader';
import Faq from '@components/faqs/CenteredFaqs';

export default function Page() {
  return (
    <>
      <ConstrainedHeader navigation={siteNavbarNavigation} />
      <Faq faqs={siteFaqsHost.faqs} title={siteFaqsHost.title} />
      <Faq faqs={siteFaqsOwner.faqs} title={siteFaqsOwner.title} />
    </>
  );
}
