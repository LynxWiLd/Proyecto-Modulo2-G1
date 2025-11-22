import { Container } from "react-bootstrap";

const About = () => (
  <Container className="my-5">
    <div className="row g-4 align-items-center">

      {/* Texto a la izquierda */}
      <div className="col-lg-6 col-md-6 col-sm-12 div-about-encabezado">
        <h1 className="fw-bold">Sobre Nosotros</h1>
        <p className="fs-5">
          Somos un equipo de desarrollo web trabajando en una plataforma musical
          moderna, inspirada en experiencias como Spotify y YouTube Music.
        </p>
      </div>

      {/* Imagen a la derecha */}
      <div className="col-lg-6 col-md-6 col-sm-12 text-center ">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
          alt="Equipo"
          className="img-fluid rounded object-fit-cover img-about"
          
        />
      </div>

    </div>
  </Container>
);

export default About;
