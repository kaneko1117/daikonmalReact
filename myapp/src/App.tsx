import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { DetailApexData } from "./pages/DetailApexData";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/result" element={<DetailApexData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
