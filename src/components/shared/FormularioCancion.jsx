import { useState } from "react";
import { Button, Col, Row, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioCancion = ({
  titulo = "Crear Canción",
  crearCancion,
  actualizarCancion,
  eliminarCancion,
  canciones = [],
}) => {
  const [cancionEditando, setCancionEditando] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    if (cancionEditando) {
      const cancionActualizada = {
        ...cancionEditando,
        ...data,
      };

      if (!actualizarCancion) {
        Swal.fire({
          title: "Error",
          text: "No se pudo actualizar la canción.",
          icon: "error",
        });
        return;
      }

      actualizarCancion(cancionActualizada);

      Swal.fire({
        title: "Canción actualizada",
        text: `La canción "${cancionActualizada.nombreCancion}" fue actualizada correctamente.`,
        icon: "success",
      });

      setCancionEditando(null);
      reset();
      return;
    }

    if (!crearCancion) {
      Swal.fire({
        title: "Error",
        text: "No se pudo crear la canción.",
        icon: "error",
      });
      return;
    }

    const cancionBuscada = canciones.find(
      (cancion) =>
        cancion.nombreCancion.toLowerCase().trim() ===
          data.nombreCancion.toLowerCase().trim() &&
        cancion.artistaGrupo.toLowerCase().trim() ===
          data.artistaGrupo.toLowerCase().trim()
    );

    if (cancionBuscada) {
      Swal.fire({
        title: "Canción ya existente",
        text: `La canción "${data.nombreCancion}" de "${data.artistaGrupo}" ya existe.`,
        icon: "error",
      });
      reset();
      return;
    }

    const nuevaCancion = {
      ...data,
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
    };

    crearCancion(nuevaCancion);

    Swal.fire({
      title: "Canción creada",
      text: `La canción "${data.nombreCancion}" fue creada correctamente.`,
      icon: "success",
    });

    reset();
  };

  const manejarEditar = (cancion) => {
    setCancionEditando(cancion);

    reset({
      artistaGrupo: cancion.artistaGrupo,
      nombreCancion: cancion.nombreCancion,
      nombreAlbum: cancion.nombreAlbum,
      anioCancion: cancion.anioCancion,
      categoriaCancion: cancion.categoriaCancion,
      duracionCancion: cancion.duracionCancion,
      urlImgCancion: cancion.urlImgCancion,
      urlCancion: cancion.urlCancion,
    });
  };

  const cancelarEdicion = () => {
    setCancionEditando(null);
    reset();
  };

  const manejarEliminar = (cancion) => {
    Swal.fire({
      title: "¿Eliminar canción?",
      text: `Se eliminará "${cancion.nombreCancion}" de ${cancion.artistaGrupo}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        if (!eliminarCancion) {
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar la canción.",
            icon: "error",
          });
          return;
        }

        eliminarCancion(cancion.id);

        Swal.fire({
          title: "Eliminada",
          text: "La canción fue eliminada correctamente.",
          icon: "success",
        });

        if (cancionEditando?.id === cancion.id) {
          cancelarEdicion();
        }
      }
    });
  };

  return (
    <main className="container mb-3">
      <h1 className="py-3 text-success text-center">
        {cancionEditando ? "Editar Canción" : titulo}
      </h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Form.Group
              controlId="exampleForm.ControlIdCancion"
              className="text-light mb-3"
            >
              <Form.Label>ID:</Form.Label>
              <Form.Control
                type="text"
                placeholder="ID Canción se crea aleatoriamente"
                value={
                  cancionEditando?.id
                    ? cancionEditando.id
                    : "Se asignará automáticamente"
                }
                disabled
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} lg={6}>
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
                      "El artista o Grupo debe contener como máximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.artistaGrupo?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

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
                      "El año de la canción debe ser igual o menor a 2025",
                  },
                  pattern: {
                    value: /^\d{4}$/,
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
                  required: "Debe seleccionar una categoria",
                })}
              >
                <option value="">Seleccione una Categoría</option>
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
                    message:
                      "La duración de la canción debe contener como mínimo 1 caracter",
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

        <Row>
          <Col xs={12}>
            <Form.Group
              controlId="exampleForm.ControlUrlImgCancion"
              className="text-dark mb-3"
            >
              <Form.Label>URL Imagen portada:</Form.Label>
              <Form.Control
                type="url"
                {...register("urlImgCancion", {
                  required:
                    "La URL de la imagen de portada de la canción es un dato obligatorio",
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
              <Form.Label>URL o mp3 para reproducir canción:</Form.Label>

              <Form.Control
                type="url"
                placeholder="Pegá una URL directa a mp3 o subí un archivo"
                {...register("urlCancion", {
                  required: "La URL de la canción es un dato obligatorio",
                })}
              />
              <Form.Text className="text-danger">
                {errors.urlCancion?.message}
              </Form.Text>

              <Form.Control
                type="file"
                accept="audio/mp3"
                className="mt-2"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const objectUrl = URL.createObjectURL(file);
                    setValue("urlCancion", objectUrl);
                    Swal.fire({
                      title: "Archivo mp3 cargado",
                      text: `Se cargó ${file.name}`,
                      icon: "success",
                    });
                  }
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center py-3 d-flex gap-3 justify-content-center">
          <Button variant="success px-5" type="submit">
            {cancionEditando ? "Guardar cambios" : "Enviar"}
          </Button>
          {cancionEditando && (
            <Button
              variant="secondary px-4"
              type="button"
              onClick={cancelarEdicion}
            >
              Cancelar edición
            </Button>
          )}
        </div>
      </Form>

      <section className="mt-4">
        <h2 className="text-center text-light mb-3">Lista de canciones</h2>

        {canciones.length === 0 ? (
          <p className="text-center text-muted">
            Todavía no hay canciones cargadas.
          </p>
        ) : (
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Canción</th>
                <th>Album</th>
                <th>Año</th>
                <th>Categoría</th>
                <th>Duración</th>
                <th>Reproducir</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {canciones.map((cancion, index) => (
                <tr key={cancion.id || index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      {cancion.urlImgCancion && (
                        <img
                          src={cancion.urlImgCancion}
                          alt={cancion.nombreCancion}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                        />
                      )}
                      <div>
                        <div className="fw-semibold">
                          {cancion.nombreCancion}
                        </div>
                        <div className="text-muted small">
                          {cancion.artistaGrupo}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{cancion.nombreAlbum}</td>
                  <td>{cancion.anioCancion}</td>
                  <td>{cancion.categoriaCancion}</td>
                  <td>{cancion.duracionCancion}</td>
                  <td>
                    {cancion.urlCancion && (
                      <audio
                        controls
                        src={cancion.urlCancion}
                        style={{ width: "180px" }}
                      />
                    )}
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => manejarEditar(cancion)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => manejarEliminar(cancion)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </main>
  );
};

export default FormularioCancion;
