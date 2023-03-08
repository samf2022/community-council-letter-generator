import { React, useState } from "react";

const Form = ({ onSubmit }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos al componente padre
    onSubmit({
      input1,
      input2,
    });
    // Reiniciar los inputs
    setInput1("");
    setInput2("");
  };
  return (
    <div className="mt-5">
      <h2 className="text-center font-serif text-4xl">Generador de constancias de residencia</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <div className="inputs">
          <input
            value={input1}
            onChange={handleInputChange1}
            className="text-center border rounded p-1 mt-3"
            type="text"
            required
            placeholder="Nombre"
          />
          <input
            value={input2}
            onChange={handleInputChange2}
            className="text-center border rounded ml-3 p-1"
            type="text"
            required
            placeholder="Cédula"
          />
        </div>
        <button type="submit" className="px-4 p-2  font-bold bg-red-300 rounded m-4">
          Generar Constancia
        </button>
      </form>
    </div>
  );
};

export default Form;
