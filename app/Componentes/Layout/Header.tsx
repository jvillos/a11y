import Logo from '../Logo'
import { NavLink, useNavigate } from 'react-router'
import type {  HeaderProps } from '~/Types/interfaces'

function Header({ backgroundcolor, textcolor }: HeaderProps) {

  return (
    <header className={`${backgroundcolor} ${textcolor} p-5 `}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo image="logo" format="avif" />
            <nav >
              <NavLink to="/" className={`${textcolor} ms-4 px-2`}>Inicio</NavLink>
              <NavLink to="/wcag" className={`${textcolor} ms-4 px-2`}>WCAG</NavLink>
              <NavLink to="/legislacion" className={`${textcolor} ms-4 px-2`}>Legislación</NavLink>
              <NavLink to="/componentes" className={`${textcolor} ms-4 px-2`}>Componentes</NavLink>
              <NavLink to="/Herramientas" className={`${textcolor} ms-4 px-2`}>Herramientas</NavLink>
              
            </nav>
          </div>
          <div className="flex justify-center items-center">
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;