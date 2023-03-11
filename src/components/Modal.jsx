import { React, useEffect, useState } from "react";

const Modal = ({ children, isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isOpen && (
        <div className={`fixed z-50 top-0 left-0 w-screen h-screen bg-black/75 `}>
          <div className={`relative top-52 ${isMounted ? "slide-down" : ""}`}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
