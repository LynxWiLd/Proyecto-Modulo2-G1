
import Image from 'react-bootstrap/Image';
import imgPortada from '../assets/Coldplay.jpg'
import ListGroup from 'react-bootstrap/ListGroup';


const DetalleCancion = ({ arrayDetalleCancion }) => {
    return (
        <main className='fondoDetalleCancion'>
            <section className='imagen-container position-relative'>
                {/* portada de la cancion */}
                <Image src={imgPortada} className='imgPortadaCancion' fluid alt='imagen portada canción o album' />

                {/*Overlay Superior Izquierda: "Artista Verificado" */}
                <div className="overlay top-left">
                    {/* Clase de Bootstrap para el badge (fondo y forma) */}
                    <span className="badge bg-success">Canción</span>
                </div>

                {/* Overlay centro: nombre Cancion */}
                <div className="overlay centered-text text-white p-2">
                    <h1 className="mb-0 fw-bold display-1">YELLOW</h1>
                </div>

                {/* Overlay Inferior Izquierda: Detalles */}
                {/* p-2: padding de Bootstrap, text-white: color de texto de Bootstrap */}
                <div className="overlay bottom-left text-white p-2">
                    
                    <p className="mb-0 fs-3 "><span className='fw-bold'>ColdPlay - Parachutes</span> - 2000 - 4:26 - 3.421.608.407</p>
                </div>
            </section>

            <section className='container imagen-container position-relative my-5'>
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >Cras justo odio</ListGroup.Item>
                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </section>
        </main>

    );
};

export default DetalleCancion;