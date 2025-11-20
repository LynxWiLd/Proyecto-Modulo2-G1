import { useState } from "react";

const EMPTY_SONG = {
  title: "",
  artist: "",
  file: null,
};

function AdminSongs({ user }) {
  // 🔐 Solo admin
  const isAdmin = user?.role === "admin";

  if (!isAdmin) {
    return (
      <main className="container py-5">
        <h1>Acceso denegado</h1>
        <p>Esta página solo está disponible para usuarios administradores.</p>
      </main>
    );
  }

  const [songs, setSongs] = useState([]);
  const [form, setForm] = useState(EMPTY_SONG);
  const [editingId, setEditingId] = useState(null);

  // Manejo de inputs de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Manejo del archivo
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, file }));
  };

  const resetForm = () => {
    setForm(EMPTY_SONG);
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.artist.trim()) {
      alert("Título y artista son obligatorios");
      return;
    }

    // Para nueva canción hay que tener archivo
    if (!editingId && !form.file) {
      alert("Debes seleccionar un archivo de audio");
      return;
    }

    // Si hay archivo nuevo, generamos URL
    let audioUrl = null;

    if (form.file) {
      audioUrl = URL.createObjectURL(form.file);
    }

    if (editingId) {
      // ✏️ Editar canción existente
      setSongs((prev) =>
        prev.map((song) => {
          if (song.id !== editingId) return song;

          // Si subimos un archivo nuevo, borramos la URL anterior
          if (audioUrl && song.audioUrl) {
            URL.revokeObjectURL(song.audioUrl);
          }

          return {
            ...song,
            title: form.title,
            artist: form.artist,
            audioUrl: audioUrl || song.audioUrl,
          };
        })
      );
    } else {
      // ➕ Nueva canción
      const newSong = {
        id: crypto.randomUUID(),
        title: form.title,
        artist: form.artist,
        audioUrl,
      };

      setSongs((prev) => [...prev, newSong]);
    }

    resetForm();
  };

  const handleEdit = (song) => {
    setEditingId(song.id);
    setForm({
      title: song.title,
      artist: song.artist,
      file: null, // el archivo solo se vuelve a elegir si quiere cambiarlo
    });
    // el usuario puede cambiar solo título / artista sin tocar el archivo
  };

  const handleDelete = (id) => {
    if (!window.confirm("¿Seguro que querés borrar esta canción?")) return;

    setSongs((prev) => {
      const songToDelete = prev.find((s) => s.id === id);
      if (songToDelete?.audioUrl) {
        URL.revokeObjectURL(songToDelete.audioUrl);
      }
      return prev.filter((song) => song.id !== id);
    });
  };

  return (
    <main className="container py-5">
      <h1 className="mb-4">Administración de canciones</h1>

      {/* FORMULARIO */}
      <section className="mb-5">
        <h2 className="h4 mb-3">
          {editingId ? "Editar canción" : "Agregar nueva canción"}
        </h2>

        <form onSubmit={handleSubmit} className="d-grid gap-3" style={{ maxWidth: 500 }}>
          <div>
            <label className="form-label">Título</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="form-label">Artista</label>
            <input
              type="text"
              name="artist"
              className="form-control"
              value={form.artist}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="form-label">
              Archivo de audio {editingId && " (dejá vacío si no querés cambiarlo)"}
            </label>
            <input
              type="file"
              accept="audio/*"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              {editingId ? "Guardar cambios" : "Agregar canción"}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Cancelar edición
              </button>
            )}
          </div>
        </form>
      </section>

      {/* TABLA + REPRODUCTOR */}
      <section>
        <h2 className="h4 mb-3">Listado de canciones</h2>

        {songs.length === 0 ? (
          <p>No hay canciones cargadas.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-dark table-striped align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Reproducir</th>
                  <th style={{ width: 160 }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song, index) => (
                  <tr key={song.id}>
                    <td>{index + 1}</td>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>
                      {song.audioUrl ? (
                        <audio controls src={song.audioUrl} />
                      ) : (
                        <span className="text-muted">Sin archivo</span>
                      )}
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-light"
                          onClick={() => handleEdit(song)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(song.id)}
                        >
                          Borrar
                        </button>
                      </div>
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
