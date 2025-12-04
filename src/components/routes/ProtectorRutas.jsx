import { Navigate, Outlet } from "react-router-dom";

const ProtectorRutas = ({ usuarioLogueado }) => {
  if (!usuarioLogueado) {
    return <Navigate to="/login" />;
  }

  if (usuarioLogueado.rol !== "admin") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectorRutas;
