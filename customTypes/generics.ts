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
export type {
  CardDataType,
  FaqDataType,
  LogoDataType,
  NavigationDataType,
  StatDataType,
};
