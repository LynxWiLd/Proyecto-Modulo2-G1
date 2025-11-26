import { useEffect } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Swal from "sweetalert2";

const FormularioCancion = ({ titulo, crearCancion, canciones, editarCancion, buscarCancion }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm();

    const {id} = useParams();
    
    useEffect(()=>{
        //si estoy editnado busco el objeto para dibujar en el formualrio
        if(titulo === 'Editar Cancion' && id ){
            const cancionABuscar = buscarCancion(id)
            console.log((cancionABuscar))
            
            if(cancionABuscar){
           
            setValue("artistaGrupo", cancionABuscar.artistaGrupo)
            setValue("nombreCancion", cancionABuscar.nombreCancion)
            setValue("nombreAlbum", cancionABuscar.nombreAlbum)
            setValue("anioCancion", cancionABuscar.anioCancion)
            setValue("categoriaCancion", cancionABuscar.categoriaCancion)
            setValue("duracionCancion", cancionABuscar.duracionCancion)
            setValue("urlImgCancion", cancionABuscar.urlImgCancion)
            setValue("urlCancion", cancionABuscar.urlCancion)
            }else{
                console.log('no se carga la cancion')
            }
            
          
        }
    },[]);

    const onSubmit = (data) => {
        console.log(data);

        if (titulo === 'Crear Canción') {
            //agreego la logica de CREAR CANCION

            // verificar que la CANCION Y ARTISTA no este repetida
            const cancionBuscada = canciones.find((cancion) =>
                // 1. Compara el nombre de la canción (limpio y minúsculas)
                cancion.nombreCancion.toLowerCase() === data.nombreCancion.toLowerCase().trim() &&
                // 2. Compara el artista (limpio y minúsculas)
                cancion.artistaGrupo.toLowerCase() === data.artistaGrupo.toLowerCase().trim()
            );
            console.log(cancionBuscada)

            if (cancionBuscada) {
                Swal.fire({
                    title: "Canción Ya Existente!",
                    text: `La Canción ${data.nombreCancion} ya existe.`,
                    icon: "error"
                });
                reset()
                return;
            } else {
                crearCancion(data)
                Swal.fire({
                    title: "Canción Creada!",
                    text: `La Canción ${data.nombreCancion} fue creada correctamente.`,
                    icon: "success"
                });
                reset()
            }
        }else{
            //agrego la logica de EDITAR CANCION
           editarCancion(id, data)
           Swal.fire({
            title: "Canción Editada!",
            text: `La Canción ${data.nombreCancion} fue editada correctamente.`,
            icon: "success"});
        }
    }

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
                                <option value="Rock">Rock</option>
                                <option value="Pop">Pop</option>
                                <option value="Electronica">Electrónica</option>
                                <option value="Cuarteto">Cuarteto</option>
                                <option value="Rap">Rap</option>
                                <option value="Folclore">Folclore</option>
                                <option value="Reggae">Reggae</option>
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
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="exampleForm.ControlUrlImgCancion" className="text-dark mb-3">
                            <Form.Label>URL Imágen portada:</Form.Label>
                            <Form.Control type="url" {...register("urlImgCancion", {
                                required: "La URL de la imágen de portada de la canción es un dato obligatorio",
                            })} />
                            <Form.Text className="text-danger">{errors.urlImgCancion?.message}</Form.Text>
                        </Form.Group>
                    </Col>

                    <Col xs={12}>
                        <Form.Group controlId="exampleForm.ControlUrlCancion" className="text-dark mb-3">
                            <Form.Label>URL ó mp3 para reproducir canción:</Form.Label>
                            <Form.Control type="url" {...register("urlCancion", {
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
