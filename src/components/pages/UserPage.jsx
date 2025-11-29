import { Container, Dropdown, Row, Button } from "react-bootstrap";
import { FaFilter, FaMusic, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../routes/AuthContext";
import SongCard from "../services/SongCard";
import "../styles/home.css"; // IMPORTANTE

const UserPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const [categoria, setCategoria] = useState("Todas");
  const categorias = ["Rock", "Pop", "Electrónica", "Cuarteto", "Rap"];

  const [favoritos, setFavoritos] = useState([]);

  const canciones = [
    { id: 1, nombre: "Tema 1", categoria: "Rock" },
    { id: 2, nombre: "Tema 2", categoria: "Pop" },
    { id: 3, nombre: "Tema 3", categoria: "Cuarteto" },
    { id: 4, nombre: "Tema 4", categoria: "Rock" },
    { id: 5, nombre: "Tema 5", categoria: "Electrónica" },
    { id: 6, nombre: "Tema 6", categoria: "Rap" },
  ];

  const cancionesFiltradas =
    categoria === "Todas"
      ? canciones
      : canciones.filter((c) => c.categoria === categoria);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleRegister = () => navigate("/register");

  return (
    <Container className="mt-5 p-4 text-white">

      <h1 className="text-center mb-4">
        <FaMusic className="me-2" /> UserPAGE
      </h1>

      {/* FILTRO */}
      <div className="home-filter-container">
        <Dropdown>
          <Dropdown.Toggle className="home-filter-toggle" variant="dark">
            <FaFilter className="me-2" /> Filtrar: {categoria}
          </Dropdown.Toggle>

          <Dropdown.Menu className="home-filter-menu">
            <Dropdown.Item onClick={() => setCategoria("Todas")}>
              Todas
            </Dropdown.Item>

            {categorias.map((cat) => (
              <Dropdown.Item key={cat} onClick={() => setCategoria(cat)}>
                {cat}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* CARDS */}
      <div className="home-cards-glass">
        <Row className="g-4">
          {cancionesFiltradas.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              isFavorite={favoritos.includes(song.id)}
              toggleFavorito={toggleFavorito}
            />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default UserPage;
