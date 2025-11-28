import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (data) => {
    console.log("Datos de registro:", data);
    
    
    
    Swal.fire({
      title: "¡Registro Exitoso!",
      text: "Tu cuenta ha sido creada. Ahora puedes iniciar sesión.",
      icon: "success",
    }).then(() => {
        
        navegacion('/login'); 
    });
  };

  return (
    <Container className="login-container">
    
      <Card className="login-card">
        <h1>Registrarse</h1>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
         
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresá tu nombre"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 2,
                  message: "El nombre debe tener al menos 2 caracteres",
                },
                maxLength: {
                    value: 50,
                    message: "El nombre no debe superar los 50 caracteres",
                  },
              })}
            />
            <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
          </Form.Group>

          
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
                    "El email debe cumplir con el siguiente formato correo@dominio.extension",
                },
              })}
            />
            <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
          </Form.Group>

         
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Este campo es obligatorio",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                  message:
                    "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial.",
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
            className="w-100 no-focus-outline"
          >
            Crear Cuenta
          </Button>
        </Form>
      
        <Button
          className="w-100 mt-3"
          variant="secondary"
          onClick={() => navegacion("/login")} 
        >
          ¿Ya tenés cuenta? Inicia Sesión
        </Button>
      </Card>
    </Container>
  );
};

export default Registro;