import {Col,Image} from 'react-bootstrap';


const CardArtistasRecomendados = ({artista}) => {
    return (
        <Col>
            <div className="text-center">
                <Image
                    src={"badBunnyImg"}
                    alt={`Foto de ${artista.nombre}`}
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

        {/* Para armar grilla de imagenes circulares  */}
                                {/* {
                                artistasRecomendados.map((artista, indice) => <CardArtistasRecomendados key={indice} artista={artista}></CardArtistasRecomendados>)
                                } */}