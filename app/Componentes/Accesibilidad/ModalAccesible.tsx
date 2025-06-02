import {
  Dialog,
  DialogTrigger,
  Heading,
  Button,
  Modal,
} from "react-aria-components";

function ModalAccesible() {
  return (
    <DialogTrigger>
      <Button
        className=" bg-blue-900 text-white
        px-5 py-3 rounded-md
        inline-block max-w-max
        font-semibold shadow-md
        hover:bg-blue-800 focus:bg-blue-800
        hover:text-yellow-300
        transition duration-150"
      >
        Abrir ventana modal
      </Button>

      <Modal
        isDismissable
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <Dialog
          className="w-full max-w-md p-6 bg-white rounded-xl shadow-xl text-gray-900 dark:bg-gray-800 dark:text-gray-100"
        >
          <Heading slot="title" className="text-xl font-bold mb-2">
            Aviso importante
          </Heading>
          <p className="mb-4">
            Esta es una ventana modal accesible. Puedes cerrarla con Escape o pulsando el botón.
          </p>
          <Button
            slot="close"
            className=" bg-blue-900 text-white
        px-5 py-3 rounded-md
        inline-block max-w-max
        font-semibold shadow-md
        hover:bg-blue-800 focus:bg-blue-800
        hover:text-yellow-300
        transition duration-150"
          >
            Cerrar
          </Button>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

export default ModalAccesible