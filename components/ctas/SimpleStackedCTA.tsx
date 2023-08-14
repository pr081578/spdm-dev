import { NavigationDataType } from '@customTypes/generics';
interface CTAProps {
  title?: string;
  headline?: string;
  primaryLink?: NavigationDataType;
  secondaryLink?: NavigationDataType;
}

function SimpleStackedCTA({
  title,
  headline,
  primaryLink,
  secondaryLink,
}: CTAProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title ? title : `Boost your productivity.`}
          <br />
          {headline ? headline : `Start using our app today.`}
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          {primaryLink ? (
            <>
              <a
                href={primaryLink.href}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {primaryLink.name}
              </a>
            </>
          ) : (
            <>
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </>
          )}
          {secondaryLink ? (
            <>
              <a
                href={secondaryLink.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {secondaryLink.name}
                <span aria-hidden="true">→</span>
              </a>
            </>
          ) : (
            <>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export { SimpleStackedCTA };
