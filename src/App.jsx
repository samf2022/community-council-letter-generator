import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./components/MyDocument";

function App() {
  return (
    <PDFViewer className="mx-auto" width="50%">
      <MyDocument />
    </PDFViewer>
  );
}

export default App;
