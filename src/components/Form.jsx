import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [occupation, setOccupation] = useState("");
  const [isOld, setIsOld] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, sethouseNumber] = useState("S/N");
  const [civilStatus, setCivilStatus] = useState("");

  const handleInputChange1 = ({ target }) => {
    const value = target.value.toUpperCase();
    setName(value);
  };

  const handleInputChange2 = ({ target }) => {
    const { value } = target;

    if (value.length <= 8) {
      setDocument(value);
    }
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
    <div className="mt-5 bg-gradient-to-r from-indigo-500 to-blue-500 border rounded-lg shadow-md mx-auto w-10/12 p-5">
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="inputs-container space-y-4">
          <p className="text-white font-bold border-b-2 text-center border-gray-300 text-lg pb-1">Datos personales</p>

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
              placeholder="Ingrese su nombre..."
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
              max="40000000"
              required
              placeholder="Ingrese su cédula..."
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
              placeholder="Ingrese su ocupación..."
            />
          </div>

          <div className="civilStatus-box flex flex-col">
            <label htmlFor="" className="text-white font-bold text-md text-center">
              ¿Cuál es su estado civil?
            </label>
            <div className="civilStatus-options grid grid-cols-3 gap-2" name="civilStatus">
              <div
                onClick={() => handleSelectChange("female")}
                className={`${
                  civilStatus === "female" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } text-center p-2 rounded hover:cursor-pointer`}
              >
                Soltero
              </div>
              <div
                onClick={() => handleSelectChange("male")}
                className={`${
                  civilStatus === "male" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } border-gray-400 text-center p-2 rounded hover:cursor-pointer`}
              >
                Casado
              </div>

              <div
                onClick={() => handleSelectChange("male")}
                className={`${
                  civilStatus === "male" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } border-gray-400 text-center p-2 rounded hover:cursor-pointer`}
              >
                Viudo
              </div>
            </div>
          </div>

          <div className="gender-box flex flex-col">
            <label htmlFor="" className="text-white font-bold text-md text-center">
              Seleccione su género
            </label>
            <div className="gender-options grid grid-cols-2 gap-2" name="gender">
              <div
                onClick={() => handleSelectChange("female")}
                className={`${
                  gender === "female" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } text-center p-2 rounded hover:cursor-pointer`}
              >
                Femenino
              </div>
              <div
                onClick={() => handleSelectChange("male")}
                className={`${
                  gender === "male" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } border-gray-400 text-center p-2 rounded hover:cursor-pointer`}
              >
                Masculino
              </div>
            </div>
          </div>

          <div className="age-box flex flex-col">
            <label htmlFor="" className="text-white font-bold text-md text-center">
              ¿Es mayor de edad?
            </label>
            <div className="age-options grid grid-cols-2 gap-2" name="age">
              <div
                onClick={() => handleInputChange4("yes")}
                className={`${
                  isOld === "yes" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } text-center p-2 rounded hover:cursor-pointer`}
              >
                Sí
              </div>
              <div
                onClick={() => handleInputChange4("no")}
                className={`${
                  isOld === "no" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                }  border-gray-400 text-center p-2 rounded hover:cursor-pointer`}
              >
                No
              </div>
            </div>
          </div>
          <p className="text-white font-bold border-b-2 text-center border-gray-300 text-lg pt-2 pb-1">
            Datos de dirección
          </p>

          <div className="name-box flex flex-col">
            <label htmlFor="name" className="text-white font-bold text-sm">
              Nombre de la calle
            </label>
            <input
              className="p-2 rounded"
              id="name"
              value={name}
              onChange={handleInputChange1}
              type="text"
              required
              placeholder="Ingrese el nombre de la calle..."
            />
          </div>
          <div className="document-box flex flex-col">
            <label htmlFor="document" className="text-white font-bold text-sm flex justify-between">
              <span>N° de casa</span>
              <span className="text-gray-300">(Opcional)</span>
            </label>
            <input
              className="p-2 rounded"
              id="document"
              value={document}
              onChange={handleInputChange2}
              type="number"
              min="1"
              max="40000000"
              placeholder="Ingrese el número de la casa..."
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
              placeholder="Ingrese su ocupación..."
            />
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
