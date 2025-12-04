import { Button } from "react-bootstrap";

const ItemCancion = ({ cancionRecomendada, fila }) => {
  const handlePlay = () => {
    if (cancionRecomendada?.urlCancion) {
      window.open(cancionRecomendada.urlCancion, "_blank");
    } else {
      console.warn("URL de la canción no disponible.");
    }
  };

  return (
    <tr className="text-center">
      <td>{fila}</td>
      <td>{cancionRecomendada.nombreAlbum}</td>
      <td>{cancionRecomendada.artistaGrupo}</td>
      <td>{cancionRecomendada.nombreCancion}</td>
      <td>{cancionRecomendada.categoriaCancion}</td>
      <td>{cancionRecomendada.duracionCancion}</td>
      <td>
        <Button variant="primary" onClick={handlePlay}>
          {" "}
          <i className="bi-play-fill"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemCancion;
