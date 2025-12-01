
import { Button } from 'react-bootstrap';

const ItemCancion = ({ cancionRecomendada, fila }) => {
    return (
        <tr className="text-center">
            <td>{fila}</td>
            <td>{cancionRecomendada.nombreAlbum}</td>
            <td>{cancionRecomendada.artistaGrupo}</td>
            <td>{cancionRecomendada.nombreCancion}</td>
            <td>{cancionRecomendada.categoriaCancion}</td>
            <td>{cancionRecomendada.duracionCancion}</td>
            {/* <td>{cancionRecomendada.urlCancion}</td> */}
            <td><Button variant='primary'> <i className="bi-play-fill"></i></Button></td>
        </tr>

    );
};

export default ItemCancion;