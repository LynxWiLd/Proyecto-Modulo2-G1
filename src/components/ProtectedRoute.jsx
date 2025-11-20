import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  // Si NO hay usuario → REDIRIGIR A LOGIN
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario → mostrar la página
  return children;
}
