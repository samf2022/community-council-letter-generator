import React from "react";

const Modal = ({ children }) => {
  return (
    <article className="fixed z-50 top:0 left: 0 w-screen h-screen bg-black/75 ">
      <div className="modal">{children}</div>
    </article>
  );
};

export default Modal;
