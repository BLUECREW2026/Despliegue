import GrupoDeCardEventoSmall from "../components/cards/GrupoDeCardEventoSmall";
import clienteAxios from "../config/axios";
import { useState, useEffect } from "react";

export default function Participaciones() {
  const [eventos, setNoticias] = useState([]);
  const id = localStorage.getItem("usuarioId");
  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await clienteAxios.get("/eventos/pendientes/" + id);
        const eventosFormateados = response.data.map((item) => ({
          id: item.idEvento,
          titulo: item.titulo,
          imagen: item.imagen,
          descripcionEvento: item.descripcion,
          fechaDisplay: item.fechaInicio,
          fechaFin: item.fechaFin,
          ubicacion: item.ubicacion,
          estadoEvento: item.estadoEvento,
          participantes: item.participantes,
          finalizado: item.finalizado,
          material: item.materialNecesario,
        }));
        setNoticias(eventosFormateados);
      } catch (error) {
        console.error("Error al obtener los eventos pendientes:", error);
      }
    };

    if (id) {
      fetchEventos();
    }
  }, [id]);
  return (
    <div className="flex-grow-1 mt-5">
      <div className="text-center">
        <p className="text-secondary h2">PENDIENTES DE CALIFICAR</p>
      </div>
      <GrupoDeCardEventoSmall datos={eventos} ruta="/participaciones/calificar-evento" />
    </div>
  );
}