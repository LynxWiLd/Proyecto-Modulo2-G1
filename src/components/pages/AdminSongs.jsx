import { useEffect, useState } from "react";
import FormularioCancion from "../shared/FormularioCancion";

const STORAGE_KEY = "canciones_admin";

function AdminSongs({ user }) {
  if (!user) {
    return (
      <main className="container py-5">
        <h1>Acceso denegado</h1>
        <p>Debes iniciar sesión para ver esta página.</p>
      </main>
    );
  }

  const [canciones, setCanciones] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const parsed = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(parsed)) return [];
      return parsed.map((c) => {
        const id =
          c.id ||
          c.idCancion ||
          (crypto.randomUUID ? crypto.randomUUID() : Date.now() + Math.random());
        return { ...c, id };
      });
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(canciones));
    } catch {}
  }, [canciones]);

  const crearCancion = (data) => {
    const id = data.id || (crypto.randomUUID ? crypto.randomUUID() : Date.now());
    const nuevaCancion = { ...data, id };
    setCanciones((prev) => [...prev, nuevaCancion]);
  };

  const actualizarCancion = (cancionActualizada) => {
    setCanciones((prev) =>
      prev.map((c) => (c.id === cancionActualizada.id ? cancionActualizada : c))
    );
  };

  const eliminarCancion = (id) => {
    setCanciones((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <main className="container py-4">
      <FormularioCancion
        titulo="Crear Canción"
        canciones={canciones}
        crearCancion={crearCancion}
        actualizarCancion={actualizarCancion}
        eliminarCancion={eliminarCancion}
      />
    </main>
  );
}

export default AdminSongs;
