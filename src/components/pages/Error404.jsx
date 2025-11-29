import "../styles/error404.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Error404() {
  return (
    <main
      className="error404-container d-flex justify-content-center align-items-center text-center"
      role="alert"
      aria-labelledby="error-title"
    >
      <section className="card error404-card p-5 shadow-lg">
        <h1 id="error-title" className="display-1 fw-bold text-danger error404-code">
          <i class="bi bi-ban"></i> 404
        </h1>

        <h2 className="mb-3 text-secondary fw-semibold">
          Ups… Página no encontrada
        </h2>

        <p className="mb-4 text-muted fs-5">
         Pero no te preocupes, siempre podés volver 😄
        </p>

        <a href="/" className="btn btn-success btn-lg px-4 error404-btn">
          ← Volver al inicio
        </a>
      </section>
    </main>
  );
}