import {Col,Image} from 'react-bootstrap';
import imgGrupo from '../../assets/imgDetalleCancion/Coldplay.jpg'

const CardArtistasRecomendados = ({artista}) => {
    return (
        <Col>
            <div className="text-center">
                <Image
                    src={imgGrupo}
                    alt="artista recomendado"
                    className="galeria-circular-img mb-2"
                    roundedCircle
                />

                {/* Título o nombre debajo de la imagen */}
                <p className="fw-bold">{artista.nombre}</p>
            </div>
        </Col>
    );
};

export default CardArtistasRecomendados;