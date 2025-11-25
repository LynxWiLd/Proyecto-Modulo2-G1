import { Button, Col, Row, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioCancion = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    //titulo se pasara por props desde administrador
    const titulo = 'Crear Canción'

    const onSubmit = (data) => {
        console.log(data);

        if (titulo === 'Crear Canción') {
            //agreego la logica de creae
            // crearCancion(data)
            Swal.fire({
                title: "Canción Creada!",
                text: `La Canción fue creada correctamente.`,
                icon: "success"
            });
            reset()
        } else {
            // agrego logica para editar
        }
    };

    return (
        <main className='container mb-3'>
            <h1 className='py-3 text-success text-center'>{titulo}</h1>

            <Form onSubmit={handleSubmit(onSubmit)}>
                {/* Fila 1: ID y Artista/Grupo */}
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId="exampleForm.ControlIdCancion" className="text-light mb-3">
                            <Form.Label>ID:</Form.Label>
                            <Form.Control type="text" placeholder='ID Cancion se crea aleatoriamente' disabled />
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId="exampleForm.ControlArtistaGrupo" className="text-dark mb-3">
                            <Form.Label>Artista/Grupo:</Form.Label>
                            <Form.Control type="text" placeholder='Nombre del Artista o Grupo'  {...register("artistaGrupo", {
                                required: "El artista o Grupo es un dato obligatorio",
                                minLength: {
                                    value: 2,
                                    message:
                                        "El artista o Grupo debe contener como mínimo 2 caracteres",
                                },
                                maxLength: {
                                    value: 50,
                                    message:
                                        "El servicio debe contener como máximo 50 caracteres",
                                },
                            })} />
                            <Form.Text className="text-danger">{errors.artistaGrupo?.message}</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Fila 2: Título Canción y Album */}
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId="exampleForm.ControlTituloCancion" className="text-dark mb-3">
                            <Form.Label>Título Canción:</Form.Label>
                            <Form.Control type="text" placeholder='Nombre de la canción' {...register("nombreCancion", {
                                required: "El nombre de la canción es un dato obligatorio",
                                minLength: {
                                    value: 2,
                                    message:
                                        "El nombre de la canción debe contener como mínimo 2 caracteres",
                                },
                                maxLength: {
                                    value: 50,
                                    message:
                                        "El nombre de la canción debe contener como máximo 50 caracteres",
                                },
                            })} />
                            <Form.Text className="text-danger">{errors.nombreCancion?.message}</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId="exampleForm.ControlAlbumCancion" className="text-dark mb-3">
                            <Form.Label>Album:</Form.Label>
                            <Form.Control type="text" placeholder='Nombre del Album'  {...register("nombreAlbum", {
                                required: "El nombre del Album es un dato obligatorio",
                                minLength: {
                                    value: 2,
                                    message:
                                        "El nombre del Album debe contener como mínimo 2 caracteres",
                                },
                                maxLength: {
                                    value: 30,
                                    message:
                                        "El nombre del Album debe contener como máximo 30 caracteres",
                                },
                            })} />
                            <Form.Text className="text-danger">{errors.nombreAlbum?.message}</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Fila 3: Año Canción y Categoría (Select) y duracion */}
                <Row>
                    <Col xs={12} md={4} lg={4}>
                        <Form.Group controlId="exampleForm.ControlAnioCancion" className="text-dark mb-3">
                            <Form.Label>Año Canción:</Form.Label>
                            <Form.Control type="number" placeholder='Año Canción'  {...register("anioCancion", {
                                required: "El año de la canción es un dato obligatorio",
                                min: {
                                    value: 1900,
                                    message:
                                        "El año de la canción debe ser igual o mayor a 1900",
                                },
                                max: {
                                    value: 2025,
                                    message:
                                        "El año de la canción debe ser igual o mayor a 2025",
                                },
                                pattern: {
                                    value: /^\d{4}$/, // Asegura que sean 4 dígitos exactos
                                    message: "Por favor, ingresa un año válido (cuatro dígitos)."
                                },
                            })} />
                            <Form.Text className="text-danger">{errors.anioCancion?.message}</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Form.Group controlId="exampleForm.ControlCategoriaCancion" className="text-dark mb-3">
                            <Form.Label>Categoría:</Form.Label>
                            <Form.Select aria-label="Seleccionar Categoría" {...register("categoriaCancion", {
                                required: "Debe seleccionar una categoria",
                            })}>
                                <option value=''>Seleccione uns Categoría</option>
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
                            <Form.Text className="text-danger">
                                {errors.categoriaCancion?.message}
                            </Form.Text>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={4} lg={4}>
                        <Form.Group controlId="exampleForm.ControlduracionCancion" className="text-dark mb-3">
                            <Form.Label>Duración Canción:</Form.Label>
                            <Form.Control type="text" placeholder='MM:SS'  {...register("duracionCancion", {
                                required: "La duración de la canción es un dato obligatorio",
                                minLength: {
                                    value: 1,
                                    message:
                                        "La duración de la canción como mínimo 1 caracter",
                                },
                                maxLength: {
                                    value: 5,
                                    message:
                                        "La duración de la canción debe contener como máximo 5 caracteres, incluyendo los :",
                                },
                            })} />
                            <Form.Text className="text-danger">{errors.duracionCancion?.message}</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                {/* Fila 5: URL Portada y URL Canción */}
                {/* Nota: En pantallas muy grandes, podrías querer que estas URL ocupen la fila completa si son muy largas. Las dejo como 2 columnas por ahora. */}
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formFile" className="text-dark mb-3">
                            <Form.Label>URL Imágen portada:</Form.Label>
                            <Form.Control type="file" {...register("urlImgCancion", {
                                required: "La URL de la imágen de portada de la canción es un dato obligatorio",
                            })} />
                            <Form.Text className="text-danger">{errors.urlImgCancion?.message}</Form.Text>
                        </Form.Group>
                    </Col>

                    <Col xs={12}>
                        <Form.Group controlId="formFile" className="text-dark mb-3">
                            <Form.Label>URL ó mp3 para reproducir canción:</Form.Label>
                            <Form.Control type="file" {...register("urlCancion", {
                                required: "La URL de la canción es un dato obligatorio",
                            })} />
                            <Form.Text className="text-danger">{errors.urlCancion?.message}</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <div className='text-center py-3'>
                    <Button variant='success px-5' type='submit'> Enviar</Button>
                </div>
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