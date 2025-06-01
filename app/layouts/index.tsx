import Header from "~/Componentes/Layout/Header";
import Footer from "~/Componentes/Layout/Footer";
import { Outlet } from "react-router";
import { SkipLink } from "~/Componentes/Accesibilidad/SkipLink";

function Index() {
  const backgroundcolor = "bg-indigo-900";
  const textcolor = "text-white";

  return (
    <div className="flex flex-col min-h-screen">
        <SkipLink targetId="contenidos" />
        <SkipLink targetId="footer" label="Saltar al footer" />

      <Header backgroundcolor={backgroundcolor} textcolor={textcolor} />
      <main className="flex-grow flex justify-center">
        <div
          id="contenidos"
          tabIndex={-1}
          className="
            max-w-7xl w-full
            bg-gray-200 shadow-lg
            dark:bg-gray-800 dark:shadow-black/50
            min-h-full
          "
        >
          <Outlet />
        </div>
      </main>
      <Footer backgroundcolor={backgroundcolor} textcolor={textcolor} />
    </div>
  );
}


export default Index