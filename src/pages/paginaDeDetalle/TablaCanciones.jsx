import imgCancion1 from '../../assets/imgDetalleCancion/vivaLaVida.png'
import ItemCancion from "./ItemCancion";
import { Table, Image } from 'react-bootstrap';


// const TablaCanciones = ({ canciones }) => {
const TablaCanciones = () => {
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
                        <th>Escuchar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>1</td>
                        <td><Image src={imgCancion1} rounded className='imgCancion'/></td>
                        <td>Karol G, Nicki Minaj</td>
                        <td>Tusa</td>
                        <td>Reguetón</td>
                        <td>3:21</td>
                        <td>https://ejemplo.com/audio/tusa.mp3</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td>
                        <td><Image src={imgCancion1} rounded className='imgCancion'/></td>
                        <td>Karol G, Nicki Minaj</td>
                        <td>Tusa</td>
                        <td>Reguetón</td>
                        <td>3:21</td>
                        <td>https://ejemplo.com/audio/tusa.mp3</td>
                    </tr>
                    <tr className="text-center">
                        <td>1</td>
                        <td><Image src={imgCancion1} rounded className='imgCancion'/></td>
                        <td>Karol G, Nicki Minaj</td>
                        <td>Tusa</td>
                        <td>Reguetón</td>
                        <td>3:21</td>
                        <td>https://ejemplo.com/audio/tusa.mp3</td>
                    </tr>
                    {/* {
                        canciones.map((cancionRecomendada, indice) => <ItemCancion key={cancionRecomendada.idCancion} cancionRecomendada={cancionRecomendada} fila={indice + 1} ></ItemCancion>)
                    } */}
                </tbody>
            </Table>
        </section>
    );
}


export default TablaCanciones;