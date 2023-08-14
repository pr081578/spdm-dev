import { siteNavbarNavigation } from '@collections/siteCollections';
import { CardHeader } from '@components/commons/headers/CardHeader';

import { siteContact, siteSupport } from '@collections/siteCollections';
import { ConstrainedHeader } from '@components/commons/headers/ConstrainedHeader';
import { SplitWithPatternContact } from '@components/contacts/SplitWithPatternContact';

const Page = () => {
  return (
    <>
      <ConstrainedHeader navigation={siteNavbarNavigation} />
      <CardHeader
        title={siteSupport.title}
        description={siteSupport.description}
        cards={siteSupport.cards}
      />
      <SplitWithPatternContact
        title={siteContact.title}
        description={siteContact.description}
        address={siteContact.address}
      />
    </>
  );
};

export default Page;
