import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useAuth } from "../contenido/AuthContext";
import "../styles/stylologin.css";

const Login = () => {
   const{
register,
 handleSubmit,
  formState: { errors }
} = useForm();
const { login } = useAuth();
const navigate = useNavigate();

const onSubmit = (data) => {
    const ok = login (data.email, data.password);
       if (ok) {
      Swal.fire("Bienvenido!", "Sesión iniciada correctamente", "success");
      navigate("/");
    } else {
      Swal.fire("Error", "Email o contraseña incorrectos", "error");
    }
  };
  







}
   
   


export default Login;