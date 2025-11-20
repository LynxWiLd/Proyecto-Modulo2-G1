// src/pages/AdminSongs.jsx
import { useState } from 'react'
import { Table, Button, Modal, Form } from 'react-bootstrap'

const EMPTY_SONG = {
  title: 'hola',
  artist: '',
  album: '',
  genre: '',
  duration: '',
}

const MOCK_SONGS = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', album: 'Album 1', genre: 'Pop', duration: '03:30' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Rock', duration: '04:10' },
]

export default function AdminSongs({ user }) {
  // 🔐 control básico de admin
  const isAdmin = user?.role === 'admin'

  if (!isAdmin) {
    return (
      <div className="container py-4">
        <h2>Acceso denegado</h2>
        <p>Esta página solo está disponible para usuarios administradores.</p>
      </div>
    )
  }

  const [songs, setSongs] = useState(MOCK_SONGS)
  const [showModal, setShowModal] = useState(false)
  const [editingSong, setEditingSong] = useState(null)
  const [formValues, setFormValues] = useState(EMPTY_SONG)

  const handleOpenNew = () => {
    setEditingSong(null)
    setFormValues(EMPTY_SONG)
    setShowModal(true)
  }

  const handleOpenEdit = (song) => {
    setEditingSong(song)
    setFormValues(song)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setEditingSong(null)
    setFormValues(EMPTY_SONG)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleDelete = (id) => {
    if (window.confirm('¿Seguro que querés borrar esta canción?')) {
      setSongs((prev) => prev.filter((song) => song.id !== id))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingSong) {
      // ✏️ Editar
      setSongs((prev) =>
        prev.map((song) =>
          song.id === editingSong.id
            ? { ...editingSong, ...formValues }
            : song
        )
      )
    } else {
      // ➕ Agregar
      const newSong = {
        ...formValues,
        id: crypto.randomUUID(), // id único
      }
      setSongs((prev) => [...prev, newSong])
    }

    handleClose()
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Administración de canciones</h2>
        <Button variant="success" onClick={handleOpenNew}>
          Agregar canción
        </Button>
      </div>

      {songs.length === 0 ? (
        <p>No hay canciones cargadas.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>Género</th>
              <th>Duración</th>
              <th style={{ width: '160px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id}>
                <td>{index + 1}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.duration}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handleOpenEdit(song)}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(song.id)}
                    >
                      Borrar
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal para agregar / editar */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingSong ? 'Editar canción' : 'Agregar canción'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Artista</Form.Label>
              <Form.Control
                type="text"
                name="artist"
                value={formValues.artist}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Álbum</Form.Label>
              <Form.Control
                type="text"
                name="album"
                value={formValues.album}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Género</Form.Label>
              <Form.Control
                type="text"
                name="genre"
                value={formValues.genre}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duración (mm:ss)</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                value={formValues.duration}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              {editingSong ? 'Guardar cambios' : 'Agregar'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}
