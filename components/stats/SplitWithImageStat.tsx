import type { StatDataType } from '@customTypes/generics';
import Image from 'next/image';

interface StatProps {
  title?: string;
  headline?: string;
  description?: string;
  stats: StatDataType[];
}

function SplitWithImageStat({
  stats,
  title,
  headline,
  description,
}: StatProps) {
  return (
    <div className="relative bg-white">
      <Image
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
        src="/images/stats/colloboration-war-room.jpeg"
        alt=""
        width={100}
        height={100}
      />

      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-8 text-indigo-600">
              {title ? title : `Our track record`}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {headline
                ? headline
                : `Trusted by thousands of creators worldwide`}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description
                ? description
                : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.`}
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                >
                  <dt className="text-sm leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SplitWithImageStat };
