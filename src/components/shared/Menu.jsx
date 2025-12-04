import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import Icon from "/Icon.png";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const manejarLogout = () => {
    setUsuarioLogueado(false);
    navegacion("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
      <img src={Icon} alt="icono" id="icon" />

      <Navbar.Brand as={Link} to={"/"}>
        Tuneo
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
          {usuarioLogueado?.rol === "admin" && (
            <NavLink className="nav-link" as={Link} to="/administracion">
              Administración
            </NavLink>
          )}

          {usuarioLogueado?.rol === "user" && (
            <NavLink className="nav-link" as={Link} to="/user">
              Mi Perfil
            </NavLink>
          )}

          {usuarioLogueado ? (
            <Nav.Link onClick={manejarLogout}>Cerrar Sesión</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">
              Iniciar Sesión
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
