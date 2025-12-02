import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Error404 from "./components/pages/Error404";
import DetalleCancion from "./components/pages/DetalleCancion";
import { useEffect, useState } from "react";
import FormularioCancion from "./components/pages/FormularioCancion";
import ProtectorRutas from "./components/routes/ProtectorRutas";
import Administracion from "./components/pages/Administracion";

function App() {
  const usuarioSessionStorage =
    JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  //LocalStorage de las canciones
  const songLocalStorage = JSON.parse(localStorage.getItem("adminKey")) || [];
  const [canciones, setCanciones] = useState(songLocalStorage);
  useEffect(() => {
    localStorage.setItem("adminKey", JSON.stringify(canciones));
  }, [canciones]);

  const crearCancion = (nuevaSong) => {
    nuevaSong.id = crypto.randomUUID();
    setCanciones([...canciones, nuevaSong]);
  };

  const editarCancion = (idSong, nuevaSong) => {
    const songEditado = canciones.map((song) => {
      if (song.id === idSong) {
        return { ...song, ...nuevaSong };
      }
      return song;
    });
    setCanciones(songEditado);
  };

  const eliminarCancion = (id) => {
    const songFiltrado = canciones.filter((song) => song.id !== id);
    setCanciones(songFiltrado);
  };

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />

      <Routes>
        <Route path="/" element={<Home canciones={canciones} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/detalle/:id"
          element={<DetalleCancion canciones={canciones} />}
        />

        {/* RUTAS PROTEGIDAS */}
        <Route
          path="/administracion"
          element={<ProtectorRutas usuarioLogueado={usuarioLogueado} />}
        >
          <Route
            index
            element={
              <Administracion
                canciones={canciones}
                eliminarCancion={eliminarCancion}
              ></Administracion>
            }
          />
          <Route
            path="crearCancion"
            element={
              <FormularioCancion
                titulo="Crear Canción"
                crearCancion={crearCancion}
              />
            }
          />
          <Route
            path="editarCancion"
            element={
              <FormularioCancion
                titulo="Editar Canción"
                editarCancion={editarCancion}
              />
            }
          />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
