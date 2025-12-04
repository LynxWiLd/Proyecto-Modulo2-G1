import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormularioCancion = ({
  titulo,
  crearCancion,
  editarCancion,
  canciones,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const navigate = useNavigate();

  // Si estamos editando, cargar los datos iniciales
  const cancionEditar = canciones.find((song) => song.id === id);

  useEffect(() => {
    if (titulo === "Editar Canción" && cancionEditar) {
      reset(cancionEditar);
    }
  }, [titulo, cancionEditar, reset]);

  const onSubmit = (data) => {
    // Verificar si ya existe una canción igual (título + artista)
    const existe = canciones.some(
      (song) =>
        song.nombreCancion?.toLowerCase() ===
          data.nombreCancion.toLowerCase() &&
        song.artistaGrupo?.toLowerCase() === data.artistaGrupo.toLowerCase() &&
        song.id !== id
    );

    if (existe) {
      Swal.fire({
        icon: "error",
        title: "Ya existe esta canción",
        text: "Intentá con otro título o artista.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    if (titulo === "Editar Canción") {
      editarCancion(id, data);
      Swal.fire({
        icon: "success",
        title: "Canción editada correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      crearCancion(data);
      Swal.fire({
        icon: "success",
        title: "Canción creada correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    setTimeout(() => navigate("/administracion"), 1500);
  };

  return (
    <Container className="my-4">
      <h1 className="display-5">{titulo}</h1>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Fila 1: Artista/Grupo */}
        <Row>
          <Col xs={12}>
            <Form.Group
              controlId="exampleForm.ControlArtistaGrupo"
              className="text-dark mb-3"
            >
              <Form.Label>Artista/Grupo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del Artista o Grupo"
                {...register("artistaGrupo", {
                  required: "El artista o Grupo es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message:
                      "El artista o Grupo debe contener como mínimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "El artista debe contener como máximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.artistaGrupo?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        {/* Fila 2: Título Canción y Album */}
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Form.Group
              controlId="exampleForm.ControlTituloCancion"
              className="text-dark mb-3"
            >
              <Form.Label>Título Canción:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de la canción"
                {...register("nombreCancion", {
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
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreCancion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Form.Group
              controlId="exampleForm.ControlAlbumCancion"
              className="text-dark mb-3"
            >
              <Form.Label>Album:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del Album"
                {...register("nombreAlbum", {
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
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreAlbum?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        {/* Fila 3: Año Canción y Categoría (Select) y duracion */}
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Form.Group
              controlId="exampleForm.ControlAnioCancion"
              className="text-dark mb-3"
            >
              <Form.Label>Año Canción:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Año Canción"
                {...register("anioCancion", {
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
                    message:
                      "Por favor, ingresa un año válido (cuatro dígitos).",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.anioCancion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Form.Group
              controlId="exampleForm.ControlCategoriaCancion"
              className="text-dark mb-3"
            >
              <Form.Label>Categoría:</Form.Label>
              <Form.Select
                aria-label="Seleccionar Categoría"
                {...register("categoriaCancion", {
                  required: "Debe seleccionar una Categoría",
                })}
              >
                <option value="">Seleccione uns Categoría</option>
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
            <Form.Group
              controlId="exampleForm.ControlduracionCancion"
              className="text-dark mb-3"
            >
              <Form.Label>Duración Canción:</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM:SS"
                {...register("duracionCancion", {
                  required: "La duración de la canción es un dato obligatorio",
                  minLength: {
                    value: 1,
                    message: "La duración de la canción como mínimo 1 caracter",
                  },
                  maxLength: {
                    value: 5,
                    message:
                      "La duración de la canción debe contener como máximo 5 caracteres, incluyendo los :",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.duracionCancion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        {/* Fila 5: URL Portada y URL Canción */}
        <Row>
          <Col xs={12}>
            <Form.Group
              controlId="exampleForm.ControlUrlImgCancion"
              className="text-dark mb-3"
            >
              <Form.Label>URL Imágen portada:</Form.Label>
              <Form.Control
                type="text"
                placeholder="archivo de imagen de portada de la canción"
                {...register("urlImgCancion", {
                  required:
                    "La URL de la imágen de portada de la canción es un dato obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.urlImgCancion?.message}
              </Form.Text>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group
              controlId="exampleForm.ControlUrlCancion"
              className="text-dark mb-3"
            >
              <Form.Label>URL:</Form.Label>
              <Form.Control
                type="text"
                placeholder="archivo para escuchar la canción"
                {...register("urlCancion", {
                  required: "La URL de la canción es un dato obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.urlCancion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center py-3">
          <Button variant="success px-5" type="submit">
            {" "}
            Enviar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default FormularioCancion;
