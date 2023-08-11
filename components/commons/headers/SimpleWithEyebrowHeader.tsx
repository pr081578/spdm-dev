interface HeaderProps {
  title?: string;
  description?: string;
  eyebrow?: string;
}

function SimpleWithEyebrow({ title, description, eyebrow }: HeaderProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            {eyebrow ? eyebrow : 'Get the help you need'}
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title ? title : 'Support center'}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description
              ? description
              : 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export { SimpleWithEyebrow };
