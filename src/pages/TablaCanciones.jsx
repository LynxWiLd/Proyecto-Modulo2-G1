import ItemCancion from "./ItemCancion";
import { Table } from 'react-bootstrap';
const TablaCanciones = ({ canciones }) => {
    return (
        <section className='px-3 mb-5 table-responsive'>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>url album</th>
                        <th>Album</th>
                        <th>Titulo</th>
                        <th>Categoría</th>
                        <th>Duración</th>
                        <th>▶️</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        canciones.map((cancion, indice) => <ItemCancion key={cancion.idCancion} cancion={cancion} fila={indice + 1} ></ItemCancion>)
                    }
                </tbody>
            </Table>
        </section>
    );
}


export default TablaCanciones;