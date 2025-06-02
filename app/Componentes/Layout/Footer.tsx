import Logo from "../Logo";
import type { HeaderProps } from "~/Types/interfaces";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer({ backgroundcolor, textcolor }: HeaderProps) {
  return (
    <footer id="footer" className={`${backgroundcolor} ${textcolor} p-8 shadow-md`} tabIndex={-1}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

          <div className="text-md text-center font-semibold sm:text-left mb-6">
            <p>Contacto: jvillosl14@gmail.com</p>
            <p>Tel: +34 675 81 87 22</p>
            <p className="mt-6"><a href="https://github.com/jvillos/a11y" className="text-blue-900 dark:text-blue-400 hover:text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"> Visite el repositorio de esta página en Github</a></p>
          </div>

          <div className="flex flex-col items-center gap-1 mb-6">
            <Logo image="logo" format="avif" />
            <span className="text-base font-semibold">&copy; 2024. Hecho por Juan Villoslada Jiménez</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/jvillos"
              aria-label="Mi perfil de Github"
              className="hover:text-yellow-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-11 w-11" aria-hidden="true" />
              <span className="sr-only">Mi perfil de Github</span>
            </a>

            <a
              href="https://www.linkedin.com/in/juan-villoslada-jimenez/"
              aria-label="Mi perfil de LinkedIn"
              className="hover:text-yellow-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-11 w-11" aria-hidden="true" />
              <span className="sr-only">Mi perfil de LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
