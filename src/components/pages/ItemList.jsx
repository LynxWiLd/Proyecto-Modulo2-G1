import { useNavigate } from "react-router";

const ItemList = ({ song, fila, eliminarCancion }) => {
  const navigate = useNavigate();

  const handleEliminar = () => {
    eliminarCancion(song.id);
  };

  const handleEditar = () => {
    navigate(`/administracion/editarCancion/${song.id}`);
  };

  return (
    <tr className="text-center">
      <td>{fila}</td>
      <td>{song.nombreCancion}</td>
      <td>{song.artistaGrupo}</td>
      <td>{song.categoriaCancion}</td>
      <td>{song.duracionCancion}</td>
      <td>{song.urlCancion}</td>
      <td>
        <button className="btn btn-danger ms-2 m-1" onClick={handleEliminar}>
          Eliminar
        </button>
        <button className="btn btn-success ms-2 m-1" onClick={handleEditar}>
          Editar
        </button>
      </td>
    </tr>
  );
};

export default ItemList;
