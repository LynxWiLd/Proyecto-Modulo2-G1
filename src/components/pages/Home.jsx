import { Container, Dropdown, Row, Button } from "react-bootstrap";
import { FaFilter, FaMusic, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SongCard from "../services/SongCard";
import "../styles/home.css";

// Recibe la lista de canciones como prop 'canciones' (la lista completa)
const Home = ({ canciones }) => {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState("Todas");

  const categorias = [
    "Rock",
    "Pop",
    "Electrónica",
    "Cuarteto",
    "Rap",
    "Folclore",
    "Reggae",
    "Clásica",
    "Tango",
    "Jazz",
    "Blues",
    "Country",
  ];

  // Filtra las canciones usando la prop 'canciones'. Usamos 'canciones || []' para evitar errores si 'canciones' es undefined.
  const cancionesFiltradas =
    categoria === "Todas"
      ? canciones || []
      : // Usamos c.categoriaCancion si ese es el nombre de la propiedad en tus objetos
        (canciones || []).filter((c) => c.categoriaCancion === categoria);

  const handleRegister = () => navigate("/register");

  return (
    <Container className="mt-5 p-4 text-white">
      <h1 className="text-center mb-4">
        <FaMusic className="me-2" /> Explora Música
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
            <SongCard key={song.id} canciones={song} />
          ))}
        </Row>
      </div>

      {/* CREA TU CUENTA */}
      <section className="home-create-account">
        <h4 className="mb-3">
          <FaUserPlus /> Crea tu cuenta ahora
        </h4>

        <p>
          Regístrate gratis para guardar favoritos, crear playlists y recibir
          recomendaciones personalizadas.
        </p>

        <Button className="home-register-btn" onClick={handleRegister}>
          Crear Cuenta
        </Button>
      </section>
    </Container>
  );
};

export default Home;
