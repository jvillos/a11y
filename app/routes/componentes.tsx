import Button from "~/Componentes/Accesibilidad/Button";

function Componentes() {
  return (
    <Button
        text="Click me"
        variant="default"
        onClick={() => {
          alert('¡Botón pulsado!');
        }}
      />
  )
}

export default Componentes