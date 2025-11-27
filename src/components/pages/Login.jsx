import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useAuth } from "../routes/AuthContext";
import "../styles/stylologin.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const ok = login(data.email, data.password);
    if (ok) {
      Swal.fire("Bienvenido!", "Sesión iniciada correctamente", "success");
      navigate("/");
    } else {
      Swal.fire("Error", "Email o contraseña incorrectos", "error");
    }
  };

  return (
    <Container className="login-container">
      <Card className="login-card">
        <h3 className="text-center mb-3">Iniciar Sesión</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresá tu email"
              {...register("email", { required: "Este campo es obligatorio" })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresá tu contraseña"
              {...register("password", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </Form.Group>

          <Button
            type="submit"
            variant="success"
            className="w-100 no-focus-outline"
          >
            Ingresar
          </Button>
        </Form>

        <Button
          className="w-100 mt-3"
          variant="secondary"
          onClick={() => navigate("/register")}
        >
          ¿No tenés cuenta? Registrate
        </Button>
      </Card>
    </Container>
  );
}
