import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accesibilidad web" },
    { name: "description", content: "Aprende sobre accesibilidad web" },
  ];
}

export default function Home() {
  return (
    <div className="vh-full">HOME</div>
  );
}
