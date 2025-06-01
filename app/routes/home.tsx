import type { Route } from "./+types/home";
import SkipLinkInside from "~/Componentes/Accesibilidad/SkipLinkInside";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Accesibilidad web" },
    { name: "description", content: "Aprende sobre accesibilidad web" },
  ];
}

export default function Home() {
  return (
    <>
      <section
        className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/imagenes/imagen1.avif')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true" />

        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Accesibilidad Web: Más que una Norma, un Derecho
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Aprende a implementar las WCAG 2.1 con ejemplos prácticos. Haz que tu sitio web sea usable para todos y cumple con la nueva legislación europea.
          </p>
          <Link
            to="/wcag"
            className="inline-block px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-medium transition"
          >
            Comienza Ahora
          </Link>
        </div>
      </section>
      <div className="max-w-4xl my-7 mx-auto px-3">
        <h2 className="mb-4 font-bold">Salta a una sección</h2>
        <nav className="mb-10">
          <ul className="flex flex-wrap gap-x-6 gap-y-4">
            <li>
              <SkipLinkInside href="#accesibilidad" label="Accesibilidad" />
            </li>
            <li>
              <SkipLinkInside href="#wcag" label="WCAG 2.1" />
            </li>
          </ul>
        </nav>

        <section id="accesibilidad" className="mt-16 scroll-mt-28" tabIndex={-1}>
          <h2 className="text-2xl font-semibold mb-4">Por qué la accesibilidad web no puede esperar</h2>
          <p className="mb-6 text-lg leading-relaxed">
            En la era digital, el acceso a la información es un derecho fundamental, pero millones de personas enfrentan barreras invisibles al navegar por la web. 1 de cada 5 usuarios encuentra dificultades debido a:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li>Discapacidades visuales: requieren lectores de pantalla y buen contraste.</li>
            <li>Limitaciones motoras: navegan por teclado o voz.</li>
            <li>Problemas auditivos: necesitan subtítulos o transcripciones.</li>
            <li>Dificultades cognitivas: prefieren diseño claro y lenguaje sencillo.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">El costo de ignorar la accesibilidad</h3>
          <ul className="list-disc ml-6 mb-8">
            <li><strong>Exclusión legal y social:</strong> La ONU exige accesibilidad digital como derecho.</li>
            <li><strong>Pérdida de clientes:</strong> Un sitio inaccesible pierde hasta el 20% de su audiencia.</li>
            <li><strong>Sanciones económicas:</strong> Las multas pueden superar los 50.000 € por incumplimiento.</li>
          </ul>
        </section>

        <section id="wcag" className="mt-16 scroll-mt-28" tabIndex={-1}>
          <h2 className="text-2xl font-semibold mb-4">¿Qué son las WCAG 2.1?</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Las Pautas de Accesibilidad para el Contenido Web (WCAG) son el estándar internacional creado por el W3C, basado en 4 principios fundamentales:
          </p>
          <ul className="list-disc ml-6 mb-8">
            <li><strong>Perceptible:</strong> Información accesible a todos los sentidos (texto alternativo, descripciones de audio).</li>
            <li><strong>Operable:</strong> Interfaces funcionales sin ratón, sin flashes peligrosos, con navegación por teclado.</li>
            <li><strong>Comprensible:</strong> Contenido predecible, legible y con ayuda contextual (ej. formularios claros).</li>
            <li><strong>Robusto:</strong> Compatible con tecnologías actuales y futuras (HTML válido, ARIA bien aplicado).</li>
          </ul>
          <p className="mb-4">
            <strong>Objetivo de esta guía:</strong> Facilitar tu adaptación a la normativa con ejemplos visuales, componentes reutilizables y herramientas gratuitas, porque la accesibilidad no es un obstáculo técnico, sino una oportunidad para innovar y llegar a más personas.
          </p>
        </section>

      </div>
    </>
  );
}
