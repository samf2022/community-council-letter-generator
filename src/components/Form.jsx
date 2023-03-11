import { React, useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [occupation, setOccupation] = useState("");
  const [isOld, setIsOld] = useState(false);
  const [sex, setSex] = useState("female");

  const handleInputChange1 = ({ target }) => {
    const value = target.value.toUpperCase();
    setName(value);
  };

  const handleInputChange2 = ({ target }) => {
    const value = target.value;
    const pattern = /^[0-9]*$/;

    if (pattern.test(value)) {
      setDocument(value);
    }
  };

  const handleInputChange3 = ({ target }) => {
    const value = target.value;
    setOccupation(value);
  };

  const handleInputChange4 = () => {
    setIsOld(() => !isOld);
  };

  const handleSelectChange = (event) => {
    setSex(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar los datos al componente padre
    onSubmit({
      name,
      document,
      sex,
      occupation,
      isOld,
    });
    // Reiniciar los inputs
    setName("");
    setDocument("");
    setOccupation("");
    setSex("female");
    setIsOld(false);
  };
  return (
    <div className="mt-5 bg-[#6b7be7f5] border rounded-lg shadow-md mx-auto w-7/12">
      <h2 className="text-center p-3 text-2xl text-white">Ingrese sus datos</h2>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <div className="inputs grid grid-cols-3 gap-4  ">
          <input
            value={name}
            onChange={handleInputChange1}
            className="text-center border rounded "
            type="text"
            required
            placeholder="Nombre"
          />
          <input
            value={document}
            onChange={handleInputChange2}
            className="text-center border rounded "
            type="text"
            required
            placeholder="Cédula"
          />
          <input
            value={occupation}
            onChange={handleInputChange3}
            className="text-center border rounded "
            type="text"
            required
            placeholder="Ocupación"
          />
          <select required className=" border rounded" name="sex" value={sex} onChange={handleSelectChange}>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
          </select>

          <div className="checkbox col-span-2">
            <label className="text-white align-middle font-bold" htmlFor="age">
              Marque la cajita si es mayor de 18 años
            </label>
            <input className="scale-150 ml-5 align-middle" id="age" type="checkbox" onChange={handleInputChange4} />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 p-2 text-white font-bold  bg-[#EBC70C] hover:bg-[#EAB417] rounded m-4 transition duration-300"
        >
          Generar Constancia
        </button>
      </form>
    </div>
  );
};

export default Form;
