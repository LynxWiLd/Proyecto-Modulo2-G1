
import "../styles/error404.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Error404() {
  return (
    <div className="error404-container d-flex justify-content-center align-items-center text-center">
      <div className="card error404-card p-5 shadow-lg">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3 text-secondary">Página no encontrada</h2>
        <p className="mb-4 text-muted">
          La página que buscás no existe.
        </p>
        <a href="/" className="btn btn-success btn-lg px-4">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
