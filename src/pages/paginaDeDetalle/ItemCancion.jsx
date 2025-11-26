import { Link } from "react-router";


const ItemCancion = ({ cancionRecomendada, fila }) => {
    return (
        <tr className="text-center">
            <td>{fila}</td>
            <td>{cancionRecomendada.urlImagenCancion}</td>
            <td>{cancionRecomendada.artistaGrupo}</td>
            <td>{cancionRecomendada.tituloCancion}</td>
            <td>{cancionRecomendada.categoriaCancion}</td>
            <td>{cancionRecomendada.duracionCancion}</td>
            <td>{cancionRecomendada.urlCancion}</td>
            <td><Link className="me-2 btn btn-warning" to={`/editarCancion/${cancionRecomendada.id}`}>Editar</Link></td>
        </tr>

    );
};

export default ItemCancion;