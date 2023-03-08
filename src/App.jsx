import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import Description from "./components/Description";
import Form from "./components/Form";
import MyDocument from "./components/MyDocument";

function App() {
  const [data, setData] = useState({});

  const handleSubmit = (values) => {
    setData(values);
  };

  const formattedNumber = Number(data.input2).toLocaleString("en-US");

  return (
    <div className="bg-slate-300 p-5">
      <h2 className="text-center font-serif text-4xl">Generador de constancias de residencia</h2>
      <Description />
      <Form onSubmit={handleSubmit} />
      <PDFViewer className="mx-auto mt-5" height="750px" width="70%">
        <MyDocument input1={data.input1} input2={formattedNumber} />
      </PDFViewer>
    </div>
  );
}

export default App;
