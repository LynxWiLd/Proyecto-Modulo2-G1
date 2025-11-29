import { Navigate, Outlet } from "react-router-dom";

const ProtectorRutas = ({ usuarioLogueado }) => {
    // Si NO está logueado me redirige al login
    if (!usuarioLogueado) {
        return <Navigate to="/login" replace />;
    }

    
    return <Outlet />;
};

export default ProtectorRutas;
