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
  variant?: "default" | "hover"; // inline variant type
  onClick: (text: string) => void;
}