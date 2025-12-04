// CÓDIGO ACTUALIZADO PARA COPIAR Y PEGAR EN Home.jsx
import { Container, Dropdown, Row, Button } from "react-bootstrap";
import { FaFilter, FaMusic, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SongCard from "../complementos/SongCard";
import "../styles/home.css";

const Home = ({ canciones, isLoading = false }) => {
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

  // ESTADOS DE VISTA CLAVE
  const isListEmpty = !isLoading && (canciones || []).length === 0;
  const isFilterEmpty = !isLoading && cancionesFiltradas.length === 0 && artista !== "Todos";

  return (
    <main className="mt-5 p-4 text-white container">
      <h1 className="text-center mb-4">
        <FaMusic className="me-2" /> Explora Música
      </h1>

      {/* FILTRO: Ocultar filtro si está cargando o la lista principal está vacía */}
      {!isLoading && !isListEmpty && (
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
      )}

      {/* LÓGICA DE MOSTRAR EL CONTENIDO O EL MENSAJE DE ESTADO */}
      <Container className="home-cards-glass">
        <Row className="g-3">
          
          {/* 1. MENSAJE DE CARGA */}
          {isLoading && (
            <div className="empty-list-message">
              <p className="text-center p-3 fs-5">
                🎶 **Cargando canciones...** Por favor, espera.
              </p>
            </div>
          )}

          {/* 2. MENSAJE DE LISTA VACÍA (Con el fondo oscuro) */}
          {isListEmpty && (
            <div className="empty-list-message">
              <p className="text-center p-3 fs-5">
                🚫 **¡No hay canciones disponibles aún!** Carga una para empezar.
              </p>
            </div>
          )}

          {/* 3. LISTA DE CANCIONES FILTRADAS */}
          {!isLoading && cancionesFiltradas.length > 0 && (
            cancionesFiltradas.map((song) => (
              <SongCard key={song.id} cancion={song} />
            ))
          )}

          {/* 4. MENSAJE DE FILTRO SIN RESULTADOS */}
          {isFilterEmpty && (
            <p className="text-center mt-3" style={{ opacity: 0.7 }}>
              No hay canciones de este artista.
            </p>
          )}

        </Row>
      </Container>

      {/* CREA TU CUENTA: Ocultar si la lista principal está vacía o cargando */}
      {!usuarioSession && !isListEmpty && !isLoading && (
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