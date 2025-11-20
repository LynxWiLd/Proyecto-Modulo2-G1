import { useState } from "react";

const EMPTY_SONG = {
  title: "",
  artist: "",
  album: "",
  file: null,
};

function AdminSongs({ user }) {
  if (!user) {
    return (
      <main className="container py-5">
        <h1>Acceso denegado</h1>
        <p>Debes iniciar sesión para ver esta página.</p>
      </main>
    );
  }

  const isAdmin = user.role === "admin";
  if (!isAdmin) {
    return (
      <main className="container py-5">
        <h1>Acceso denegado</h1>
        <p>Esta página solo está disponible para usuarios administradores.</p>
      </main>
    );
  }

  // 👇 Cada usuario tiene su propio storage
  const storageKey = `songs_${user.id}`;

  // Solo guardamos metadatos en localStorage (id, title, artist, album, ownerId)
  const [songs, setSongs] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error("Error leyendo canciones de localStorage", e);
      return [];
    }
  });

  // Mapa en memoria: id -> URL del audio (no persistente)
  const [audioMap, setAudioMap] = useState({});

  const [form, setForm] = useState(EMPTY_SONG);
  const [editingId, setEditingId] = useState(null);
  const [previewName, setPreviewName] = useState("");

  const saveToStorage = (newSongs) => {
    setSongs(newSongs);
    try {
      localStorage.setItem(storageKey, JSON.stringify(newSongs));
    } catch (e) {
      console.error("No se pudo guardar en localStorage", e);
    }
  };

  const resetForm = () => {
    setForm(EMPTY_SONG);
    setPreviewName("");
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setForm((prev) => ({ ...prev, file: null }));
      setPreviewName("");
      return;
    }

    const fileName = file.name.replace(/\.[^/.]+$/, "");
    setForm((prev) => ({
      ...prev,
      file,
      title: prev.title || fileName,
    }));
    setPreviewName(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.artist.trim() || !form.album.trim()) {
      alert("Título, artista y álbum son obligatorios");
      return;
    }

    if (!editingId && !form.file) {
      alert("Tenés que seleccionar un archivo de audio");
      return;
    }

    let newSongs = [...songs];
    let newAudioMap = { ...audioMap };

    if (editingId) {
      // ✏️ Editar
      newSongs = newSongs.map((song) => {
        if (song.id !== editingId) return song;

        let newUrl = song.audioUrlId ? audioMap[song.id] : null;

        if (form.file) {
          if (audioMap[song.id]) {
            URL.revokeObjectURL(audioMap[song.id]);
          }
          newUrl = URL.createObjectURL(form.file);
          newAudioMap[song.id] = newUrl;
        }

        return {
          ...song,
          title: form.title,
          artist: form.artist,
          album: form.album,
        };
      });
    } else {
      // ➕ Nueva canción
      const id = crypto.randomUUID();
      const audioUrl = URL.createObjectURL(form.file);

      const newSong = {
        id,
        ownerId: user.id, // 🔐 queda asociada al usuario
        title: form.title,
        artist: form.artist,
        album: form.album,
      };

      newSongs.push(newSong);
      newAudioMap[id] = audioUrl;
    }

    setAudioMap(newAudioMap);
    saveToStorage(newSongs);
    resetForm();
  };

  const handleEdit = (song) => {
    setEditingId(song.id);
    setForm({
      title: song.title,
      artist: song.artist,
      album: song.album,
      file: null,
    });
    setPreviewName("");
  };

  const handleDelete = (id) => {
    if (!window.confirm("¿Seguro que querés borrar esta canción?")) return;

    const newSongs = songs.filter((song) => song.id !== id);
    saveToStorage(newSongs);

    if (audioMap[id]) {
      URL.revokeObjectURL(audioMap[id]);
      const { [id]: _, ...rest } = audioMap;
      setAudioMap(rest);
    }
  };

  // Por seguridad extra: solo mostramos canciones cuyo ownerId coincide
  const userSongs = songs.filter((song) => song.ownerId === user.id);

  return (
    <main className="container py-5">
      <h1 className="mb-4">Tus canciones</h1>

      {/* FORMULARIO */}
      <section className="mb-5">
        <h2 className="h4 mb-3">
          {editingId ? "Editar canción" : "Subir nueva canción"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="d-grid gap-3"
          style={{ maxWidth: 600 }}
        >
          <div>
            <label className="form-label">Archivo de audio</label>
            <div
              className="border rounded p-3 d-flex flex-column gap-2"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              <input
                type="file"
                accept="audio/*"
                className="form-control"
                onChange={handleFileChange}
              />
              <small className="text-muted">
                Elegí un archivo de audio desde tu computadora.
              </small>
              {previewName && (
                <div className="mt-1">
                  <strong>Seleccionado:</strong> {previewName}
                </div>
              )}
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Título</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={form.title}
                onChange={handleChange}
                placeholder="Nombre de la canción"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Artista</label>
              <input
                type="text"
                name="artist"
                className="form-control"
                value={form.artist}
                onChange={handleChange}
                placeholder="Tu nombre artístico"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Álbum</label>
              <input
                type="text"
                name="album"
                className="form-control"
                value={form.album}
                onChange={handleChange}
                placeholder="Álbum / EP"
                required
              />
            </div>
          </div>

          <div className="d-flex gap-2 mt-2">
            <button type="submit" className="btn btn-primary">
              {editingId ? "Guardar cambios" : "Subir canción"}
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

      {/* LISTA DEL USUARIO ACTUAL */}
      <section>
        <h2 className="h4 mb-3">Canciones de {user.name}</h2>

        {userSongs.length === 0 ? (
          <p>No subiste ninguna canción todavía.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-dark table-striped align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                  <th>Artista</th>
                  <th>Álbum</th>
                  <th>Reproducir</th>
                  <th style={{ width: 160 }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {userSongs.map((song, index) => (
                  <tr key={song.id}>
                    <td>{index + 1}</td>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>
                      {audioMap[song.id] ? (
                        <audio controls src={audioMap[song.id]} />
                      ) : (
                        <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                          Para reproducirla, volvé a subir el archivo.
                        </span>
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
