import type { TestimonialDataType } from '@customTypes/generics';
import Image from 'next/image';

const testimonials = [
  [
    [
      {
        comment:
          'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        name: 'Leslie Alexander',
        handle: 'lesliealexander',
        image: {
          src: '/images/testimonials/young-lady-in-red-smiling.jpeg',
          alt: 'Leslie Alexander',
          width: 100,
          height: 100,
        },
      },
      // More testimonials...
    ],
    [
      {
        comment:
          'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        image: {
          src: '/images/testimonials/woman-in-blue.jpeg',
          alt: 'Lindsay Walton',
          width: 100,
          height: 100,
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        comment:
          'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        name: 'Tom Cook',
        handle: 'tomcook',
        image: {
          src: '/images/testimonials/man-in-glass-looking-left.jpeg',
          alt: 'Tom Cook',
          width: 100,
          height: 100,
        },
      },
      // More testimonials...
    ],
    [
      {
        comment:
          'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        name: 'Leonard Krasner',
        handle: 'leonardkrasner',
        image: {
          src: '/images/testimonials/man-in-sunglasses.jpeg',
          alt: 'Leonard Krasner',
          width: 100,
          height: 100,
        },
      },
      // More testimonials...
    ],
  ],
];
{
  /*testimonials: [
    [TestimonialDataType[], TestimonialDataType[]],
    [TestimonialDataType[], TestimonialDataType[]],
  ];*/
}
interface TestimonialProps {
  featuredTestimonial: TestimonialDataType;
  testimonials: TestimonialDataType[][][];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function GridTestimonial({ featuredTestimonial }: TestimonialProps) {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>“{featuredTestimonial.comment}”</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.image.src}
                alt={featuredTestimonial.image.alt}
                width={featuredTestimonial.image.width}
                height={featuredTestimonial.image.height}
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.handle}`}</div>
              </div>
              <Image
                className="h-10 w-auto flex-none"
                src={
                  featuredTestimonial.company?.logoImage.src
                    ? featuredTestimonial.company?.logoImage.src
                    : '/images/logo2.png'
                }
                alt={
                  featuredTestimonial.company?.logoImage.alt
                    ? featuredTestimonial.company?.logoImage.alt
                    : ''
                }
                width={
                  featuredTestimonial.company?.logoImage.width
                    ? featuredTestimonial.company?.logoImage.width
                    : 100
                }
                height={
                  featuredTestimonial.company?.logoImage.height
                    ? featuredTestimonial.company?.logoImage.height
                    : 100
                }
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.comment}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.image.src}
                          alt={testimonial.image.alt}
                          width={testimonial.image.width}
                          height={testimonial.image.height}
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { GridTestimonial };
