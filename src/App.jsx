import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import DetalleCancion from "./pages/DetalleCancion";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes >
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<DetalleCancion></DetalleCancion>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
