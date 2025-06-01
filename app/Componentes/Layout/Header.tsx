import { useState } from "react";
import { NavLink } from "react-router"; // ✅ CORRECTO para v7 Full Framework
import Logo from "../Logo";
import type { HeaderProps } from "~/Types/interfaces";

function Header({ backgroundcolor, textcolor }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const linkClass = `${textcolor} ms-4 p-2 text-sm font-medium hover:underline`;

  return (
    <header className={`${backgroundcolor} ${textcolor} p-4 shadow-md`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo image="logo" format="avif" />
            <nav className="hidden md:flex md:ms-6">
              <NavLink to="/" className={linkClass}>Inicio</NavLink>
              <NavLink to="/wcag" className={linkClass}>WCAG</NavLink>
              <NavLink to="/legislacion" className={linkClass}>Legislación</NavLink>
              <NavLink to="/componentes" className={linkClass}>Componentes</NavLink>
              <NavLink to="/herramientas" className={linkClass}>Herramientas</NavLink>
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
            >
              <svg
                className="h-6 w-6 text-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mt-4 flex flex-col space-y-2 md:hidden" aria-label="Menú móvil">
            <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Inicio</NavLink>
            <NavLink to="/wcag" className={linkClass} onClick={() => setMenuOpen(false)}>WCAG</NavLink>
            <NavLink to="/legislacion" className={linkClass} onClick={() => setMenuOpen(false)}>Legislación</NavLink>
            <NavLink to="/componentes" className={linkClass} onClick={() => setMenuOpen(false)}>Componentes</NavLink>
            <NavLink to="/herramientas" className={linkClass} onClick={() => setMenuOpen(false)}>Herramientas</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
