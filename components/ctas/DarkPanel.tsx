type NavigationDataType = {
  name: string;
  href: string;
};
interface SimpleCenteredDarkCTAProps {
  title?: string;
  tagline?: string;
  description?: string;
  primaryLink: NavigationDataType;
  secondaryLink: NavigationDataType;
}

function SimpleCenteredDarkCTA({
  title,
  tagline,
  description,
  primaryLink,
  secondaryLink,
}: SimpleCenteredDarkCTAProps) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title ? title : 'Boost your productivity.'}
            <br />
            {tagline ? tagline : 'Start using our app today.'}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            {description
              ? description
              : 'Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.'}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={primaryLink ? primaryLink.href : '#'}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryLink ? primaryLink.name : 'Get started'}
            </a>
            <a
              href={secondaryLink ? secondaryLink.name : '#'}
              className="text-sm font-semibold leading-6 text-white"
            >
              {secondaryLink ? secondaryLink.name : 'Learn more'}{' '}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export { SimpleCenteredDarkCTA };
