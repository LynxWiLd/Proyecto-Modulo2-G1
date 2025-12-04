import { Container, Form, Button } from "react-bootstrap";
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
        {/* Nombre Canción */}
        <Form.Group className="mb-3">
          <Form.Label>Título de la canción</Form.Label>
          <Form.Control
            type="text"
            {...register("nombreCancion", {
              required: "El título es obligatorio",
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreCancion?.message}
          </Form.Text>
        </Form.Group>

        {/* Artista */}
        <Form.Group className="mb-3">
          <Form.Label>Artista / Grupo</Form.Label>
          <Form.Control
            type="text"
            {...register("artistaGrupo", {
              required: "El artista es obligatorio",
            })}
          />
          <Form.Text className="text-danger">
            {errors.artistaGrupo?.message}
          </Form.Text>
        </Form.Group>

        {/* Álbum */}
        <Form.Group className="mb-3">
          <Form.Label>Álbum</Form.Label>
          <Form.Control
            type="text"
            {...register("albumCancion", {
              required: "El álbum es obligatorio",
            })}
          />
          <Form.Text className="text-danger">
            {errors.albumCancion?.message}
          </Form.Text>
        </Form.Group>

        {/* Año */}
        <Form.Group className="mb-3">
          <Form.Label>Año</Form.Label>
          <Form.Control
            type="number"
            {...register("anioCancion", {
              required: "El año es obligatorio",
              min: { value: 1900, message: "Año inválido" },
              max: { value: new Date().getFullYear(), message: "Año inválido" },
            })}
          />
          <Form.Text className="text-danger">
            {errors.anioCancion?.message}
          </Form.Text>
        </Form.Group>

        {/* Categoría */}
        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            {...register("categoriaCancion", {
              required: "La categoría es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.categoriaCancion?.message}
          </Form.Text>
        </Form.Group>

        {/* Duración */}
        <Form.Group className="mb-3">
          <Form.Label>Duración (ej: 3:45)</Form.Label>
          <Form.Control
            type="text"
            {...register("duracionCancion", {
              required: "La duración es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.duracionCancion?.message}
          </Form.Text>
        </Form.Group>

        {/* URL canción */}
        <Form.Group className="mb-3">
          <Form.Label>URL de la canción</Form.Label>
          <Form.Control
            type="text"
            {...register("urlCancion", {
              required: "La URL es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.urlCancion?.message}
          </Form.Text>
        </Form.Group>

        {/* Imagen */}
        <Form.Group className="mb-3">
          <Form.Label>URL de la imagen</Form.Label>
          <Form.Control
            type="text"
            {...register("imagenCancion", {
              required: "La imagen es obligatoria",
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagenCancion?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioCancion;
