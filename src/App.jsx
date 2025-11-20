// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AdminSongs from "./pages/AdminSongs";

// Usuario de prueba (admin)
const fakeUser = {
  name: "Jose",
  role: "admin", // 👈 así AdminSongs te deja entrar
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Página de administración (solo admin) */}
        <Route path="/admin" element={<AdminSongs user={fakeUser} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
