import { Card, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import "../styles/songCard.css";
import { Link } from "react-router";

const SongCard = ({ songs }) => {
  const handlePlay = () => {
    if (songs?.urlCancion) {
      window.open(songs.urlCancion, "_blank");
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
              songs?.urlImgCancion ||
              "https://via.placeholder.com/400?text=No+Image"
            }
            alt={`Portada de ${songs?.nombreCancion}`}
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
              {songs?.nombreCancion || "Título Desconocido"}
            </h3>

            <p className="text-truncate mb-2">
              {songs?.artistaGrupo || "Artista Desconocido"}
            </p>
          </div>
          <small className="text-muted">
            {songs?.categoriaCancion} | {songs?.duracionCancion}
          </small>
        </Card.Body>
        <Card.Footer className="text-muted border-top border-secondary bg-dark">
          <Link
            className="mt-2 w-100 btn btn-primary"
            to={`/detalle/${songs?.id}`}
          >
            Detalle
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SongCard;
