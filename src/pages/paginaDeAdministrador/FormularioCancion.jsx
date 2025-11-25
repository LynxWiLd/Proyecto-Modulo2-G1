import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const FormularioCancion = () => {
    return (
        <main className='container mb-3'>
            <h1>titulo</h1>
            <Form>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlIdCancion">
                    <Form.Label>ID:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlArtistaGrupo">
                    <Form.Label>Artista/Grupo:</Form.Label>
                    <Form.Control type="text" placeholder='Nombre del Artista o Grupo' />
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlTituloCancion">
                    <Form.Label>Título Canción:</Form.Label>
                    <Form.Control type="text" placeholder='Nombre de la canción' />
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlAlbumCancion">
                    <Form.Label>Album:</Form.Label>
                    <Form.Control type="text" placeholder='Nombre del Album' />
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlAnioCancion">
                    <Form.Label>Año Canción:</Form.Label>
                    <Form.Control type="number" placeholder='Año Canción' />
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlCategoriaCancion">
                    <Form.Label>Categoría:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione Categoría</option>
                        <option value="Pop">Pop</option>
                        <option value="Rock">Rock</option>
                        <option value="Electronica">Electrónica</option>
                        <option value="HipHopRap">Hip Hop / Rap</option>
                        <option value="Reggaeton">Reggaetón</option>
                        <option value="Folclore">Folclore / Folk</option>
                        <option value="Reggae">Reggae / Ska</option>
                        <option value="Clasica">Clásica</option>
                        <option value="Tango">Tango</option>
                        <option value="Jazz">Jazz</option>
                        <option value="Blues">Blues</option>
                        <option value="Country">Country</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlduracionCancion">
                    <Form.Label>Duración Canción:</Form.Label>
                    <Form.Control type="text" placeholder='MM:SS' />
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlnroReproduccCancion">
                    <Form.Label>Nro de Reproducciones:</Form.Label>
                    <Form.Control type="number" placeholder='Reproducciones' />
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlUrlPortadaCancion">
                    <Form.Label>URL Imágen portada:</Form.Label>
                    <Form.Control type="text" placeholder='imagen de la portada de la canción/album' />
                </Form.Group>
                <Form.Group className="mb-3 text-dark" controlId="exampleForm.ControlUrlCancion">
                    <Form.Label>URL para reproducir canción:</Form.Label>
                    <Form.Control type="text" placeholder='URL para reproducir la canción' />
                </Form.Group>
            </Form>
            <Button>Enviar</Button>
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