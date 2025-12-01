import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // <-- ¡IMPORTANTE! Añadida useNavigate
import Icon from "/Icon.png";
import { useAuth } from "../routes/AuthContext";

const Menu = () => {
  // 1. Renombramos el 'logout' del contexto a 'authLogout'
  const { user, logout: authLogout } = useAuth(); 
  const navigate = useNavigate();
  
  // 2. Nueva función para manejar el cierre de sesión y la redirección
  const handleLogout = () => {
      authLogout(); 
      navigate("/"); 
  };
  

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
      <img src={Icon} alt="icono" id="icon" />

      <Navbar.Brand as={Link} to="/">
        Tuneo
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/UserPage">
            Inicio
          </Nav.Link>

          <Nav.Link as={Link} to="/about">
            Sobre Nosotros
          </Nav.Link>
        </Nav>

        <Nav>
          {user ? (
            // 3. Aplicamos la nueva función al onClick
            <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
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

export default Menu;