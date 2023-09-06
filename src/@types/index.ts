//Header related props
interface HeaderLinksProps {
  key: number | string;
  label: string | JSX.Element;
  href?: string;
  children?: HeaderLinksProps[];
}
