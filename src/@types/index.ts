//Header related props
interface HeaderLinksProps {
  key: number | string;
  label: string | JSX.Element;
  href?: string;
  children?: HeaderLinksProps[];
}

//Carousel related props
interface CarouselProps {
  key: number | string;
  title: string;
  subtitle: string;
}
