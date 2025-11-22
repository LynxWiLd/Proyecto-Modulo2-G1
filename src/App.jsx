import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import DetalleCancion from "./pages/DetalleCancion";
import { useState } from "react";

function App() {
  // Usamos una función para calcular el estado inicial UNA SOLA VEZ
  const estadoInicial = () => [{
    id: crypto.randomUUID(),
    tituloCancion: "Yellow",
    artistaGrupo: "ColdPlay",
    categoriaCancion: "Pop",
    imgCancion: "",
    duracionCancion: "4:26",
    urlCancion: "https://www.youtube.com/watch?v=yKNxeF4KMsY"
  }]

  const [arrayDetalleCanciones, setDetalleCanciones] = useState(estadoInicial)



  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes >
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<DetalleCancion arrayDetalleCanciones={arrayDetalleCanciones}></DetalleCancion>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
