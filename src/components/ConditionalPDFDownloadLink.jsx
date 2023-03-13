import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const buttonClassNames =
  "px-4 p-2 text-white font-bold shadow-lg bg-[#EBC70C] hover:bg-[#EAB417] rounded transition duration-300 w-full";

const ConditionalPDFDownloadLink = ({ name, document, gender, occupation, isOld, street, civilStatus }) => {
  const isFormIncomplete = !name || !document || !gender || !occupation || !isOld || !street || !civilStatus;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth <= 384 ? (
        <div
          className={`px-4 p-2 text-white text-center font-bold shadow-lg ${
            isFormIncomplete ? "bg-[#EBC759]" : "bg-[#EBC70C] hover:bg-[#EAB417]"
          } rounded transition duration-300 w-full`}
          disabled={isFormIncomplete}
        >
          {isFormIncomplete ? (
            <span>Rellene sus datos</span>
          ) : (
            <PDFDownloadLink
              className=""
              document={
                <MyDocument
                  name={name}
                  document={document}
                  gender={gender}
                  occupation={occupation}
                  isOld={isOld}
                  street={street}
                  civilStatus={civilStatus}
                  houseNumber={houseNumber}
                />
              }
              fileName="test.pdf"
            >
              {({ blob, url, loading, error }) => (loading ? "Cargando..." : "Descargar constancia")}
            </PDFDownloadLink>
          )}
        </div>
      ) : (
        <button type="submit" className={buttonClassNames}>
          Generar constancia
        </button>
      )}
    </>
  );
};

export default ConditionalPDFDownloadLink;
