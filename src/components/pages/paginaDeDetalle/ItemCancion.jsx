

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
        </tr>

    );
};

export default ItemCancion;