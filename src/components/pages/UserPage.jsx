import {
  Container,
  Dropdown,
  Row,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { FaFilter, FaRegHeart, FaUserPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../routes/AuthContext";
import SongCard from "../services/SongCard";
import "../styles/guest.css"; // IMPORTANTE

const UserPage = () => {
  const navigate = useNavigate();

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

  return (
    <Container className="mt-4 text-white">
      <Row className="mx-1 justify-content-center">
        <div className="col-12 col-md-7 col-lg-8 guest-glass">
          <div className="my-3 d-flex justify-content-center">
            {/*Filtro*/}
            <Dropdown className="d-none d-md-block">
              <Dropdown.Toggle variant="dark">
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
            {/*Buscador*/}
            <InputGroup className="guest-search mx-2">
              {/* Campo de entrada de texto */}
              <FormControl
                placeholder="¿Que cancion quieres reproducir?"
                aria-label="Buscador de música"
              />
              {/* Botón de búsqueda */}
              <Button variant="dark">
                <FaSearch />
              </Button>
            </InputGroup>
          </div>
          {/*Principal*/}
          <Row className="g-2">
            {cancionesFiltradas.map((song) => (
              <SongCard
                key={song.id}
                song={song}
                isFavorite={favoritos.includes(song.id)}
                toggleFavorito={toggleFavorito}
              />
            ))}
          </Row>
          {/* Listas */}
          <div className="guest-glass mt-5 mx-2">
            <h2 className="m-2">holaa</h2>
            <Row className="g-2">
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
        </div>
        {/*Lista de favoritos*/}
        <div className="d-none d-md-block col-md-4 col-lg-3 guest-glass mx-md-4">
          <h5 className="text-center">
            <FaRegHeart className="me-2 mb-1" />
            Tu Lista de Favoritos
          </h5>
        </div>
      </Row>
    </Container>
  );
};

export default UserPage;
