import { Container, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import perfilMujer1 from "../assets/profile/perfil-mujer-1-sf.png";
import perfilMujer2 from "../assets/profile/perfil-mujer-2-sf.png";
import perfilHombre1 from "../assets/profile/perfil-hombre-1-sf.png";
import perfilHombre2 from "../assets/profile/perfil-hombre-2-sf.png";
import perfilHombre3 from "../assets/profile/perfil-hombre-3-sf.png";
import perfilHombre4 from "../assets/profile/perfil-hombre-4-sf.png";

const integrantes = [
  {
    nombre: "Valentina Iramain",
    rol: "Frontend Developer",
    img: perfilMujer1,
  },
  {
    nombre: "Facundo Vera",
    rol: "Backend Developer",
    img: perfilHombre1,
  },
  {
    nombre: "Jonathan Exequiel Fiorenza",
    rol: "UX/UI Designer",
    img: perfilHombre2,
  },
  {
    nombre: "Jose Casas",
    rol: "Project Manager",
    img: perfilHombre3,
  },
  {
    nombre: "Matías José Vivanco",
    rol: "QA Tester",
    img: perfilHombre4,
  },
  {
    nombre: "Corina Jimenez",
    rol: "Full Stack Developer",
    img: perfilMujer2,
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
        <h3 className="fs-2 fw-bold text-center">Nuestro Equipo</h3>
        <p className="fs-4">
          Sabias que somos un grupo de compañeros del curso de Full Stack en
          Rolling School!
        </p>
        <hr />
        <div className="row g-4">
          {integrantes.map((persona, index) => (
            <div className="col-xs-12 col-md-6 col-lg-4 about-card" key={index}>
              <div className="card shadow h-100 border-0">
                <Image
                  src={persona.img}
                  className="card-img-top rounded bg-success shadow"
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
        <p className="fs-4 ">
          "De estudiantes a desarrolladores: este es nuestro viaje."
        </p>
        <Button variant="success" onClick={() => navigate("/")}>
          Conoce más sobre este proyecto!
        </Button>
      </div>
    </Container>
  );
};

export default About;
