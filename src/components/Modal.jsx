const Modal = ({ children, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={`fixed z-50 top-0 left-0 w-screen h-screen bg-black/75 `}>
          <div className={`relative top-52 ${isOpen ? "slide-down" : ""}`}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
