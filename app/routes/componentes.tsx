import FormularioAccesible from "~/Componentes/Accesibilidad/FormularioAccesible";
import SkipLinkInside from "~/Componentes/Accesibilidad/SkipLinkInside";
import Toggle from "~/Componentes/Accesibilidad/Toggle";

function ComponentesAccesibles() {
  return (
    <div className="max-w-4xl my-10 mx-auto px-3">
      <section className="max-w-4xl mx-auto p-6 text-gray-900 dark:text-gray-100">
        <h1 className="mb-4 font-bold">Salta a las distintas secciones</h1>
        <nav className="mb-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-4">
            <li>
              <SkipLinkInside href="#skip-link" label="Skip Link" />
            </li>
            <li>
              <SkipLinkInside href="#dropdown" label="Dropdown Accesible" />
            </li>
            <li>
              <SkipLinkInside href="#carrusel" label="Carrusel" />
            </li>
            <li>
              <SkipLinkInside href="#formulario" label="Formulario Accesible" />
            </li>
            <li>
              <SkipLinkInside href="#toggle-group" label="Toggle Group" />
            </li>
            <li>
              <SkipLinkInside href="#modal" label="Modal Accesible" />
            </li>
          </ul>
        </nav>


        <h1 className="text-3xl font-bold mb-6">
          Componentes Accesibles con React Aria
        </h1>

        <p className="mb-8 text-lg leading-relaxed">
          Una vez establecida la infraestructura base del proyecto, se procedió
          a la creación de los principales componentes de la interfaz,
          priorizando la accesibilidad y la reutilización. Se optó por una
          arquitectura basada en componentes <strong>headless</strong>, los
          cuales proporcionan únicamente la lógica y el comportamiento
          accesible, dejando el control total del diseño visual al desarrollador.
        </p>

        <p className="mb-8 text-lg leading-relaxed">
          Para garantizar una accesibilidad adecuada, se integró la biblioteca
          <strong> react-aria</strong>, que ofrece utilidades específicas para
          gestionar correctamente aspectos como el foco, los roles ARIA, los
          estados de accesibilidad y la navegación por teclado, cumpliendo con
          los estándares definidos por las WCAG.
        </p>

        <div className="space-y-12">
          <article id="skip-link" className="mt-16 scroll-mt-28" tabIndex={-1}>
            <h2 className="text-2xl font-semibold mb-4">Skip Link</h2>
            <p className="mb-4">
              Un enlace inicialmente invisible que aparece cuando el usuario
              comienza a navegar con el teclado. Su objetivo es permitir saltar
              directamente al contenido principal o a otras zonas de la página, mejorando la experiencia de
              usuarios con movilidad reducida o que navegan sin ratón. No se recomienda usar más de dos en el mismo lugar
            </p>
            <p className="italic mb-6 text-blue-700 dark:text-blue-400">
              ¡Recarga la página y prueba a navegar con la tecla Tab para encontrarme!
            </p>
            
          </article>


          <article id="formulario" className="mt-16 scroll-mt-28" tabIndex={-1}>
            <h2 className="text-2xl font-semibold mb-4">Formulario Accesible</h2>
            <p className="mb-4">
              Este formulario incluye validaciones claras y mensajes de error
              comprensibles. Utiliza foco automático para ayudar al usuario a
              corregir los campos y garantiza que todos los controles sean
              utilizables mediante teclado.
            </p>
            <p className="italic mb-6 text-blue-700 dark:text-blue-400">
              ¡Intenta enviar el formulario vacío para ver la validación!
            </p>
            <FormularioAccesible />
          </article>


          <article id="toggle-group" className="mt-16 scroll-mt-28" tabIndex={-1}>
            <h2 className="text-2xl font-semibold mb-4">Toggle Group</h2>
            <p className="mb-4">
              Un conjunto de botones tipo toggle que permite cambiar el estilo
              del texto (negrita, cursiva o subrayado), totalmente navegable por
              teclado y con indicaciones claras de estado seleccionado.
            </p>
            <p className="italic mb-6 text-blue-700 dark:text-blue-400">
              ¡Cámbiame con las teclas y mira cómo se aplica el estilo!
            </p>
            <Toggle />
          </article>

          {/* MODAL */}
          <article id="modal" className="mt-16 mb-16 scroll-mt-28" tabIndex={-1}>
            <h2 className="text-2xl font-semibold mb-4">Modal Accesible</h2>
            <p className="mb-4">
              Una ventana emergente que atrapa el foco (focus trap) para que el
              usuario no pueda salir de ella accidentalmente. Se puede cerrar
              con la tecla Escape o haciendo clic fuera del contenido.
            </p>
            <p className="italic mb-6 text-blue-700 dark:text-blue-400">
              ¡Ábreme y navega solo con el teclado para ver cómo se gestiona el foco!
            </p>
            <div className="border border-dashed border-gray-400 p-4 rounded">
              {/* <AccessibleModal /> */}
              <span className="text-sm text-gray-500">[Aquí va el componente Modal]</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default ComponentesAccesibles;
