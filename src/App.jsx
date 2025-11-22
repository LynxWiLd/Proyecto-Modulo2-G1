import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import DetalleCancion from "./pages/DetalleCancion";
import { useState } from "react";

function App() {
  

  //==== para probar componente <detalleCancion> ------------------------------

  // Recuperar la cadena JSON
  const storedData = JSON.parse(localStorage.getItem('playlistFavorita')) || []
  const [canciones,setCanciones] = useState(storedData)

// ==============================================================================

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes >
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<DetalleCancion canciones={canciones}></DetalleCancion>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
