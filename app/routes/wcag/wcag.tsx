import SkipLinkInside from "~/Componentes/Accesibilidad/SkipLinkInside"

function Wcag() {
  return (
    <section className="max-w-4xl mx-auto p-6 text-gray-900 dark:text-gray-100">
      <h1 className="mb-4 font-bold">Salta a las distintas secciones</h1>

      <nav className="mb-10">
        <ul className="flex gap-2">
          <li>
            <SkipLinkInside href="#wcag" label="¿Qué son las WCAG?" />
          </li>
          <li>
            <SkipLinkInside href="#niveles-conformidad" label="Niveles de conformidad (A, AA, AAA)" />
          </li>
        </ul>
        <ul className="flex gap-2 mt-4">
          <li>
            <SkipLinkInside href="#principios-pour" label="Principios POUR" />
          </li>
        </ul>
        <ul className="flex gap-2 mt-4">
          <li className="ml-4">
            <SkipLinkInside href="#perceptible" label="Perceptible" />
          </li>
          <li className="ml-4">
            <SkipLinkInside href="#operable" label="Operable" />
          </li>
          <li className="ml-4">
            <SkipLinkInside href="#comprensible" label="Comprensible" />
          </li>
          <li className="ml-4">
            <SkipLinkInside href="#robusto" label="Robusto" />
          </li>
        </ul>
        <ul className="flex gap-2 mt-4">
          <li>
            <SkipLinkInside href="#wcag-22" label="Novedades en WCAG 2.2" />
          </li>
        </ul>
      </nav>


      <h1 className="text-3xl font-bold mb-6">WCAG y principios POUR</h1>
      <article id="wcag" className=" mb-20">
        <h2 className="text-2xl font-semibold mb-2">¿Qué son las WCAG?</h2>
        <img
          src="/imagenes/imagen2.avif"
          alt="Imagen 2"
          className="max-w-[40rem] w-full h-auto mb-6"
        />
        <p className="mb-4">
          Las WCAG (Web Content Accessibility Guidelines) son pautas internacionales desarrolladas por el W3C para garantizar que el contenido web sea accesible para personas con discapacidades visuales, auditivas, motoras o cognitivas.
        </p>
        <p className="mb-4">
          Surgieron en 1999 con WCAG 1.0, evolucionaron en 2008 con WCAG 2.0, y se ampliaron en 2018 con WCAG 2.1. La versión más reciente, WCAG 2.2, fue publicada en 2023.
        </p>
        <p>Para más información, visite <a href="https://www.w3.org/TR/WCAG21/" className="text-blue-900 dark:text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"> la documentación oficial de WCAG 2.1.</a></p>
      </article>

      <article id="niveles-conformidad" className=" mb-20">
        <h2 className="text-2xl font-semibold mb-2">Niveles de conformidad</h2>
        <p className="mb-4">Las WCAG establecen tres niveles:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Nivel A:</strong> requisitos mínimos indispensables.</li>
          <li><strong>Nivel AA:</strong> nivel recomendado y exigido legalmente en la mayoría de países.</li>
          <li><strong>Nivel AAA:</strong> nivel máximo, recomendable cuando sea viable.</li>
        </ul>
      </article>

      <article id="principios-pour" className=" mb-20">
        <h2 className="text-2xl font-semibold mb-4">Principios WCAG (POUR)</h2>
        <p className="mb-6">Las WCAG se estructuran en torno a cuatro principios fundamentales:</p>

        <section id="perceptible" className="mb-8">
          <h3 className="text-xl font-bold mb-2">1. Perceptible (Perceivable)</h3>
          <p className="mb-2">El contenido debe ser presentado de manera que los usuarios puedan percibirlo, ya sea visual, auditiva o táctilmente.</p>
          <ul className="list-disc pl-6">
            <li>Alternativas textuales a contenido no textual.</li>
            <li>Subtítulos, descripciones y transcripciones para multimedia.</li>
            <li>HTML semántico y etiquetas ARIA para estructura.</li>
            <li>Contrastes adecuados y contenido visual distinguible.</li>
          </ul>
          <p className="mt-6">Para más una vista más detallada, visite <a href="https://www.w3.org/TR/WCAG21/#perceivable" className="text-blue-900 dark:text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"> la documentación oficial del principio Percibible</a></p>
        </section>

        <section id="operable" className="mb-8">
          <h3 className="text-xl font-bold mb-2">2. Operable (Operable)</h3>
          <p className="mb-2">La interfaz y navegación deben poder usarse con distintos dispositivos y sin requerir habilidades específicas.</p>
          <ul className="list-disc pl-6">
            <li>Todo debe ser accesible mediante teclado.</li>
            <li>Evitar contenidos que puedan causar convulsiones.</li>
            <li>Estructura navegable con orden lógico.</li>
            <li>Compatibilidad con dispositivos táctiles y asistentes de voz.</li>
          </ul>
          <p className="mt-6">Para más una vista más detallada, visite <a href="https://www.w3.org/TR/WCAG21/#operable" className="text-blue-900 dark:text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"> la documentación oficial del principio Operable</a></p>
        </section>

        <section id="comprensible" className="mb-8">
          <h3 className="text-xl font-bold mb-2">3. Comprensible (Understandable)</h3>
          <p className="mb-2">Los contenidos e interfaces deben ser fáciles de entender y predecibles para todos los usuarios.</p>
          <ul className="list-disc pl-6">
            <li>Lenguaje claro y etiquetas correctas.</li>
            <li>Comportamiento coherente de formularios y elementos.</li>
            <li>Asistencia en la entrada de datos y validación accesible.</li>
          </ul>
          <p className="mt-6">Para más una vista más detallada, visite <a href="https://www.w3.org/TR/WCAG21/#understandable" className="text-blue-900 dark:text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"> la documentación oficial del principio Comprensible</a></p>
        </section>

        <section id="robusto" className="mb-8">
          <h3 className="text-xl font-bold mb-2">4. Robusto (Robust)</h3>
          <p className="mb-2">El contenido debe ser interpretado correctamente por diferentes tecnologías de asistencia.</p>
          <ul className="list-disc pl-6">
            <li>Código limpio y conforme a estándares.</li>
            <li>Uso apropiado de roles ARIA.</li>
            <li>Compatibilidad con tecnologías actuales y futuras.</li>
          </ul>
          <p className="mt-6">Para más una vista más detallada, visite <a href="https://www.w3.org/TR/WCAG21/#robust" className="text-blue-900 dark:text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"> la documentación oficial del principio Robusto</a></p>
        </section>
      </article>

      <article id="wcag-22" className=" mb-12">
        <h2 className="text-2xl font-semibold mb-2">Novedades en WCAG 2.2</h2>
        <ul className="list-disc pl-6">
          <li>Mejoras en visibilidad del foco.</li>
          <li>Alternativas al drag-and-drop.</li>
          <li>Tamaños y espacios mínimos en componentes interactivos móviles.</li>
          <li>Consistencia en ayudas e instrucciones.</li>
          <li>Autenticación más accesible.</li>
          <li>Reducción de carga cognitiva.</li>
        </ul>
      </article>
    </section>
  )
}

export default Wcag