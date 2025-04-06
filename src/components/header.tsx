import { ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header(props: HeaderProps) {
  return (
    <header>
      <div>
        <img src={props.image.src} alt={props.image.alt} />
        <h1>{props.children}</h1>
      </div>
    </header>
  );
}
