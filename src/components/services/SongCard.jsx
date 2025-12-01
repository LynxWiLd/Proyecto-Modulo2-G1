import { Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaPlay } from "react-icons/fa";
import "../styles/songcard.css";

const SongCard = ({ song, isFavorite, toggleFavorito }) => {
  return (
    <Col sm={12} md={6} lg={3}>
      <Card
        className="bg-dark text-white p-2"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          transition: "0.3s",
          boxShadow: "0 0 18px rgba(0,0,0,0.4)",
        }}
      >
        {/* Imagen simulada */}
        <div
          style={{
            height: "160px",
            background: "linear-gradient(135deg, #1db954 0%, #121212 100%)",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          {/* Botón Play */}
          <Button
            variant="light"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              position: "absolute",
              bottom: "12px",
              right: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.6)",
            }}
          >
            <FaPlay />
          </Button>
        </div>

        <Card.Body>
          {/* Título */}
          <Card.Title className="d-flex justify-content-between align-items-center">
            {song.nombre}

            {/* CORAZÓN */}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => toggleFavorito(song.id)}
            >
              {isFavorite ? (
                <FaHeart className="text-danger fs-4" />
              ) : (
                <FaRegHeart className="text-white fs-4" />
              )}
            </div>
          </Card.Title>

          {/* Categoría */}
          <Card.Text className="text-secondary">{song.categoria}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SongCard;
