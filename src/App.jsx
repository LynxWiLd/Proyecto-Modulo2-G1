import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import ProtectorRutas from "./components/routes/ProtectorRutas";

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

  const usuarioSessionStorage =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);

  const adminLocalStorage = JSON.parse(localStorage.getItem("adminKey")) || [];
  const [servicios, setServicios] = useState(adminLocalStorage);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  useEffect(() => {
    localStorage.setItem("adminKey", JSON.stringify(servicios));
  }, [servicios]);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
        />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectorRutas usuarioLogueado={usuarioLogueado} />}>
          <Route
            path="/administracion"
            element={<div>Administración (Ruta Protegida)</div>}
          />
        </Route>

        <Route path="/paginaDeDetalle" element={<DetalleCancion />} />
        <Route
          path="/crearCancion"
          element={
            <FormularioCancion
              titulo={"Crear Canción"}
              crearCancion={crearCancion}
              canciones={canciones}
            />
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
