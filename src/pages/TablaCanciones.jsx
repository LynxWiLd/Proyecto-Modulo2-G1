import ItemCancion from "./ItemCancion";
import { Table } from 'react-bootstrap';
const TablaCanciones = ({ canciones }) => {
    return (
        <section className='px-3 mb-5 table-responsive'>
            <Table striped bordered hover>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Album</th>
                        <th>Artista</th>
                        <th>Titulo</th>
                        <th>Categoría</th>
                        <th>Duración</th>
                        <th>▶️</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        canciones.map((cancionRecomendada, indice) => <ItemCancion key={cancionRecomendada.idCancion} cancionRecomendada={cancionRecomendada} fila={indice + 1} ></ItemCancion>)
                    }
                </tbody>
            </Table>
        </section>
    );
}


export default TablaCanciones;