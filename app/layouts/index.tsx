import Header from "~/Componentes/Layout/Header";
import Footer from "~/Componentes/Layout/Footer";
import { Outlet } from "react-router";

function Index() {
  const backgroundcolor = "bg-blue-900";
  const textcolor = "text-white";

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header backgroundcolor={backgroundcolor} textcolor={textcolor} />
        <main className="w-full mx-auto mb-7 flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Index