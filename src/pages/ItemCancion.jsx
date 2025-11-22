

const ItemCancion = ({ cancion, fila }) => {
    return (
        <tr className="text-center">
            <td>{fila}</td>
            <td>{cancion.urlImagenCancion}</td>
            <td>{cancion.artistaGrupo}</td>
            <td>{cancion.tituloCancion}</td>
            <td>{cancion.categoriaCancion}</td>
            <td>{cancion.duracionCancion}</td>
            <td>{cancion.urlCancion}</td>
        </tr>

    );
};

export default ItemCancion;