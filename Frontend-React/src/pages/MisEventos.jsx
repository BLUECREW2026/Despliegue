import { useState, useEffect } from "react";
import clienteAxios from "../config/axios";
import GrupoDeCardEventoSmall from "../components/cards/GrupoDeCardEventoSmall";
import { formatearFechaHora } from "../utilities/formatearFechaHora";

export default function MisEventos() {
  const [inscripciones, setInscripciones] = useState([]);
  const [publicados, setPublicados] = useState([]);
  const [pendientes, setPendientes] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const usuarioId = localStorage.getItem("usuarioId");
  
  const esONG = Boolean(ongId);
  const idActivo = ongId || usuarioId;

  const mapearEventos = (data) => {
    if (!data || !Array.isArray(data)) return [];
    return data.map(item => {
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
  };

  useEffect(() => {
    if (!idActivo) return;

    const fetchDatos = async () => {
      try {
        // 1. Cargar Publicados / Gestionados (Para ambos)
        const urlPublicados = esONG 
          ? `/mis-eventos/publicados/ong/${idActivo}` 
          : `/mis-eventos/publicados/${idActivo}`;
        
        const resPub = await clienteAxios.get(urlPublicados);
        setPublicados(mapearEventos(resPub.data));

        // 2. Lógica condicional por ROL
        if (!esONG) {
          // SOLO SI ES USUARIO: Cargamos Inscripciones y Pendientes
          const [resIns, resPen] = await Promise.all([
            clienteAxios.get(`/mis-eventos/inscritos/${idActivo}`),
            clienteAxios.get(`/mis-eventos/pendientes/${idActivo}`)
          ]);
          setInscripciones(mapearEventos(resIns.data));
          setPendientes(mapearEventos(resPen.data));
        }
        
      } catch (error) {
        console.error("Error al cargar los eventos:", error);
      }
    };

    fetchDatos();
  }, [idActivo, esONG]);

  return (
    <div className="flex-grow-1 mt-5 container">
      {/* SECCIÓN USUARIO: Mis Inscripciones */}
      {!esONG && (
        <section className="mb-5">
          <div className="text-center mb-4">
            <p className="text-secondary h2 fw-bold">MIS INSCRIPCIONES</p>
            <hr className="w-25 mx-auto" />
          </div>
          <GrupoDeCardEventoSmall datos={inscripciones} ruta="/eventos" />
        </section>
      )}

      {/* SECCIÓN AMBOS: Publicados / Gestionados */}
      <section className="mb-5">
        <div className="text-center mb-4">
          <p className="text-secondary h2 fw-bold">
            {esONG ? "MIS EVENTOS GESTIONADOS" : "MIS EVENTOS PUBLICADOS"}
          </p>
          <hr className="w-25 mx-auto" />
        </div>
        <GrupoDeCardEventoSmall datos={publicados} ruta="/eventos" />
      </section>

      {/* SECCIÓN USUARIO: Pendientes (Las ONGs no ven esto) */}
      {!esONG && (
        <section className="mb-5">
          <div className="text-center mb-4">
            <p className="text-secondary h2 fw-bold">PENDIENTES DE APROBACIÓN</p>
            <hr className="w-25 mx-auto" />
          </div>
          <GrupoDeCardEventoSmall datos={pendientes} ruta="/eventos" />
        </section>
      )}
    </div>
  );
}