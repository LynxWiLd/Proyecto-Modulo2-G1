
import Image from 'react-bootstrap/Image';
import imgPortada from '../assets/Coldplay.jpg'
import "../styles/detalleCancion.css";


const DetalleCancion = () => {
    return (
        <main className='fondoDetalleCancion'>
            <section className='imagen-container position-relative'>
                {/* portada de la cancion */}
                <Image src={imgPortada} className='imgPortadaCancion' fluid alt='imagen portada canción o album' />

                {/*Overlay Superior Izquierda: "Artista Verificado" */}
                <div className="overlay top-left">
                    {/* Clase de Bootstrap para el badge (fondo y forma) */}
                    <span className="badge bg-success">✅ Artista Verificado</span>
                </div>

                {/* Overlay Inferior Izquierda: Detalles */}
                {/* p-2: padding de Bootstrap, text-white: color de texto de Bootstrap */}
                <div className="overlay bottom-left text-white p-2">
                    <h5 className="mb-0">Nombre del Artista</h5>
                    <p className="mb-0">1.250.000 Reproducciones</p>
                </div>
            </section>
        </main>

    );
};

export default DetalleCancion;