
import Image from 'react-bootstrap/Image';
import imgPortada from '../assets/imgDetalleCancion/resizecom_yellow.jfif'
import imgGrupo from '../assets/imgDetalleCancion/grupoColdplay.jfif'
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router';

const DetalleCancion = () => {
    return (
        <main className='fondoDetalleCancion'>
            <section className='text-ligth position-relative'>
                {/* imagen portada de la cancion */}
                <div className='imagen-container'>
                    <Image src={imgPortada} className='imgPortadaCancion' fluid alt='imagen portada canción o album' />
                </div>
                {/*Overlay Superior Izquierda: "Artista Verificado" */}
                <div className="overlay top-left">
                    <span className="badge bg-primary">Canción</span>
                </div>

                {/* Overlay centro: nombre Cancion */}
                <div className="overlay centered-text text-white p-2">
                    <h1 className="mb-0 fw-bold display-1">YELLOW</h1>
                </div>

                {/* Overlay Inferior Izquierda: Detalles */}
                <div className="overlay bottom-left text-white p-2">
                    <p className="mb-0"><span className='fw-bold'>ColdPlay - Parachutes</span> - 2000 - 4:26 - 3.421.608.407</p>
                </div>
            </section>

            {/* boton PLAY ára escuchar la cancion */}
            <section className='container my-3 text-center'>
                <Button variant='primary' className='botonPlay d-flex justify-content-center align-items-center rounded-circle'>
                    <i className="bi bi-play-fill fs-1 text-white"></i>
                </Button>
            </section>

            {/* ----- informacion del cantante o banda -------- */}
            <section className='container d-flex align-items-center'>
                <Image src={imgGrupo} roundedCircle alt='imagen del grupo' />

                <div className='ms-3'>
                    <div className='fw-bold fs-3 text-light'>Artista</div>
                    <Link className='fw-bold fs-3 text-light' to={''}>ColdPlay</Link>
                </div>
            </section>

            <section className='px-3 py-2 mt-5 fondoTransparente'>
                <h3>Recomendaciones</h3>
                <p>Basadas en esta canción</p>
            </section>

            <section className='px-3 mb-5 table-responsive'>
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <th>#</th>
                            {/* <th>url album</th> */}
                            <th>Album</th>
                            <th>Titulo</th>
                            <th>Categoría</th>
                            <th>Duración</th>
                            <th>▶️</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {/* <td><Image src={imgAlbum} thumbnail  alt='imagen de la cancion'/></td> */}
                            <td>Viva La Vida</td>
                            <td>Viva La Vida</td>
                            <td>Pop</td>
                            <td>4:02</td>
                            <td>link cancion</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            {/* <td><Image src={imgAlbum} thumbnail  alt='imagen de la cancion'/></td> */}
                            <td>Viva La Vida</td>
                            <td>Viva La Vida</td>
                            <td>Pop</td>
                            <td>4:02</td>
                            <td>link cancion</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            {/* <td><Image src={imgAlbum} thumbnail  alt='imagen de la cancion'/></td> */}
                            <td>Viva La Vida</td>
                            <td>Viva La Vida</td>
                            <td>Pop</td>
                            <td>4:02</td>
                            <td>link cancion</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </main>
    );
};

export default DetalleCancion;