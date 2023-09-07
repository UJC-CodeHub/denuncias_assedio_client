import { IconProps } from "@phosphor-icons/react";

//Header related props
export interface HeaderLinksProps {
  key: number | string;
  label: string | JSX.Element;
  href?: string;
  children?: HeaderLinksProps[];
}

//Carousel related props
export interface CarouselProps {
  key: number | string;
  title: string;
  subtitle: string;
}

//Card related props
export interface MyCardProps{
  Icon: JSX.Element,
  key: number | string
  title: string,
  subtitle: string
}
