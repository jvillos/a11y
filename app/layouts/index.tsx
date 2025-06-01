import Header from "~/Componentes/Layout/Header";
import Footer from "~/Componentes/Layout/Footer";
import { Outlet } from "react-router";
import { SkipLink } from "~/Componentes/Accesibilidad/SkipLink";

function Index() {
  const backgroundcolor = "bg-blue-900";
  const textcolor = "text-white";

    return (
    <div className="flex flex-col min-h-screen">
      <SkipLink targetId="contenidos" />
      <Header backgroundcolor={backgroundcolor} textcolor={textcolor} />
      <main className="flex-grow mb-7 flex justify-center">
        <div
          id="contenidos"
          tabIndex={-1}
          className="
            max-w-7xl w-full p-4
            bg-gray-300 shadow-lg
            dark:bg-gray-800 dark:shadow-black/50
            min-h-full
          "
        >
          <div className="max-w-4xl mx-auto px-3">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default Index