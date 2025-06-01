import { useState } from "react";
import { NavLink } from "react-router";
import type { NavbarProps } from "~/Types/interfaces";

const linkClassBase = "ms-4 p-4 text-md font-medium hover:underline";

function Navbar({ textcolor }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = `${textcolor} ${linkClassBase}`;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* Desktop menu */}
      <nav className="hidden md:flex md:ms-6" aria-label="Menú principal">
        <NavLink to="/" className={linkClass} end>
          Inicio
        </NavLink>
        <NavLink to="/wcag" className={linkClass}>
          WCAG
        </NavLink>
        <NavLink to="/legislacion" className={linkClass}>
          Legislación
        </NavLink>
        <NavLink to="/componentes" className={linkClass}>
          Componentes
        </NavLink>
        <NavLink to="/herramientas" className={linkClass}>
          Herramientas
        </NavLink>
      </nav>

      {/* Mobile menu button */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu items */}
      {menuOpen && (
        <nav
          className="mt-4 flex flex-col space-y-2 md:hidden"
          aria-label="Menú móvil"
        >
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
            end
          >
            Inicio
          </NavLink>
          <NavLink
            to="/wcag"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            WCAG
          </NavLink>
          <NavLink
            to="/legislacion"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Legislación
          </NavLink>
          <NavLink
            to="/componentes"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Componentes
          </NavLink>
          <NavLink
            to="/herramientas"
            className={linkClass}
            onClick={() => setMenuOpen(false)}
          >
            Herramientas
          </NavLink>
        </nav>
      )}
    </>
  );
}

export default Navbar;
