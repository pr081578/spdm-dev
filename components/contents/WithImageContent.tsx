import type {
  BulletinDataType,
  SimpleContentDataType,
} from '@customTypes/generics';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import React from 'react';

interface ContentProps {
  title?: string;
  headline?: string;
  description?: string;
  introduction?: string;
  bulletins?: BulletinDataType[];
  summary?: string;
  closing?: SimpleContentDataType;
}

function WithImageContent({
  title,
  headline,
  description,
  introduction,
  bulletins,
  summary,
  closing,
}: ContentProps) {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {title ? title : `Deploy faster`}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {headline ? headline : `A better workflow`}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              {description
                ? description
                : `Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.`}
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                {introduction
                  ? introduction
                  : `Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.`}
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {bulletins ? (
                  <>
                    {bulletins.map((bulletin, index) => (
                      <li key={index} className="flex gap-x-3">
                        {React.createElement(bulletin.icon.element, {
                          width: bulletin.icon.width,
                          height: bulletin.icon.height,
                          color: bulletin.icon.color,
                        })}
                        <span>
                          <strong className="font-semibold text-gray-900">
                            {bulletin.strong}
                          </strong>{' '}
                          {bulletin.text}
                        </span>
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Push to deploy.
                        </strong>{' '}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          SSL certificates.
                        </strong>{' '}
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Database backups.
                        </strong>{' '}
                        Ac tincidunt sapien vehicula erat auctor pellentesque
                        rhoncus. Et magna sit morbi lobortis.
                      </span>
                    </li>
                  </>
                )}
              </ul>
              <p className="mt-8">
                {summary
                  ? summary
                  : `Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.`}
              </p>
              {closing ? (
                <>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    {closing.title}
                  </h2>
                  <p className="mt-6">{closing.content}</p>
                </>
              ) : (
                <>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    No operations? No problem.
                  </h2>
                  <p className="mt-6">
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                    consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                    euismod vitae interdum mauris enim, consequat vulputate
                    nibh. Maecenas pellentesque id sed tellus mauris, ultrices
                    mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam
                    sed nullam sed diam turpis ipsum eu a sed convallis diam.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { WithImageContent };
