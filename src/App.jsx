 
import './App.css'
import Actividades from './views/Actividades/Actividades'

function App() {


import { Route, Routes } from "react-router-dom";
import Actividades from "./views/Actividades/Actividades";
import Home from "./views/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Membresias from "./views/Membresias/Membresia";
import "./App.css";
 

function App() {
  return (
 
    <div className='App'> 
      <Actividades/>
    </div>
  )

    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/membresias" element={<Membresias />} />
      </Routes>
    </div>
  );

 
}

export default App;
