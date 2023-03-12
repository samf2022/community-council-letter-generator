import { React, useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [occupation, setOccupation] = useState("");
  const [isOld, setIsOld] = useState("");
  const [gender, setGender] = useState("");

  const handleInputChange1 = ({ target }) => {
    const value = target.value.toUpperCase();
    setName(value);
  };

  const handleInputChange2 = ({ target }) => {
    const value = target.value;

    setDocument(value);
  };

  const handleInputChange3 = ({ target }) => {
    const value = target.value;
    setOccupation(value);
  };

  const handleInputChange4 = (value) => {
    setIsOld(value);
  };

  const handleSelectChange = (value) => {
    setGender(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!gender) {
      alert("Por favor, seleccione su género.");
    }

    if (!isOld) {
      alert("Por favor, indique si es mayor de edad o no.");
    }
    // Enviar los datos al componente padre
    onSubmit({
      name,
      document,
      gender,
      occupation,
      isOld,
    });
    // Reiniciar los inputs
    setName("");
    setDocument("");
    setOccupation("");
    setGender("");
    setIsOld("");
  };
  return (
    <div className="mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 border rounded-lg shadow-md mx-auto w-10/12 p-5">
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="inputs-container space-y-4">
          <div className="name-box flex flex-col">
            <label htmlFor="name" className="text-white font-bold text-sm">
              Nombre
            </label>
            <input
              className="p-2 rounded"
              id="name"
              value={name}
              onChange={handleInputChange1}
              type="text"
              required
              placeholder="Nombre"
            />
          </div>
          <div className="document-box flex flex-col">
            <label htmlFor="document" className="text-white font-bold text-sm">
              Cédula
            </label>
            <input
              className="p-2 rounded"
              id="document"
              value={document}
              onChange={handleInputChange2}
              type="number"
              min="1"
              max="40999999"
              required
              placeholder="Cédula"
            />
          </div>
          <div className="occupation-box flex flex-col">
            <label htmlFor="occupation" className="text-white font-bold text-sm">
              Ocupación
            </label>
            <input
              className="p-2 rounded"
              id="occupation"
              value={occupation}
              onChange={handleInputChange3}
              type="text"
              required
              placeholder="Ocupación"
            />
          </div>
          <div className="gender-box flex flex-col">
            <label htmlFor="" className="text-white font-bold text-md text-center">
              Seleccione su género
            </label>
            <div className="gender-options grid grid-cols-2" name="gender">
              <div
                onClick={() => handleSelectChange("female")}
                className={`${
                  gender === "female" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } text-center p-2 rounded`}
              >
                Femenino
              </div>
              <div
                onClick={() => handleSelectChange("male")}
                className={`${
                  gender === "male" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } bg-white border-l-2 border-gray-400 text-center p-2 rounded`}
              >
                Masculino
              </div>
            </div>
          </div>
          {/* active:bg-yellow-400 active:text-white active:font-bold */}
          <div className="age-box flex flex-col">
            <label htmlFor="" className="text-white font-bold text-md text-center">
              ¿Es mayor de edad?
            </label>
            <div className="age-options grid grid-cols-2" name="age">
              <div
                onClick={() => handleInputChange4("yes")}
                className={`${
                  isOld === "yes" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } text-center p-2 rounded`}
              >
                Sí
              </div>
              <div
                onClick={() => handleInputChange4("no")}
                className={`${
                  isOld === "no" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } bg-white border-l-2 border-gray-400 text-center p-2 rounded`}
              >
                No
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 p-2 text-white font-bold shadow-lg  bg-[#EBC70C] hover:bg-[#EAB417] rounded transition duration-300 w-full"
        >
          Generar Constancia
        </button>
      </form>
    </div>
  );
};

export default Form;
