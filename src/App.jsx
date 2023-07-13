import { Route, Routes } from "react-router-dom";
import Actividades from "./views/Actividades/Actividades";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Actividades />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
