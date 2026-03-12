import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import GrupoDeCardEventoSmall from "../components/cards/GrupoDeCardEventoSmall";
import { formatearFechaHora } from "../utilities/formatearFechaHora"

export default function MisEventos() {
  const [inscripciones, setInscripciones] = useState([]);
  const [publicados, setPublicados] = useState([]);
  const [pendientes, setPendientes] = useState([]);

  const id = Number(localStorage.getItem("usuarioId"));

  useEffect(() => {

    const fetchInscripciones = async () => {
      try {
        const response = await clienteAxios.get(`/mis-eventos/inscritos/${id}`);
        let eventosFormateados = response.data.map(item => {
          const { fecha, hora } = formatearFechaHora(item[4]);
          return {
            id: item[0],
            titulo: item[1],
            imagen: item[2],
            descripcionEvento: item[3],
            fechaDisplay: fecha,
            horaDisplay: hora,
            categoria: item[5],
            descripcionCategoria: item[6],
            material: item[7],
            ubicacion: item[8],
            participantes: item[9]
          };
        });
        setInscripciones(eventosFormateados);
      } catch (error) {
        console.error("Error al obtener las inscripciones:", error);
      }
    };

    const fetchPublicados = async () => {
      try {
        const response = await clienteAxios.get(`/mis-eventos/publicados/${id}`);
        let eventosFormateados = response.data.map(item => {
          const { fecha, hora } = formatearFechaHora(item[4]);
          return {
            id: item[0],
            titulo: item[1],
            imagen: item[2],
            descripcionEvento: item[3],
            fechaDisplay: fecha,
            horaDisplay: hora,
            categoria: item[5],
            descripcionCategoria: item[6],
            material: item[7],
            ubicacion: item[8],
            participantes: item[9]
          };
        });
        setPublicados(eventosFormateados);
      } catch (error) {
        console.error("Error al obtener los eventos publicados:", error);
      }
    };

    const fetchPendientes = async () => {
      try {
        const response = await clienteAxios.get(`/mis-eventos/pendientes/${id}`);
        let eventosFormateados = response.data.map(item => {
          const { fecha, hora } = formatearFechaHora(item[4]);
          return {
            id: item[0],
            titulo: item[1],
            imagen: item[2],
            descripcionEvento: item[3],
            fechaDisplay: fecha,
            horaDisplay: hora,
            categoria: item[5],
            descripcionCategoria: item[6],
            material: item[7],
            ubicacion: item[8],
            participantes: item[9]
          };
        });
        setPendientes(eventosFormateados);
      } catch (error) {
        console.error("Error al obtener los eventos pendientes:", error);
      }
    }

    fetchInscripciones();
       fetchPublicados();
       fetchPendientes();
  }, [id]);


  return (
    <div className="flex-grow-1 mt-5 container">
      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">INSCRITO</p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={inscripciones} ruta="/eventos" />
      </section>

      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">MIS EVENTOS PUBLICADOS</p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={publicados} ruta="/eventos" />
      </section>

      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">PENDIENTES DE APROBACIÓN</p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={pendientes} ruta="/eventos" />
      </section>
    </div>
  );
}
