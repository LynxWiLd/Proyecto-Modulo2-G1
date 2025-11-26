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

//EDITAR CANCION
  const editarCancion = (idCancion, cancionEditar) => {
  // 1. Buscar la cancion dentro del array que tiene tal ID y actualizar sus valores
  const cancionesEditadas = canciones.map((itemCancion)=> {
    //buscar el objeto a editar 
    if(itemCancion.idCancion=== idCancion){
      return{
        ...itemCancion,
        ...cancionEditar
      }
    }
    return itemCancion
  })
  setCanciones(cancionesEditadas)
}

const buscarCancion = (idCancion)=>{
  const cancionEncontrada = canciones.find((item)=> item.idCancion === idCancion)
  return cancionEncontrada
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
        <Route path="/editarCancion/:id" element={<FormularioCancion titulo={'Editar Cancion'} editarCancion={editarCancion} buscarCancion={buscarCancion} canciones={canciones}></FormularioCancion>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
