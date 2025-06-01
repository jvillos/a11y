import SkipLinkInside from "~/Componentes/Accesibilidad/SkipLinkInside"


function Herramientas() {

  return (

    <section className="max-w-4xl mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h1 className="mb-6">Salta a las distintas secciones</h1>
      <nav className="mb-10 flex flex-wrap gap-4">
        <SkipLinkInside href="#comprobadores" label="Comprobadores de accesibilidad"/>
        <SkipLinkInside href="#lectores" label="Lectores de Pantalla"/>
        <SkipLinkInside href="#plugins" label="Plugins y Utilidades"/>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Herramientas para Evaluar la Accesibilidad</h1>

      <img
        src="/imagenes/imagen1.avif"
        alt="Imagen 1"
        className="max-w-[40rem] w-full h-auto mb-6"
      />
      <p className="mb-8 text-lg leading-relaxed">
        La accesibilidad web no es solo una buena práctica, es una responsabilidad ética y legal. Garantizar que todas las personas, incluidas aquellas con discapacidades, puedan navegar, comprender e interactuar con nuestros sitios mejora la inclusión digital y la calidad del producto. Usar herramientas específicas para evaluar accesibilidad nos permite identificar errores comunes como bajo contraste, estructura incorrecta del HTML, o mal uso de roles ARIA. Estas utilidades también ayudan a comprobar la navegabilidad con teclado, compatibilidad con lectores de pantalla y el cumplimiento de estándares como WCAG. Integrar estos chequeos en el flujo de trabajo asegura una web más usable, escalable y profesional. A continuación, exploramos algunas de las herramientas más útiles para lograrlo.
      </p>

      <section id="comprobadores" className="mt-16 scroll-mt-28" tabIndex={-1} >
        <h2 className="text-2xl font-semibold mb-4">Comprobadores</h2>
        <img
          src="/imagenes/imagen2.avif"
          alt="Imagen 2"
          className="max-w-[40rem] w-full h-auto mb-6"
        />
        <p className="mb-8 text-base">
          Herramientas clave para evaluar y mejorar la accesibilidad de tu sitio web:
        </p>

        <div className="space-y-6">
          <article>
            <h3 className="text-lg font-medium">Lighthouse (Chrome / Edge)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Qué hace:</strong> Auditoría integrada que analiza rendimiento, accesibilidad, SEO y buenas prácticas.</li>
              <li><strong>Navegadores:</strong> Chrome, Edge, Brave.</li>
              <li><strong>Uso:</strong> DevTools (F12) → "Lighthouse" → Generar informe.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-lg font-medium">Comprobador de Accesibilidad (Mozilla Firefox)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Qué hace:</strong> Detecta problemas de ARIA, contraste y semántica HTML.</li>
              <li><strong>Navegadores:</strong> Solo Firefox.</li>
              <li><strong>Uso:</strong> DevTools (F12) → Pestaña "Accesibilidad".</li>
            </ul>
          </article>

          <article>
            <h3 className="text-lg font-medium">WAVE (Plugin para Chrome y Firefox)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Qué hace:</strong> Destaca errores WCAG en tiempo real con explicaciones visuales.</li>
              <li><strong>Navegadores:</strong> Chrome, Firefox, Edge.</li>
              <li><strong>Uso:</strong> Instala la extensión y haz clic en el icono.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-lg font-medium">Silktide (Plugin gratuito para Chrome)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Qué hace:</strong> Simula visión borrosa, daltonismo y otras condiciones.</li>
              <li><strong>Navegadores:</strong> Chrome.</li>
              <li><strong>Uso:</strong> Instala la extensión y activa la simulación.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-lg font-medium">Validador CSS Jigsaw de W3C</h3>
            <p className="ml-6">Valida el CSS para asegurar cumplimiento de estándares.</p>
          </article>
        </div>
      </section>

      <section id="lectores" className="mt-16 scroll-mt-28" tabIndex={-1} >
        <h2 className="text-2xl font-semibold mb-4">Lectores de Pantalla</h2>
        <img
          src="/imagenes/imagen1.avif"
          alt="Imagen 1"
          className="max-w-[40rem] w-full h-auto mb-6"
        />
        <p className="mb-8">
          Herramientas que simulan la experiencia de usuarios con discapacidad visual o que utilizan navegación asistida:
        </p>

        <div className="space-y-6">
          <article>
            <h3 className="text-lg font-medium">NVDA (Windows, gratuito)</h3>
            <ul className="list-disc ml-6">
              <li>
                <strong>Descarga:</strong>{' '}
                <a
                  href="https://www.nvaccess.org"
                  className="text-blue-600 dark:text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nvaccess.org
                </a>
              </li>
              <li><strong>Uso:</strong> Compatible con Chrome y Firefox en Windows.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-lg font-medium">VoiceOver (macOS / iOS)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Cómo activarlo:</strong> Cmd + F5 en Mac o desde ajustes en iOS.</li>
              <li><strong>Uso:</strong> Compatible con Safari, Chrome y gestos táctiles.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-lg font-medium">JAWS (Windows, versión demo disponible)</h3>
            <ul className="list-disc ml-6">
              <li>
                <strong>Descarga:</strong>{' '}
                <a
                  href="https://www.freedomscientific.com"
                  className="text-blue-600 dark:text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  freedomscientific.com
                </a>
              </li>
              <li><strong>Uso:</strong> Ampliamente usado en entornos profesionales.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="plugins" className="mt-16 mb-16 scroll-mt-28" tabIndex={-1} >
        <h2 className="text-2xl font-semibold mb-4">Plugins y Utilidades</h2>
        <img
          src="/imagenes/imagen3.avif"
          alt="Imagen 3"
          className="max-w-[40rem] w-full h-auto mb-6"
        />
        <p className="mb-8">
          Herramientas complementarias que puedes añadir a tu flujo de trabajo para asegurar accesibilidad desde el desarrollo:
        </p>

        <div className="space-y-6">
          <article>
            <h3 className="text-lg font-medium">axe DevTools (Chrome, Edge, Firefox)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Qué hace:</strong> Detecta errores WCAG usando el motor axe-core.</li>
              <li><strong>Ventaja:</strong> Sugiere soluciones técnicas para cada hallazgo.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-lg font-medium">Color Contrast Checker</h3>
            <ul className="list-disc ml-6">
              <li><strong>Ejemplos:</strong> ColorZilla, WCAG Color Contrast Checker.</li>
              <li><strong>Uso:</strong> Mide el contraste entre colores directamente en la página.</li>
            </ul>
          </article>

          <article>
            <h3 className="text-lg font-medium">Keyboard Navigator (Chrome)</h3>
            <ul className="list-disc ml-6">
              <li><strong>Qué hace:</strong> Simula navegación con teclado para validar focus y tabindex.</li>
            </ul>
          </article>
        </div>
      </section>
    </section>
  )
}

export default Herramientas