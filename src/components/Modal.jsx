import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <article className="fixed z-50 top:0 left: 0 w-screen h-screen bg-black/75 ">
      <div className="modal-container">
        <button onClick={() => onClose()} className="modal-close">
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
