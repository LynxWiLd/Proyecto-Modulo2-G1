import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Icon from "/Icon.png";

const Footer = () => (
  <footer
    className="text-white py-3 mt-auto "
    style={{ backgroundColor: "#000" }}
  >
    <Container className="text-center">
      <Row className="text-center text-white">
        <Col md={4}>
          <img src={Icon} alt="icon" id="icon" />
          <p style={{ fontSize: "0.9rem" }}>Tu música, sin límites.</p>
        </Col>

        <Col md={4}>
          <h6>Enlaces</h6>

          <Link to="/" className="text-white d-block">
            Inicio
          </Link>
          <Link to="/about" className="text-white d-block">
            Sobre Nosotros
          </Link>
        </Col>

        <Col md={4}>
          <h6>Seguinos</h6>

          <a
            href="/src/pages/Error404.jsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="/src/pages/Error404.jsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaFacebook size={24} />
          </a>
        </Col>
      </Row>

      <Row className="text-center mt-3">
        <Col className="text-white-50" style={{ fontSize: "0.8rem" }}>
          © 2025. Todos los derechos reservados.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
