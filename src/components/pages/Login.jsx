import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "../styles/stylologin.css";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (data) => {
    let usuario = null;

    if (
      data.email === import.meta.env.VITE_ADMIN_EMAIL &&
      data.password === import.meta.env.VITE_ADMIN_PASSWORD
    ) {
      usuario = {
        email: data.email,
        rol: "admin",
      };

      Swal.fire({
        title: "¡Bienvenido al centro de control!",
        text: "Gestiona canciones y usuarios.",
        icon: "success",
      });

      navegacion("/administracion");
    } else if (
      data.email === import.meta.env.VITE_USER_EMAIL &&
      data.password === import.meta.env.VITE_USER_PASSWORD
    ) {
      usuario = {
        email: data.email,
        rol: "user",
      };

      Swal.fire({
        title: "¡Bienvenido!",
        text: "Tu música y sistema sincronizados.",
        icon: "success",
      });

      navegacion("/userPage");
    } else {
      return Swal.fire({
        title: "Ocurrió un error",
        text: "Usuario o contraseña incorrectos.",
        icon: "error",
      });
    }

    // Guardamos el usuario COMPLETO (email + rol)
    setUsuarioLogueado(usuario);
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuario));
  };

  return (
    <Container className="login-container">
      <Card className="login-card ">
        <h1>Iniciar Sesión</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresá tu email"
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El email debe cumplir con el siguiente formato carlos@admin.com",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresá tu contraseña"
              {...register("password", {
                required: "Este campo es obligatorio",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{5,16}$/,
                  message: "La contraseña debe tener entre 5 y 16 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>

          <Button
            type="submit"
            variant="success"
            className="w-100  btnverde no-focus-outline"
          >
            Ingresar
          </Button>
        </Form>
        <Button
          className="w-100 mt-3 "
          variant="secondary"
          onClick={() => navegacion("/register")}
        >
          ¿No tenés cuenta? Registrate
        </Button>
      </Card>
    </Container>
  );
};
export default Login;
