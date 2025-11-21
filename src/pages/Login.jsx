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








}
   
   


export default Login;