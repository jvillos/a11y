export interface LogoProps{
    image:string,
    format:string
}

export interface HeaderProps{
    backgroundcolor:string,
    textcolor:string
}

export interface NavbarProps {
  textcolor: string;
}

export interface SkipLinkProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export interface ButtonProps {
  text: string;
  variant?: "default" | "hover"; 
  onClick: (text: string) => void;
}

export interface SkipLinkInsideProps {
  href: string;
  label: string;
  className?: string;
}