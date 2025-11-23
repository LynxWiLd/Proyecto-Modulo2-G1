import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import perfilMujer1 from "../assets/perfil-mujer-1-sf.png";
import perfilMujer2 from "../assets/perfil-mujer-2-sf.png";
import perfilHombre1 from "../assets/perfil-hombre-1-sf.png";
import perfilHombre2 from "../assets/perfil-hombre-2-sf.png";
import perfilHombre3 from "../assets/perfil-hombre-3-sf.png";
import perfilHombre4 from "../assets/perfil-hombre-4-sf.png";


const integrantes = [
  {
    nombre: "Integrante 1",
    rol: "Frontend Developer",
    img: perfilMujer1, 
  },
  {
    nombre: "Integrante 2",
    rol: "Backend Developer",
    img: perfilHombre1,
  },
  {
    nombre: "Integrante 3",
    rol: "UX/UI Designer",
    img: perfilHombre2,
  },
  {
    nombre: "Integrante 4",
    rol: "Project Manager",
    img: perfilMujer2,
  },
  {
    nombre: "Integrante 5",
    rol: "QA Tester",
    img: perfilHombre3,
  },
  {
    nombre: "Integrante 6",
    rol: "Full Stack Developer",
    img: perfilHombre4,
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5 page-fade-in">
      <div className="row g-4 align-items-center">
        {/* Texto a la izquierda */}
        <div className="col-lg-6 col-md-6 col-sm-12 div-about-encabezado py-4">
          <h1 className="fw-bold">Sobre Nosotros</h1>
          <p className="fs-5">
            Somos un equipo de desarrollo web trabajando en una plataforma
            musical moderna, inspirada en experiencias como Spotify y YouTube
            Music.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <img
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="Equipo"
            className="img-fluid rounded object-fit-cover img-about"
          />
        </div>
      </div>

      <section className="section-about-team">
        <h3 className="fs-2 text-center">Nuestro Equipo</h3>
        <p>
          Sabias que somos un grupo de compañeros del curso de Full Stack en
          Rolling School!
        </p>
        <hr />
        <div className="row g-4">
          {integrantes.map((persona, index) => (
            <div className="col-12 col-md-6 col-lg-4 about-card" key={index}>
              <div className="card shadow-sm h-100 border-0">
                <img
                  src={persona.img}
                  className="card-img-top"
                  alt={persona.nombre}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{persona.nombre}</h5>
                  <h6 className="text-primary">{persona.rol}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center my-4">
        <Button variant="success" onClick={() => navigate("/")}>
          Conoce más sobre este proyecto!
        </Button>
      </div>
    </Container>
  );
};

export default About;
