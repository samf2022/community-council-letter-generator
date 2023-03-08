import React from "react";

const Description = () => {
  return (
    <div className="w-7/12 mx-auto mt-7 bg-white px-6 py-3 leading-8 rounded-lg">
      <h1 className="text-3xl text-center">Instrucciones</h1>
      <ul className="list-disc px-3">
        <li>Debe escribir su nombre completo como aparece en su cédula.</li>
        <li>El número de cédula solo debe constar de números. Ejemplo: 4935094</li>
        <li>
          <strong>Todos los campos son obligatorios.</strong>
        </li>
        <li>La dirección debe estar escrita como aparece en su R.I.F</li>
        <li>
          Antes de guardar la constancia, <strong>verifique sus datos en el visualizador del PDF.</strong>
        </li>
      </ul>
    </div>
  );
};

export default Description;
