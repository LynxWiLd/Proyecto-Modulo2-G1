import { Routes, Route } from "react-router";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Error404 from "./components/pages/Error404";
import DetalleCancion from "./components/pages/paginaDeDetalle/DetalleCancion";
import { useEffect, useState } from "react";
import FormularioCancion from "./components/shared/FormularioCancion";

function App() {
  //canciones
  const cancionesLocalStorage =
    JSON.parse(localStorage.getItem("cancionesKey")) || [];
  const [canciones, setCanciones] = useState(cancionesLocalStorage);

  useEffect(() => {
    localStorage.setItem("cancionesKey", JSON.stringify(canciones));
  }, [canciones]);

  //CRUD - CREAR CANCION
  const crearCancion = (nuevaCancion) => {
    //crear ID cancion y agregarlo al objeto
    nuevaCancion.idCancion = crypto.randomUUID();

    // agrego la nueva cancion al array que existe
    setCanciones([...canciones, nuevaCancion]);
  };

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/paginaDeDetalle" element={<DetalleCancion canciones={canciones} cancion={cancion}></DetalleCancion>} /> */}
        <Route
          path="/paginaDeDetalle"
          element={<DetalleCancion></DetalleCancion>}
        />
        <Route
          path="/crearCancion"
          element={
            <FormularioCancion
              titulo={"Crear Canción"}
              crearCancion={crearCancion}
              canciones={canciones}
            ></FormularioCancion>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
