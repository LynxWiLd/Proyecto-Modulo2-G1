// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleGoAdmin = () => {
    navigate("/admin");
  };

  const handleGoLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    onLogout();
    navigate("/"); // después de cerrar sesión, vuelve al home
  };

  const handleChangeUser = () => {
    onLogout();     // limpiamos usuario actual
    navigate("/login"); // vamos directo al login para elegir otro usuario
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Marca / logo */}
        <Link className="navbar-brand" to="/">
          Proyecto Música
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Links de la izquierda */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="btn nav-link"
                style={{ border: "none", background: "transparent" }}
                onClick={handleGoAdmin}
              >
                Admin
              </button>
            </li>
          </ul>

          {/* Zona de usuario a la derecha */}
          <ul className="navbar-nav ms-auto">
            {user ? (
              // 🔐 Usuario logueado: dropdown que se despliega hacia abajo
              <li className="nav-item dropdown">
                <button
                  className="btn nav-link dropdown-toggle d-flex align-items-center gap-2"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ border: "none", background: "transparent" }}
                  type="button"
                >
                  {/* Avatar redondo con inicial */}
                  <span
                    className="rounded-circle bg-light text-dark d-inline-flex justify-content-center align-items-center"
                    style={{ width: 32, height: 32, fontSize: 18 }}
                  >
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                  <span>{user.name}</span>
                </button>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={handleGoAdmin}
                    >
                      Ir al panel de admin
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={handleChangeUser}
                    >
                      Cambiar de usuario
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      type="button"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              // Sin usuario: botón que lleva a login
              <li className="nav-item">
                <button
                  className="btn nav-link d-flex align-items-center gap-2"
                  style={{ border: "none", background: "transparent" }}
                  type="button"
                  onClick={handleGoLogin}
                >
                  <span
                    className="rounded-circle bg-light text-dark d-inline-flex justify-content-center align-items-center"
                    style={{ width: 32, height: 32, fontSize: 18 }}
                  >
                    ?
                  </span>
                  <span>Iniciar sesión</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
