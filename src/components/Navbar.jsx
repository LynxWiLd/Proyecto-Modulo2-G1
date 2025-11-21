import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../assets/icon.png";
import { useAuth } from "../contenido/AuthContext";   

const NavigationBar = () => {
  const { user, logout } = useAuth();   

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
      <img src={Icon} alt="icono" id="icon" />
      
      <Navbar.Brand as={Link} to="/">
        Mi Sitio
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>

          <Nav.Link as={Link} to="/about">
            Sobre Nosotros
          </Nav.Link>
        </Nav>

        <Nav>
          {user ? (
            <Nav.Link onClick={logout}>
              Cerrar sesión
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              Iniciar Sesion
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
