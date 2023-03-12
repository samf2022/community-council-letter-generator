import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import Description from "./components/Description";
import Form from "./components/Form";
import Modal from "./components/Modal";
import MyDocument from "./components/MyDocument";

function App() {
  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSubmit = (values) => {
    setData(values);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const formattedNumber = Number(data.document).toLocaleString("en-US");

  return (
    // The onClick event on the parent div is to close the modal when clicking anywhere on the page.
    <div className="bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300" onClick={onCloseModal}>
      <Modal isOpen={isModalOpen}>
        <Description onClose={onCloseModal} />
      </Modal>
      <h2 className="text-center text-2xl pt-3 font-bold">Generador de constancias</h2>

      <Form onSubmit={handleSubmit} />
      <PDFViewer className="mx-auto mt-5" height="750px" width="70%">
        <MyDocument
          name={data.name}
          document={formattedNumber}
          gender={data.gender}
          occupation={data.occupation}
          isOld={data.isOld}
        />
      </PDFViewer>
    </div>
  );
}

export default App;
