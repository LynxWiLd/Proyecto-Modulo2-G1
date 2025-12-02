import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Icon from "/Icon.png";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const navegacion = useNavigate(); 

  const manejarLogout = () => {
    setUsuarioLogueado(false);
    sessionStorage.removeItem("usuarioKey");
      navegacion("/"); 
  };
  const navegacionlogin = () => {
    if (!usuarioLogueado) {
      navegacion("/");
    }else{
      navegacion("/userPage");
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
      <img src={Icon} alt="icono" id="icon" />

      <Navbar.Brand as={Link} to={"/"}>Tuneo</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={navegacionlogin} >Inicio</Nav.Link>
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