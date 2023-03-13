const Description = () => {
  return (
    <div className="relative w-7/12 mx-auto mt-7 bg-white px-6 py-3 leading-8 rounded-lg">
      <h1 className="text-3xl text-center">Instrucciones</h1>
      {/* <hr className="border-[.14rem] border-orange-300" /> */}
      {/* <button
        onClick={() => onClose()}
        className="absolute top-1 right-2 bg-slate-400 rounded-full px-3 text-white hover:bg-slate-500 font-bold transition duration-300"
      >
        X
      </button> */}
      <ul className="list-disc px-3">
        <li>Escriba su nombre completo tal como aparece en su cédula.</li>
        <li>El número de su cédula debe contener solo números. Ejemplo: 4935094</li>
        <li>
          <strong>Todos los campos del formulario son obligatorios.</strong>
        </li>
        <li>Asegúrese de escribir su dirección como aparece en su R.I.F.</li>
        <li>
          Antes de guardar la constancia, <strong>revise sus datos en el visualizador del PDF.</strong>
        </li>
      </ul>
    </div>
  );
};

export default Description;
