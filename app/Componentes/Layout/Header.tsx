import Logo from "../Logo";
import Navbar from "~/Componentes/Layout/Navbar";
import type { HeaderProps } from "~/Types/interfaces";

function Header({ backgroundcolor, textcolor }: HeaderProps) {
  return (
    <header className={`${backgroundcolor} ${textcolor} p-2 shadow-md`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo image="logo" format="avif" />
            <Navbar textcolor={textcolor} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;