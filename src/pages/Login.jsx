// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Acá definimos el usuario “válido”
    if (email === "artist@demo.com" && password === "1234") {
      onLogin({
        id: "artist-1",
        name: "Jose",
        role: "admin", // este usuario puede entrar a /admin
      });
      navigate("/admin"); // después de loguear, lo manda al admin
    } else {
      setError("Credenciales inválidas");
    }
  };

  return (
    <main className="container py-5">
      <h1 className="mb-4">Iniciar sesión</h1>

      <form
        onSubmit={handleSubmit}
        className="d-grid gap-3"
        style={{ maxWidth: 400 }}
      >
        <div>
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="artist@demo.com"
            required
          />
        </div>

        <div>
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="1234"
            required
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </main>
  );
}

export default Login;
