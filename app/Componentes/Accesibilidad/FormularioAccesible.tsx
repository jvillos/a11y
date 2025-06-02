import React, { useState } from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button
} from "react-aria-components";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

function FormularioAccesible() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data: FormData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string
    };

    setIsInvalid(false);
    setIsSubmitted(true);
    setFormData(data);
  };

  const handleInvalid = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsInvalid(true);
    setIsSubmitted(false);
  };

  const handleReset = () => {
    setIsInvalid(false);
    setIsSubmitted(false);
    setFormData(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md
                   bg-white dark:bg-gray-800
                   text-gray-900 dark:text-gray-100">
      <Form
        onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        onReset={handleReset}
        className="space-y-4"
      >
        {isInvalid && (
          <div 
            role="alert" 
            className="p-4 mb-4 rounded-md
                      bg-red-100 dark:bg-red-900/30
                      border border-red-400 dark:border-red-600
                      text-red-700 dark:text-red-200"
            tabIndex={-1}
          >
            <h3 className="font-bold">Error al enviar</h3>
            <p>Por favor corrige los errores de validación e intenta nuevamente.</p>
          </div>
        )}

        {isSubmitted && formData && (
          <div 
            role="alert" 
            className="p-4 mb-4 rounded-md
                      bg-green-100 dark:bg-green-900/30
                      border border-green-400 dark:border-green-600
                      text-green-700 dark:text-green-200"
          >
            <h3 className="font-bold">¡Formulario enviado con éxito!</h3>
            <p>Datos enviados:</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Nombre: {formData.firstName}</li>
              <li>Apellido: {formData.lastName}</li>
              <li>Email: {formData.email}</li>
            </ul>
          </div>
        )}

        <TextField name="firstName" isRequired className="space-y-1">
          <Label className="block text-sm font-medium
                           text-gray-700 dark:text-gray-300">
            Nombre
          </Label>
          <Input 
            className="w-full px-3 py-2 rounded-md shadow-sm
                      border border-gray-300 dark:border-gray-600
                      bg-white dark:bg-gray-700
                      text-gray-900 dark:text-gray-100
                      focus:outline-none focus:ring-2
                      focus:ring-blue-500 focus:border-blue-500" 
          />
          <FieldError className="text-sm text-red-600 dark:text-red-400" />
        </TextField>

        <TextField name="lastName" isRequired className="space-y-1">
          <Label className="block text-sm font-medium
                           text-gray-700 dark:text-gray-300">
            Apellido
          </Label>
          <Input 
            className="w-full px-3 py-2 rounded-md shadow-sm
                      border border-gray-300 dark:border-gray-600
                      bg-white dark:bg-gray-700
                      text-gray-900 dark:text-gray-100
                      focus:outline-none focus:ring-2
                      focus:ring-blue-500 focus:border-blue-500" 
          />
          <FieldError className="text-sm text-red-600 dark:text-red-400" />
        </TextField>

        <TextField 
          name="email" 
          isRequired 
          type="email"
          className="space-y-1"
        >
          <Label className="block text-sm font-medium
                          text-gray-700 dark:text-gray-300">
            Email
          </Label>
          <Input 
            className="w-full px-3 py-2 rounded-md shadow-sm
                      border border-gray-300 dark:border-gray-600
                      bg-white dark:bg-gray-700
                      text-gray-900 dark:text-gray-100
                      focus:outline-none focus:ring-2
                      focus:ring-blue-500 focus:border-blue-500" 
          />
          <FieldError className="text-sm text-red-600 dark:text-red-400" />
        </TextField>

        <div className="flex gap-3 pt-2">
          <Button 
            type="submit"
            className="px-4 py-2 rounded-md
                      bg-blue-500 dark:bg-blue-600
                      text-white dark:text-gray-100
                      hover:bg-blue-600 dark:hover:bg-blue-700
                      focus:outline-none focus:ring-2
                      focus:ring-blue-500 focus:ring-offset-2
                      dark:focus:ring-offset-gray-800"
          >
            Enviar
          </Button>
          <Button 
            type="reset"
            className="px-4 py-2 rounded-md
                      bg-gray-200 dark:bg-gray-700
                      text-gray-800 dark:text-gray-200
                      hover:bg-gray-300 dark:hover:bg-gray-600
                      focus:outline-none focus:ring-2
                      focus:ring-gray-500 focus:ring-offset-2
                      dark:focus:ring-offset-gray-800"
          >
            Limpiar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormularioAccesible