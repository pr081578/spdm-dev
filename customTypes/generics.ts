type CardDataType = {
  name?: string;
  description?: string;
  icon?: any;
};

type LogoDataType = {
  name?: string;
  src: string;
  alt: string;
  href?: string;
};

type IconDataType = {
  element: any;
  width: number;
  height: number;
  color: string;
};

type ImageDataType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type NavigationDataType = {
  name?: string;
  href?: string;
};

type StatDataType = {
  id?: number;
  name?: string;
  value?: string;
};

type FaqDataType = {
  question: string;
  answer: string;
};

type PersonDataType = {
  name: string;
  role: string;
  imageUrl: string;
};

type ContentDataType = {
  strong: string;
  text: string;
  class: string;
};

type CompanyDataType = {
  name: string;
  logoImage: ImageDataType;
};

type TestimonialDataType = {
  name: string;
  title?: string;
  company?: CompanyDataType;
  image: ImageDataType;
  comment: string;
  handle?: string;
};

type BulletinDataType = {
  strong: string;
  text: string;
  icon: IconDataType;
};

type SimpleContentDataType = {
  title: string;
  content: string;
};

type AddressDataType = {
  street: string;
  cityStateZip: string;
  phone: string;
  email: string;
};

export type {
  AddressDataType,
  BulletinDataType,
  CardDataType,
  CompanyDataType,
  ContentDataType,
  FaqDataType,
  IconDataType,
  ImageDataType,
  LogoDataType,
  NavigationDataType,
  PersonDataType,
  SimpleContentDataType,
  StatDataType,
  TestimonialDataType,
};
