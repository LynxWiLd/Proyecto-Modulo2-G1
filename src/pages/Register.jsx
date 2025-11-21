import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useAuth } from "../contenido/AuthContext";


export default function Register() {
  const { registerUser } = useAuth();
  const { register, handleSubmit, formState:{ errors } } = useForm();
  const navigate = useNavigate();
    const onSubmit = (data) => {
    const ok = registerUser(data.nombre, data.email, data.password);

    if (ok) {
      Swal.fire("Registrado!", "Cuenta creada con éxito", "success");
      navigate("/login");
    } else {
      Swal.fire("Error", "El email ya está registrado", "error");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow w-100" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Registrarse</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" {...register("nombre", { required: "Campo obligatorio" })} />
            {errors.nombre && <small className="text-danger">{errors.nombre.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" {...register("email", { required: "Campo obligatorio" })} />
            {errors.email && <small className="text-danger">{errors.email.message}</small>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" {...register("password", { required: "Campo obligatorio", minLength: 6 })} />
            {errors.password && <small className="text-danger">{errors.password.message}</small>}
          </Form.Group>

          <Button type="submit" className="w-100">Registrar</Button>
        </Form>

        <Button variant="secondary" className="w-100 mt-3" onClick={() => navigate("/login")}>
          ¿Ya tenés cuenta? Iniciar Sesión
        </Button>
      </Card>
    </Container>
  );
}