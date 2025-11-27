import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import DetalleCancion from "./pages/paginaDeDetalle/DetalleCancion";
import { useEffect, useState } from 'react'
import FormularioCancion from "./pages/paginaDeAdministrador/FormularioCancion";


function App() {
  //canciones
  const cancionesLocalStorage = JSON.parse(localStorage.getItem('cancionesKey')) || []
  const [canciones, setCanciones] = useState(cancionesLocalStorage)


  useEffect(() => {
    localStorage.setItem('cancionesKey', JSON.stringify(canciones))
  }, [canciones])

  //CRUD - CREAR CANCION
  const crearCancion = (nuevaCancion) => {

    //crear ID cancion y agregarlo al objeto
    nuevaCancion.idCancion = crypto.randomUUID()

    // agrego la nueva cancion al array que existe
    setCanciones([...canciones, nuevaCancion])

  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/paginaDeDetalle" element={<DetalleCancion canciones={canciones} cancion={cancion}></DetalleCancion>} /> */}
        <Route path="/paginaDeDetalle" element={<DetalleCancion></DetalleCancion>} />
        <Route path="/crearCancion" element={<FormularioCancion titulo={'Crear Canción'} crearCancion={crearCancion} canciones={canciones}></FormularioCancion>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
