import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "/Icon.png";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const manejarLogout = () => {
    setUsuarioLogueado(false);
    sessionStorage.removeItem("usuarioKey");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
      <img src={Icon} alt="icono" id="icon" />

      <Navbar.Brand as={Link} to="/">Tuneo</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/about">Sobre Nosotros</Nav.Link>
        </Nav>

        <Nav>
          {usuarioLogueado ? (
            <Nav.Link onClick={manejarLogout}>Cerrar Sesión</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
