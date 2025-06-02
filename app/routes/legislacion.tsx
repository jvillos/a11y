import { Link } from "react-router";
import SkipLinkInside from "~/Componentes/Accesibilidad/SkipLinkInside";

function Legislacion() {
  return (
  <div className="max-w-4xl mb-7 mx-auto px-3">
    <section className="max-w-4xl mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h1 className="mb-4 font-bold ">Salta a las distintas secciones</h1>
      <nav className="mb-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-4">
          <li>
            <SkipLinkInside href="#europa" label="Europa" />
          </li>
          <li>
            <SkipLinkInside href="#espana" label="España" />
          </li>
          <li>
            <SkipLinkInside href="#nueva-ley" label="Nueva Ley Española" />
          </li>
        </ul>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Legislación sobre Accesibilidad Digital</h1>

      <img
        src="/imagenes/imagen3.avif"
        alt="Imagen 3"
        className="max-w-[40rem] w-full h-auto mb-6"
      />

      <p className="mb-8 text-lg leading-relaxed">
        Hoy en día, la accesibilidad digital ya no es algo opcional. Con la entrada en vigor de la Ley Europea de Accesibilidad (Directiva UE 2019/882) y su adaptación a las leyes españolas, todas las empresas —públicas y privadas— están obligadas a hacer que sus sitios web y apps móviles sean accesibles, siguiendo las pautas WCAG 2.1 en nivel AA. Esta ley no sólo busca evitar multas, sino también garantizar que más de 80 millones de personas con discapacidad en Europa puedan acceder a servicios digitales en igualdad de condiciones.
      </p>
      <p className="mb-8 text-lg leading-relaxed">
        A continuación, una recolección de eventos legales relevantes con respecto a la accesibilidad tanto en Europa como en España en los últimos años que sirva como contexto a los cambios que se implementarán en España a partir de junio de 2025.
      </p>

      <section id="europa" className="mt-16 scroll-mt-28" tabIndex={-1}>
        <h2 className="text-2xl font-semibold mb-4">En Europa</h2>
        <img
          src="/imagenes/imagen2.avif"
          alt="Imagen 2"
          className="max-w-[40rem] w-full h-auto mb-6"
        />
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Directiva 2016/2102:</strong> Obligó a sitios web y apps del sector público a ser accesibles antes del 23 de septiembre de 2020.</li>
          <li><strong>Directiva 2019/882 (Ley Europea de Accesibilidad):</strong> Desde junio de 2025 también se aplica al sector privado (comercio, banca, transporte, etc.).</li>
          <li><strong>Estrategia Europea 2021–2030:</strong> Reafirma que la accesibilidad es un derecho dentro del Pacto Digital Europeo.</li>
        </ul>
      </section>

      <section id="espana" className="mt-16 scroll-mt-28" tabIndex={-1}>
        <h2 className="text-2xl font-semibold mb-4">En España</h2>
        <img
          src="/imagenes/imagen1.avif"
          alt="Imagen 1"
          className="max-w-[40rem] w-full h-auto mb-6"
        />
        <ul className="list-disc ml-6 mb-8">
          <li><strong>Real Decreto 1112/2018:</strong> Transpone la directiva europea para exigir accesibilidad en webs y apps del sector público.</li>
          <li><strong>Ley General de Derechos de las Personas con Discapacidad (actualizada en 2023):</strong> Establece sanciones económicas para quienes no cumplan con la accesibilidad digital.</li>
          <li><strong>Nueva Ley de Accesibilidad Digital (2025):</strong> A partir de junio de 2025, todas las empresas con presencia online en España deben cumplir con los estándares.</li>
        </ul>
      </section>

      <section id="nueva-ley" className="mt-16 mb-16 scroll-mt-28" tabIndex={-1}>
        <h2 className="text-2xl font-semibold mb-4">¿Qué pide la nueva ley española?</h2>
        <img
          src="/imagenes/imagen3.avif"
          alt="Imagen 3"
          className="max-w-[40rem] w-full h-auto mb-6"
        />
        <p className="mb-8 text-lg leading-relaxed">
          A partir de junio de 2025 las empresas con presencia online en España deberán cumplir
          con los estándares de WCAG 2.1 en nivel AA. En caso de no cumplirse, las multas correspondientes
          podrían ser desde 5.000 € para pymes hasta 150.000 € para grandes empresas, además de la posible pérdida
          de usuarios, reputación y confianza. Para más información acerca de la normativa, visite
          <Link to="/wcag" className="text-blue-900 dark:text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"> la sección WCAG en nuestra página</Link> o
          <a href="https://www.w3.org/TR/WCAG21/" className="text-blue-900 dark:text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"> la documentación oficial de WCAG 2.1.</a>
        </p>
      </section>
    </section>
  </div>
  );
}

export default Legislacion;
