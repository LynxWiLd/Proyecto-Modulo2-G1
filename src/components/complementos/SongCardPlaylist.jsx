import { Card, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import "../../components/styles/songcard.css";
import { Link } from "react-router";
import { Button } from "react-bootstrap";

const SongCard = ({
  cancion,
  agregarAPlaylist,
  quitarDePlaylist,
  playlist,
}) => {
  const handlePlay = () => {
    if (cancion?.urlCancion) {
      window.open(cancion.urlCancion, "_blank");
    } else {
      console.warn("URL de la canción no disponible.");
    }
  };

  return (
    <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
      <Card className="song-card h-100 bg-dark text-white ">
        <div className="img-container">
          <Card.Img
            variant="top"
            src={
              cancion?.urlImgCancion ||
              "https://via.placeholder.com/400?text=No+Image"
            }
            alt={`Portada de ${cancion?.nombreCancion}`}
            className="w-100 object-fit-cover"
            style={{ aspectRatio: "1/1" }}
          />

          <button className="play-btn" onClick={handlePlay}>
            <FaPlay size={22} />
          </button>
        </div>
        <Card.Body className="song-info d-flex flex-column justify-content-between">
          <div>
            <h3 className="text-truncate fs-5">
              {cancion?.nombreCancion || "Título Desconocido"}
            </h3>

            <p className="text-truncate mb-2">
              {cancion?.artistaGrupo || "Artista Desconocido"}
            </p>
          </div>
          <small className="text-muted">
            {cancion?.categoriaCancion} | {cancion?.duracionCancion}
          </small>
        </Card.Body>
        <Card.Footer className="text-muted border-top border-secondary bg-dark">
          <Link
            className="mt-2 w-100 btn btn-primary"
            to={`/detalle/${cancion?.idCancion}`}
          >
            Detalle
          </Link>

          {playlist?.some((item) => item.id === cancion.id) ? (
            <Button
              variant="danger"
              className="mt-2 w-100"
              onClick={() => quitarDePlaylist(cancion.id)}
            >
              – Quitar de Playlist
            </Button>
          ) : (
            <Button
              variant="outline-light"
              className="mt-2 w-100"
              onClick={() => agregarAPlaylist(cancion)}
            >
              + Agregar a Playlist
            </Button>
          )}
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SongCard;
