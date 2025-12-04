import { Container, Dropdown, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
import SongCardPlaylist from "../services/SongCardPlaylist";
import "../styles/guest.css";

const UserPage = ({ canciones }) => {
  const [playlist, setPlaylist] = useState(() => {
    const stored = localStorage.getItem("playlist");
    return stored ? JSON.parse(stored) : [];
  });

  const agregarAPlaylist = (song) => {
    if (playlist.some((c) => c.id === song.id)) return;
    const nuevaLista = [...playlist, song];
    setPlaylist(nuevaLista);
    localStorage.setItem("playlist", JSON.stringify(nuevaLista));
  };

  const quitarDePlaylist = (idCancion) => {
    const nuevaLista = playlist.filter((c) => c.id !== idCancion);
    setPlaylist(nuevaLista);
    localStorage.setItem("playlist", JSON.stringify(nuevaLista));
  };

  const [artista, setArtista] = useState("Todos");

  // EXTRAER ARTISTAS ÚNICOS
  const artistas = [
    "Todos",
    ...new Set((canciones || []).map((c) => c.artistaGrupo)),
  ];

  // FILTRAR POR ARTISTA
  const cancionesFiltradas =
    artista === "Todos"
      ? canciones || []
      : (canciones || []).filter((c) => c.artistaGrupo === artista);

  return (
    <Container className="mt-4 text-white guest-glass">
      <Row className="mx-1 justify-content-center">
        {/* FILTRO POR ARTISTA */}
        <div className="my-3">
          <Dropdown>
            <Dropdown.Toggle variant="dark">
              <FaFilter className="me-2" /> Filtrar por artista: {artista}
            </Dropdown.Toggle>

            <Dropdown.Menu className="home-filter-menu">
              {artistas.map((art) => (
                <Dropdown.Item key={art} onClick={() => setArtista(art)}>
                  {art}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* LISTA DE CANCIONES FILTRADAS */}
        <Row className="g-3">
          {cancionesFiltradas.map((song) => (
            <SongCardPlaylist
              key={song.id}
              cancion={song}
              agregarAPlaylist={agregarAPlaylist}
              quitarDePlaylist={quitarDePlaylist}
              playlist={playlist}
            />
          ))}

          {/* Mensaje si no hay canciones */}
          {cancionesFiltradas.length === 0 && (
            <p
              className="text-center mt-3 bg-dark text-white"
              style={{ opacity: 0.7 }}
            >
              No hay canciones para este artista.
            </p>
          )}
        </Row>

        {/* PLAYLIST */}
        <div className="guest-glass mt-5 mx-2">
          <h2 className="m-2 bg-dark text-white">Tu Playlist</h2>

          <Row className="g-2">
            {playlist.length === 0 ? (
              <p className="text-center">
                Aún no tienes canciones en tu playlist.
              </p>
            ) : (
              playlist.map((song) => (
                <SongCardPlaylist
                  key={song.id}
                  cancion={song}
                  agregarAPlaylist={agregarAPlaylist}
                  quitarDePlaylist={quitarDePlaylist}
                  playlist={playlist}
                />
              ))
            )}
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default UserPage;
