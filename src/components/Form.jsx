import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [occupation, setOccupation] = useState("");
  const [isOld, setIsOld] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, sethouseNumber] = useState("");
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

  const handleInputChange5 = ({ target }) => {
    const value = target.value;
    setStreet(value);
  };

  const handleInputChange6 = ({ target }) => {
    const value = target.value;

    if (value.length <= 3) {
      sethouseNumber(value);
    }
  };

  const handleSelectChange = (value) => {
    setGender(value);
    setCivilStatus("");
  };

  const handleCivilStatus = (value) => {
    setCivilStatus(value);
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
      street,
      houseNumber,
      civilStatus,
    });
    // Reiniciar los inputs
    setName("");
    setDocument("");
    setOccupation("");
    setGender("");
    setIsOld("");
    setStreet("");
    sethouseNumber("");
    setCivilStatus("");
  };

  return (
    <div
      className={`${
        gender === "female"
          ? "bg-gradient-to-r from-fuchsia-500 to-pink-500"
          : gender === "male"
          ? "bg-gradient-to-r from-cyan-500 to-blue-500"
          : "bg-gray-500"
      } mt-5 rounded-md shadow-md mx-auto w-10/12 `}
    >
      <div className="gender-box flex flex-col">
        <div className="gender-options grid grid-cols-2 gap-0.5" name="gender">
          <div
            onClick={() => handleSelectChange("female")}
            className={`${
              gender === "female"
                ? "bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold shadow-[inset_0_-1px_5px_rgba(0,0,0,0.6)] bottom-0.5"
                : "bg-white"
            } text-center text-xl p-4 rounded-tl-md  hover:cursor-pointer relative hover:bottom-0.5 hover:bg-gradient-to-r from-pink-400 to-pink-600 hover:text-white hover:font-bold transition duration-300`}
          >
            👩
          </div>
          <div
            onClick={() => handleSelectChange("male")}
            className={`${
              gender === "male"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold shadow-[inset_0_-1px_5px_rgba(0,0,0,0.6)] bottom-0.5"
                : "bg-white"
            }  rounded-tr-md text-center text-xl p-4 relative hover:cursor-pointer hover:bottom-0.5 hover:bg-gradient-to-r from-blue-500 to-blue-600 hover:text-white hover:font-bold transition duration-300`}
          >
            👨
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-7 p-4">
        <div className="inputs-container space-y-4">
          <p className="text-white font-bold border-b-2 text-center border-gray-300 text-xl pb-1">Datos personales</p>

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
                onClick={() => handleCivilStatus(gender == "female" ? "soltera" : "soltero")}
                className={`${
                  civilStatus === "soltera" || civilStatus === "soltero"
                    ? "bg-yellow-400 text-white font-bold"
                    : "bg-white"
                } text-center p-2 rounded hover:cursor-pointer`}
              >
                {gender === "female" ? "Soltera" : "Soltero"}
              </div>
              <div
                onClick={() => handleCivilStatus(gender === "female" ? "casada" : "casado")}
                className={`${
                  civilStatus === "casada" || civilStatus === "casado"
                    ? "bg-yellow-400 text-white font-bold"
                    : "bg-white"
                } border-gray-400 text-center p-2 rounded hover:cursor-pointer`}
              >
                {gender === "female" ? "Casada" : "Casado"}
              </div>

              <div
                onClick={() => handleCivilStatus(gender === "female" ? "viuda" : "viudo")}
                className={`${
                  civilStatus === "viuda" || civilStatus === "viudo" ? "bg-yellow-400 text-white font-bold" : "bg-white"
                } border-gray-400 text-center p-2 rounded hover:cursor-pointer`}
              >
                {gender === "female" ? "Viuda" : "Viudo"}
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
          <p className="text-white font-bold border-b-2 text-center border-gray-300 text-xl pt-2 pb-1">
            Datos de domicilio
          </p>

          <div className="street-box flex flex-col">
            <label htmlFor="street" className="text-white font-bold text-sm">
              Nombre de la calle
            </label>
            <input
              className="p-2 rounded"
              id="street"
              value={street}
              onChange={handleInputChange5}
              type="text"
              required
              placeholder="Ingrese el nombre de la calle..."
            />
          </div>
          <div className="houseNumber-box flex flex-col">
            <label htmlFor="houseNumber" className="text-white font-bold text-sm flex justify-between">
              <span>N° de casa</span>
              <span className="text-gray-100">(Opcional)</span>
            </label>
            <input
              className="p-2 rounded"
              id="houseNumber"
              value={houseNumber}
              onChange={handleInputChange6}
              type="number"
              min="1"
              max="500"
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
