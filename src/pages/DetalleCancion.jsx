
import Image from 'react-bootstrap/Image';
import imgPortada from '../assets/imgDetalleCancion/resizecom_yellow.jfif'
import imgGrupo from '../assets/imgDetalleCancion/grupoColdplay.jfif'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import TablaCanciones from './TablaCanciones';

// debera recibir por props la "cancion" seleccionada. El props "canciones" tiene las canciones recomendadas en la tabla de abajo
const DetalleCancion = ({ canciones }) => {
    return (
        <main className='fondoDetalleCancion'>
            <section className='text-ligth position-relative'>
                {/* imagen portada de la cancion */}
                <div className='imagen-container'>
                    <Image src={imgPortada} className='imgPortadaCancion' fluid alt='imagen portada canción o album' />
                </div>
                {/*Overlay Superior Izquierda: "Artista Verificado" */}
                <div className="overlay top-left">
                    <span className="badge bg-primary">Detalle Canción</span>
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

            {/* ------boton PLAY ára escuchar la cancion --------*/}
            <section className='container my-3 d-flex justify-content-start align-items-center gap-4'>
                <Button
                    variant='primary'
                    className='botonPlay d-flex justify-content-center align-items-center rounded-circle'
                    title="Reproducir canción"
                >
                    <i className="bi bi-play-fill fs-1  text-white"></i>
                </Button>

                <Link className='text-light' title="Guardar en tu Biblioteca">
                    <i className="bi bi-plus-circle fs-1"></i>
                </Link>

                <Link className='text-light' title='Más opciones'>
                    <i className="bi bi-three-dots fs-1"></i>
                </Link>
            </section>


            {/* ----- informacion del cantante o banda -------- */}
            <section className='container d-flex justify-content-center align-items-center'>
                <Image src={imgGrupo} className='imgCircularAlbum rounded-circle' alt='imagen del grupo' />

                <div className='ms-3'>
                    <div className='fw-bold fs-4 text-light'>Artista</div>
                    <Link className='fw-bold fs-4 text-light' to={''}>ColdPlay</Link>
                </div>
            </section>

            <section className='px-3 py-2 mt-5 fondoTransparente'>
                <h3>Recomendaciones</h3>
                <p>Basadas en esta canción</p>
            </section>
            <TablaCanciones canciones={canciones}></TablaCanciones>
        </main>
    );
};

export default DetalleCancion;