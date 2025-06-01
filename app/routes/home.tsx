import type { Route } from "./+types/home";
import Button from "~/Componentes/Accesibilidad/Button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Accesibilidad web" },
    { name: "description", content: "Aprende sobre accesibilidad web" },
  ];
}

export default function Home() {
  return (
    <div className="vh-full">
      <Button
        text="Click me"
        variant="default"
        onClick={() => {
          alert('¡Botón pulsado!');
        }}
      />
    </div>
  );
}
