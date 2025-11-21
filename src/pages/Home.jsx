import { Container, Row, Button, Col } from "react-bootstrap";
import { FaUserPlus, FaMusic } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const [categoria, setCategoria] = useState("Todas");

  const categorias = ["Rock", "Pop", "Electrónica", "Cuarteto", "Rap"];

  const canciones = [
    { nombre: "Tema 1", categoria: "Rock" },
    { nombre: "Tema 2", categoria: "Pop" },
    { nombre: "Tema 3", categoria: "Cuarteto" },
    { nombre: "Tema 4", categoria: "Rock" },
    { nombre: "Tema 5", categoria: "Electrónica" },
  ];

  const cancionesFiltradas =
    categoria === "Todas"
      ? canciones
      : canciones.filter((c) => c.categoria === categoria);

  return (
    <Container
      className="mt-5 p-4"
      style={{ boxShadow: "0 0 15px rgba(0,0,0,0.4)" }}
    >
      <section className="mt-4 p-3 bg-dark border rounded-3 text-white">
        <Row>
          <h1 className="m-0 text-center ">
            <FaMusic className="fs-2" /> Explora
          </h1>
        </Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-light"
              id="dropdown-basic"
              className="d-flex align-items-center gap-2"
            >
              <FaFilter /> Filtrar
            </Dropdown.Toggle>

            <Dropdown.Menu>
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
        </Col>
      </section>

      <section
        className="mt-4 p-3 border rounded-3 text-center text-white"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <h4>
          <FaUserPlus /> Crea tu cuenta ahora
        </h4>
        <p>
          Registrate gratis y desbloqueá una experiencia pensada para vos: mejor
          sonido, categorías únicas y tus temas favoritos en un solo lugar.
        </p>

        <Button
          variant="success"
          size="lg"
          style={{ backgroundColor: "#1db954", border: "none" }}
          onClick={handleRegister}
        >
          Crear Cuenta
        </Button>
      </section>
    </Container>
  );
};

export default Home;
