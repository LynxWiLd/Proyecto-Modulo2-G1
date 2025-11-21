
import Image from 'react-bootstrap/Image';
import imgPortada from '../assets/Coldplay.jpg'


const DetalleCancion = () => {
    return (
        <main className='fondoDetalleCancion'>
             <Image src={imgPortada} className='imgPortadaCancion' fluid alt='imagen portada canción o album'/>;
            <h1>Detalle Cancion</h1>
        </main>
    );
};

export default DetalleCancion;