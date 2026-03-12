import "./CalificarEvento.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import clienteAxios from "../../../config/axios";

export default function CalificarEvento() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const evento = state?.evento;
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState("");

  const handleSubmit = async () => {

    console.log(parseInt(localStorage.getItem("usuarioId")) + " " + evento.id + " " + rating + " " + comentario);

    const nuevaCalificacion = {
      usuarioId: parseInt(localStorage.getItem("usuarioId")),
      eventoId: evento.id,
      calificacion: rating,
      comentario: comentario
    };

    try {
      const respuesta = await clienteAxios.post("/calificaciones", nuevaCalificacion);

      if (respuesta.status === 201) {
        navigate("/participaciones");
      }
    } catch (error) {
      console.error("Error al enviar la calificación:", error);
    }
  };
  if (!evento) {
    return (
      <div className="text-center my-5">
        <p className="text-danger h4">No se encontró información del evento.</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/participaciones")}>
          Volver a participaciones
        </button>
      </div>
    );
  }

  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center py-5">
      <div className="calificar-container d-flex flex-column align-items-center bg-gradient-primary-secondary p-4 gap-3 text-light">
        <h2 className="fw-bold">{evento.titulo}</h2>
        <h3 className="fw-bold">¿Cómo calificarías este evento?</h3>

        <div className="d-flex align-items-center gap-3">
          <div className="star-rating d-flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <i
                key={num}
                className={`bi bi-star-fill star-icon ${num <= rating ? "active" : ""}`}
                onClick={() => setRating(num)}
              ></i>
            ))}
          </div>

          <button
            className="btn btn-sm btn-light text-secondary fw-bold"
            onClick={() => setRating(0)}
          >
            Reset
          </button>
        </div>

        <div className="form-wrapper w-100">
          <label htmlFor="descripcionEvento" className="form-label">
            Descripción del evento:
          </label>
          <textarea
            className="form-control"
            id="descripcionEvento"
            rows={5}
            placeholder="Describe tu experiencia aquí..."
            required
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          ></textarea>
        </div>

        <button
          className="btn btn-light fw-bold w-100"
          onClick={handleSubmit}
          disabled={rating === 0}
        >
          Enviar calificación
        </button>
      </div>
    </div>
  );
}