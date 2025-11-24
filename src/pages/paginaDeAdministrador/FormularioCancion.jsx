import Form from 'react-bootstrap/Form';

const FormularioCancion = () => {
    return (
        <main className='container mb-3'>
            <h1>titulo</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlIdCancion">
                    <Form.Label>ID:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlArtistaGrupo">
                    <Form.Label>Artista/Grupo:</Form.Label>
                    <Form.Control type="text" placeholder='Nombre del Artista o Grupo'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTituloCancion">
                    <Form.Label>Título Canción:</Form.Label>
                    <Form.Control type="text" placeholder='Nombre de la canción'/>
                </Form.Group>
                 <Form.Group className="mb-3" controlId="exampleForm.ControlAlbumCancion">
                    <Form.Label>Album:</Form.Label>
                    <Form.Control type="text" placeholder='Nombre del Album'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </main>
    );
};

export default FormularioCancion;

// idCancion
// artistaGrupoCancion
// tituloCancion
// albumCancion
// anioCancion
// categoriaCancion
// duracionCancion
// nroReprodccionesCancion
// urlImagenCancion
// urlCancion