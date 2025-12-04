import { Container, Dropdown, Row, Button } from "react-bootstrap";
import { FaFilter, FaMusic, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SongCard from "../services/SongCard";
import "../styles/home.css";

const Home = ({ canciones }) => {
  const usuarioSession = JSON.parse(sessionStorage.getItem("usuarioKey"));
  const navigate = useNavigate();

  const [artista, setArtista] = useState("Todos");

  // ARTISTAS ÚNICOS
  const artistas = [
    "Todos",
    ...new Set((canciones || []).map((c) => c.artistaGrupo)),
  ];

  // FILTRO POR ARTISTA
  const cancionesFiltradas =
    artista === "Todos"
      ? canciones || []
      : (canciones || []).filter((c) => c.artistaGrupo === artista);

  const handleRegister = () => navigate("/register");

  return (
    <main className="mt-5 p-4 text-white container">
      <h1 className="text-center mb-4">
        <FaMusic className="me-2" /> Explora Música
      </h1>

      {/* FILTRO */}
      <div className="home-filter-container d-flex justify-content-start align-items-center mb-4">
        <Dropdown>
          <Dropdown.Toggle className="home-filter-toggle" variant="dark">
            <FaFilter className="me-2" /> Filtrar por artista: {artista}
          </Dropdown.Toggle>

          <Dropdown.Menu className="home-filter-menu">
            {artistas.map((art) => (
              <Dropdown.Item key={art} onClick={() => setArtista(art)}>
                {art}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* CARDS */}
      <Container className="home-cards-glass">
        <Row className="g-3">
          {cancionesFiltradas.map((song) => (
            <SongCard key={song.id} cancion={song} />
          ))}

          {cancionesFiltradas.length === 0 && (
            <p className="text-center mt-3" style={{ opacity: 0.7 }}>
              No hay canciones de este artista.
            </p>
          )}
        </Row>
      </Container>

      {/* CREA TU CUENTA */}
      {!usuarioSession && (
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
      )}
    </main>
  );
};

export default Home;
