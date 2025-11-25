import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import DetalleCancion from "./pages/paginaDeDetalle/DetalleCancion";
import FormularioCancion from "./pages/paginaDeAdministrador/FormularioCancion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
        {/* <Route path="/paginaDeDetalle" element={<DetalleCancion canciones={canciones} cancion={cancion}></DetalleCancion>} /> */}
        <Route path="/paginaDeDetalle" element={<DetalleCancion></DetalleCancion>} />
        <Route path="/crearCancion" element={<FormularioCancion></FormularioCancion>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
