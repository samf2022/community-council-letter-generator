import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import Form from "./components/Form";
import MyDocument from "./components/MyDocument";

function App() {
  const [data, setData] = useState({});
  const handleSubmit = (values) => {
    setData(values);
  };

  const numeroFormateado = Number(data.input2).toLocaleString().replace(/,/g, ".");

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <PDFViewer className="mx-auto" width="70%">
        <MyDocument input1={data.input1} input2={numeroFormateado} />
      </PDFViewer>
    </>
  );
}

export default App;
