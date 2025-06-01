import Header from "~/Componentes/Layout/Header";
import Footer from "~/Componentes/Layout/Footer";
import { Outlet } from "react-router";
import { SkipLink } from "~/Componentes/Accesibilidad/SkipLink";

function Index() {
  const backgroundcolor = "bg-blue-900";
  const textcolor = "text-white";

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SkipLink targetId="contenidos" />
        <Header backgroundcolor={backgroundcolor} textcolor={textcolor} />
        <main id="contenidos" className="w-full mx-auto mb-7 flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Index