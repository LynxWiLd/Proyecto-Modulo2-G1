
import Image from 'react-bootstrap/Image';
import imgPortada from '../../assets/imgDetalleCancion/portadaYellow.jpg'
import imgGrupo from '../../assets/imgDetalleCancion/Coldplay.jpg'
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import TablaCanciones from './TablaCanciones';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import CardCancionesPopulares from './CardCancionesPopulares';
import { useParams } from "react-router";
// import CardArtistasRecomendados from './CardArtistasRecomendados';

// IMPORTACIONES PARA LOS ARTISTAS RECOMENDADOS:
import badBunnyImg from '../../assets/imgDetalleCancion/badBunny.webp';
import mariaBecerraImg from '../../assets/imgDetalleCancion/mariaBecerra.webp';
import airbagImg from '../../assets/imgDetalleCancion/airgag.jpg';
import luckRaImg from '../../assets/imgDetalleCancion/luckRa.avif';
import bizarrapImg from '../../assets/imgDetalleCancion/bizarrap.webp';
import emiliaMernesImg from '../../assets/imgDetalleCancion/emilia-mernes.webp';




// debera recibir por path el ID de la "cancion" seleccionada. canciones tiene un array con las canciones del localstorage para mostrar en la lista de sugeridos
// const DetalleCancion = ({ canciones, buscarCancion }) => {
const DetalleCancion = ({ canciones }) => {
    // id pasado en el path. id es un objeto que devuelve useParams
    const { id } = useParams();
    console.log(id)

    // 1. DEFINE EL ESTADO PARA GUARDAR LA CANCIÓN
    const [cancionBuscada, setCancionBuscada] = useState({});

    // buscar cancion
    const buscarCancion = (id) => {
        const cancionEncontrada = canciones.find((item) => item.idCancion === id)
        return cancionEncontrada
    }

    useEffect(() => {
        // busca en array canciones la cancion que tiene el ID
        const cancionBuscada = buscarCancion(id)
        setCancionBuscada(cancionBuscada); 
    },[id, canciones])


    // variable de estado: pausa o play
    const [isPlaying, setIsPlaying] = useState(false);

    // Función para manejar el clic y la lógica del boton PLAY y PAUSE
    const handlePlayPause = () => {
        // Invierte el estado actual
        const newState = !isPlaying;
        setIsPlaying(newState);

        // Lógica del SweetAlert y el ícono
        if (newState) {
            // Si pasa a 'Reproduciendo' (Play)
            Swal.fire({
                title: '¡A Reproducir!',
                text: 'Tu canción se está reproduciendo. ¡Sube el volumen!',
                icon: 'success',
                timer: 2500, // Se cierra automáticamente en 2.5 segundos
                timerProgressBar: true,
                showConfirmButton: false
            });
        } else {
            // Si pasa a 'Pausa' (Pause)
            Swal.fire({
                title: 'Pausa',
                text: 'La canción ha sido pausada.',
                icon: 'info',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };


    return (
        <main>
            <section className='text-ligth position-relative'>
                {/* imagen portada de la cancion */}
                <div className='imagen-container'>
                    <Image src={imgPortada} className='imgPortadaCancion' fluid alt='imagen portada canción o album' />
                </div>
                {/*Overlay Superior Izquierda: "Artista Verificado" */}
                <div className="overlay top-left">
                    <span className="badge bg-success">Detalle Canción</span>
                </div>

                {/* Overlay centro: nombre Cancion */}
                <div className="overlay centered-text text-white p-2">
                    <h1 className="mb-0 fw-bold display-1 px-3">{cancionBuscada.nombreCancion}</h1>
                </div>

                {/* Overlay Inferior Izquierda: Detalles */}
                <div className="overlay bottom-left text-white p-2">
                    <p className="mb-0"><span className='fw-bold'>{cancionBuscada.artistaGrupo} - {cancionBuscada.nombreAlbun}</span> - {cancionBuscada.anioCancion} - {cancionBuscada.duracionCancion} - 3.421.608.407</p>
                </div>
            </section>


            <section className='container my-3 d-flex justify-content-start align-items-center gap-4'>
                {/* ------boton PLAY ára escuchar la cancion --------*/}
                <Button
                    variant='success'
                    className='botonPlay d-flex justify-content-center align-items-center rounded-circle'
                    onClick={handlePlayPause}
                    title={isPlaying ? "Pausar canción" : "Reproducir canción"}>
                    <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'} fs-1 text-white`}></i>
                </Button>

                <Link className='text-light' title="Guardar en tu Biblioteca">
                    <i className="bi bi-plus-circle fs-1"></i>
                </Link>

                <Link className='text-light' title='Más opciones'>
                    <i className="bi bi-three-dots fs-1"></i>
                </Link>
            </section>


            {/* ----- informacion del cantante o banda -------- */}
            <section className='container d-flex justify-content-center align-items-center mb-5'>
                <Image src={imgGrupo} className='galeria-circular-img rounded-circle' alt='imagen del grupo' />

                <div className='ms-3 fondoTransparente p-4'>
                    <div className='fw-bold fs-4 text-light'>Artista</div>
                    <Link className='fw-bold fs-4 text-light' to={''}>{cancionBuscada.artistaGrupo}</Link>
                </div>
            </section>

            {/* Tabla de canciones recomnedadas usando localStorage */}
            <section className='pt-2 ps-3 fondoTransparente'>
                <div className="d-flex align-items-center">
                    <h3>Recomendaciones</h3>
                    <p className="ms-3 mb-0 fw-bold">Basadas en esta canción</p>
                </div>
                <TablaCanciones canciones={canciones}></TablaCanciones>
            </section>

            {/* grilla de card usando localStorage */}
            <section>
                <h3 className='py-2 ps-3 mb-3 fondoTransparente'>Publicaciones Populares</h3>
                <Container>
                    <Row xs={2} md={3} lg={4} className="g-4 mb-4">
                        {
                            canciones.map((cancion) => <CardCancionesPopulares key={cancion.idCancion} cancionPopular={cancion} ></CardCancionesPopulares>)
                        }
                    </Row>
                </Container>
            </section>


            {/* Grilla de imagenes circulares usando array maquetado*/}
            <section className='mb-5'>
                <h3 className='py-2 ps-3 fondoTransparente'>Artistas Recomendados</h3>
                <Container>
                    <Row xs={3} md={4} lg={6} className="g-6">
                        <Col>
                            <div className="text-center ">
                                <Image
                                    src={badBunnyImg}
                                    alt='Foto Bud Bunny'
                                    className="galeria-circular-img mb-2"
                                    roundedCircle
                                />
                                <p className="fw-bold text-dark">Bad Bunny</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <Image
                                    src={mariaBecerraImg}
                                    alt='Foto Bud Bunny'
                                    className="galeria-circular-img mb-2"
                                    roundedCircle
                                />
                                <p className="fw-bold text-dark">María Becerra</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <Image
                                    src={airbagImg}
                                    alt='Foto Bud Bunny'
                                    className="galeria-circular-img mb-2"
                                    roundedCircle
                                />
                                <p className="fw-bold text-dark">AirBag</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <Image
                                    src={luckRaImg}
                                    alt='Foto Bud Bunny'
                                    className="galeria-circular-img mb-2"
                                    roundedCircle
                                />
                                <p className="fw-bold text-dark">Luck Ra</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <Image
                                    src={bizarrapImg}
                                    alt='Foto Bud Bunny'
                                    className="galeria-circular-img mb-2"
                                    roundedCircle
                                />
                                <p className="fw-bold text-dark">Bizarrap</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-center">
                                <Image
                                    src={emiliaMernesImg}
                                    alt='Foto Bud Bunny'
                                    className="galeria-circular-img mb-2"
                                    roundedCircle
                                />
                                <p className="fw-bold text-dark"
                                >Emilia Mernes</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default DetalleCancion;