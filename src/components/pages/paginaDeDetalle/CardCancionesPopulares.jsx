import {Col, Card,Button} from 'react-bootstrap';


const CardCancionesPopulares = ({cancionPopular}) => {
    return (
        <Col>
            <Card className="card-con-boton">
                <div className="card-img-container position-relative p-2">
                    <Card.Img variant="top" src={cancionPopular.urlImgCancion} alt={`Imagen de la portada de la cancion ${cancionPopular.nombreCancion}`}/>

                    {/* El Botón de Play: Usa position-absolute y la clase para esconderlo */}
                    <Button
                        variant='success'
                        // Posicionamiento: absoluto, abajo (bottom-0), a la derecha (end-0)
                        className='boton-play-overlay position-absolute d-flex justify-content-center align-items-center rounded-circle'
                        title="Reproducir"
                    >
                        <i className="bi bi-play-fill fs-3 text-white"></i>
                    </Button>
                </div>

                <Card.Body>
                    <Card.Title>{cancionPopular.nombreCancion}</Card.Title>
                    <Card.Text>
                        {cancionPopular.nombreAlbum} - {cancionPopular.anioCancion}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardCancionesPopulares;