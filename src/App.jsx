import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from "./pages/MainClient";
import Developer from "./pages/Maindev";
import Landing from "./pages/landing/Landing";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/client" element={<Client />} />
        <Route path="/developer" element={<Developer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
