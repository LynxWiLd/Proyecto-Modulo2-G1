import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import { useAuth } from "../contenido/AuthContext";


export default function Register() {
  const { registerUser } = useAuth();
  const { register, handleSubmit, formState:{ errors } } = useForm();
  const navigate = useNavigate();