import { Container } from "react-bootstrap";

const integrantes = [
  {
    nombre: "Integrante 1",
    rol: "Frontend Developer",
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    
  },
  {
    nombre: "Integrante 2",
    rol: "Backend Developer",
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  },
  {
    nombre: "Integrante 3",
    rol: "UX/UI Designer",
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  },
  {
    nombre: "Integrante 4",
    rol: "Project Manager",
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  },
  {
    nombre: "Integrante 5",
    rol: "QA Tester",
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  },
  {
    nombre: "Integrante 6",
    rol: "Full Stack Developer",
    img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  }
];
const About = () => (
  
  <Container className="my-5">
    <div className="row g-4 align-items-center">

      {/* Texto a la izquierda */}
      <div className="col-lg-6 col-md-6 col-sm-12 div-about-encabezado py-4">
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
    
      <section className="section-about-team">
        <h3 className="fs-2 text-center mb-4">Nuestro Equipo</h3>
<hr/>
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
  </Container>
);

export default About;
