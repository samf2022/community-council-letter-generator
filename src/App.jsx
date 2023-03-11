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
    <div className="" onClick={onCloseModal}>
      <Modal isOpen={isModalOpen}>
        <Description onClose={onCloseModal} />
      </Modal>
      <h2 className="text-center font-serif text-4xl">Generador de constancias</h2>

      <Form onSubmit={handleSubmit} />
      <PDFViewer className="mx-auto mt-5" height="750px" width="70%">
        <MyDocument
          name={data.name}
          document={formattedNumber}
          sex={data.sex}
          occupation={data.occupation}
          isOld={data.isOld}
        />
      </PDFViewer>
    </div>
  );
}

export default App;
