import Image from "react-bootstrap/Image";
import { Container, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router";
import TablaCanciones from "./TablaCanciones";
import Swal from "sweetalert2";
import { FaPlay } from "react-icons/fa";
import SongCard from "../../complementos/SongCard";

// IMPORTACIONES PARA LOS ARTISTAS RECOMENDADOS:
import badBunnyImg from "../../assets/imgDetalleCancion/badBunny.webp";
import mariaBecerraImg from "../../assets/imgDetalleCancion/mariaBecerra.webp";
import airbagImg from "../../assets/imgDetalleCancion/airgag.jpg";
import luckRaImg from "../../assets/imgDetalleCancion/luckRa.avif";
import bizarrapImg from "../../assets/imgDetalleCancion/bizarrap.webp";
import emiliaMernesImg from "../../assets/imgDetalleCancion/emilia-mernes.webp";

const DetalleCancion = ({ canciones }) => {
  const { id } = useParams();
  const cancionBuscada = canciones.find((song) => song.id === id);

  if (!cancionBuscada) {
    return (
      <main className="container my-4">
        <h1>Canción No Encontrada</h1>
      </main>
    );
  }

  const handlePlay = () => {
    if (cancionBuscada?.urlCancion) {
      Swal.fire({
        title: "¡A Reproducir!",
        text: "Tu canción se está reproduciendo. ¡Sube el volumen!",
        icon: "success",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      window.open(cancionBuscada.urlCancion, "_blank");
    } else {
      console.warn("URL de la canción no disponible.");
    }
  };

  return (
    <main>
      <section className="text-ligth position-relative">
        {/* imagen portada de la cancion */}
        <div className="imagen-container">
          <Image
            src={cancionBuscada.urlImgCancion}
            className="imgPortadaCancion"
            fluid
            alt={`imagen de la cancion ${cancionBuscada.nombreCancion}`}
          />
        </div>
        {/*Overlay Superior Izquierda: "Artista Verificado" */}
        <div className="overlay top-left">
          <span className="badge bg-success">Detalle Canción</span>
        </div>

        {/* Overlay centro: nombre Cancion */}
        <div className="overlay centered-text text-white p-2">
          <h1 className="mb-0 fw-bold display-1 px-3">
            {cancionBuscada.nombreCancion}
          </h1>
        </div>

        {/* Overlay Inferior Izquierda: Detalles */}
        <div className="overlay bottom-left text-white p-2">
          <p className="mb-0">
            <span className="fw-bold">
              {cancionBuscada.artistaGrupo} - {cancionBuscada.albumCancion}
            </span>{" "}
            - {cancionBuscada.anioCancion} - {cancionBuscada.duracionCancion} -
            {cancionBuscada.id}
          </p>
        </div>
      </section>

      <section className="container my-3 d-flex justify-content-start align-items-center gap-4">
        {/* ------boton PLAY ára escuchar la cancion --------*/}

        <button
          className="botonPlay d-flex justify-content-center
          align-items-center rounded-circle"
          onClick={handlePlay}
        >
          <FaPlay size={22} />
        </button>

        <Link className="text-light" to="*" title="Guardar en tu Biblioteca">
          <i className="bi bi-plus-circle fs-1"></i>
        </Link>

        <Link className="text-light" to="*" title="Más opciones">
          <i className="bi bi-three-dots fs-1"></i>
        </Link>
      </section>

      {/* ----- informacion del cantante o banda -------- */}
      <section className="container d-flex justify-content-center align-items-center mb-5">
        <Image
          src={cancionBuscada.urlImgCancion}
          className="galeria-circular-img rounded-circle"
          alt={`imagen del Artista ${cancionBuscada.artistaGrupo}`}
        />

        <div className="ms-3 fondoTransparente p-4 text-center">
          <div className="fw-bold text-light">Artista</div>
          <Link className="fw-bold text-light" to="*">
            {cancionBuscada.artistaGrupo}
          </Link>
        </div>
      </section>

      {/* Tabla de canciones recomnedadas usando localStorage */}
      <section className="pt-2 ps-3 fondoTransparente">
        <div className="d-flex align-items-center">
          <h3>Recomendaciones</h3>
          <p className="ms-3 mb-0 fw-bold">Basadas en esta canción</p>
        </div>
        <TablaCanciones canciones={canciones}></TablaCanciones>
      </section>

      {/* grilla de card usando localStorage */}
      <section>
        <h3 className="py-2 ps-3 mb-3 fondoTransparente">
          Publicaciones Populares
        </h3>
        <Container>
          <Row xs={2} md={3} lg={4} className="g-4 mb-4">
            {canciones.map((cancion) => (
              <SongCard key={cancion.id} cancion={cancion}></SongCard>
            ))}
          </Row>
        </Container>
      </section>

      {/* Grilla de imagenes circulares usando array maquetado*/}
      <section className="mb-5">
        <h3 className="py-2 ps-3 fondoTransparente">Artistas Recomendados</h3>
        <Container>
          <Row xs={3} md={4} lg={6} className="g-6">
            <Col>
              <div className="text-center ">
                <Image
                  src={badBunnyImg}
                  alt="Foto Bud Bunny"
                  className="galeria-circular-img mb-2"
                  roundedCircle
                />
                <p className="fw-bold text-dark">Bad Bunny</p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <Image
                  src={mariaBecerraImg}
                  alt="Foto Bud Bunny"
                  className="galeria-circular-img mb-2"
                  roundedCircle
                />
                <p className="fw-bold text-dark">María Becerra</p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <Image
                  src={airbagImg}
                  alt="Foto Bud Bunny"
                  className="galeria-circular-img mb-2"
                  roundedCircle
                />
                <p className="fw-bold text-dark">AirBag</p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <Image
                  src={luckRaImg}
                  alt="Foto Bud Bunny"
                  className="galeria-circular-img mb-2"
                  roundedCircle
                />
                <p className="fw-bold text-dark">Luck Ra</p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <Image
                  src={bizarrapImg}
                  alt="Foto Bud Bunny"
                  className="galeria-circular-img mb-2"
                  roundedCircle
                />
                <p className="fw-bold text-dark">Bizarrap</p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <Image
                  src={emiliaMernesImg}
                  alt="Foto Bud Bunny"
                  className="galeria-circular-img mb-2"
                  roundedCircle
                />
                <p className="fw-bold text-dark">Emilia Mernes</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default DetalleCancion;
