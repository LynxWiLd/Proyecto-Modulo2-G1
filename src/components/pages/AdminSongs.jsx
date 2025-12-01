// src/components/admin/AdminSongs.jsx  (o donde esté tu archivo)
import { useEffect, useState } from "react";
import FormularioCancion from "../shared/FormularioCancion";

const STORAGE_KEY = "canciones_admin";

function AdminSongs({ user }) {
  // Si están usando login, esto evita entrar sin usuario
  if (!user) {
    return (
      <main className="container py-5">
        <h1>Acceso denegado</h1>
        <p>Debes iniciar sesión para ver esta página.</p>
      </main>
    );
  }

  // 1️⃣ ESTADO: CANCIONES + LOCALSTORAGE
  const [canciones, setCanciones] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("Error leyendo canciones de localStorage", err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(canciones));
    } catch (err) {
      console.error("Error guardando canciones en localStorage", err);
    }
  }, [canciones]);

  // 2️⃣ CREAR CANCIÓN: RECIBE LOS DATOS VALIDOS DEL FORMULARIO
  const crearCancion = (data) => {
    const nuevaCancion = {
      idCancion: crypto.randomUUID(), // ID aleatorio
      ...data,                        // artistaGrupo, nombreCancion, etc.
    };

    setCanciones((prev) => [...prev, nuevaCancion]);
  };

  // Borrar canción (para tener una acción básica en la tabla)
  const eliminarCancion = (idCancion) => {
    if (!window.confirm("¿Seguro que querés borrar esta canción?")) return;
    setCanciones((prev) => prev.filter((c) => c.idCancion !== idCancion));
  };

  return (
    <main>
      {/* 🔹 FORMULARIO: usa la lógica de validación que ya hizo tu grupo */}
      <FormularioCancion
        titulo="Crear Canción"
        crearCancion={crearCancion}
        canciones={canciones}
      />

      {/* 3️⃣ TABLA + REPRODUCTOR */}
      <section className="container py-4">
        <h2 className="h4 text-success mb-3">Lista de canciones</h2>

        {canciones.length === 0 ? (
          <p className="text-light">Todavía no se creó ninguna canción.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-dark table-striped align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Álbum</th>
                  <th>Año</th>
                  <th>Categoría</th>
                  <th>Duración</th>
                  <th>Portada</th>
                  <th>Reproducir</th>
                  <th style={{ width: 120 }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {canciones.map((cancion, index) => (
                  <tr key={cancion.idCancion}>
                    <td>{index + 1}</td>
                    <td>{cancion.nombreCancion}</td>
                    <td>{cancion.artistaGrupo}</td>
                    <td>{cancion.nombreAlbum}</td>
                    <td>{cancion.anioCancion}</td>
                    <td>{cancion.categoriaCancion}</td>
                    <td>{cancion.duracionCancion}</td>
                    <td>
                      {cancion.urlImgCancion ? (
                        <img
                          src={cancion.urlImgCancion}
                          alt={cancion.nombreCancion}
                          style={{
                            width: 50,
                            height: 50,
                            objectFit: "cover",
                            borderRadius: 4,
                          }}
                        />
                      ) : (
                        <span className="text-muted">Sin imagen</span>
                      )}
                    </td>

                    {/* 🎧 AQUÍ SE REPRODUCE LA CANCIÓN */}
                    <td>
                      {cancion.urlCancion ? (
                        <audio controls src={cancion.urlCancion} />
                      ) : (
                        <span className="text-muted">Sin URL</span>
                      )}
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => eliminarCancion(cancion.idCancion)}
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

export default AdminSongs;
