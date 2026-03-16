import { useState, useEffect } from "react";
import profilePhoto from "../../assets/img/profile/profile-placeholder.webp";
import mios from "../../assets/img/profile/cards/mios.jpg";
import FormularioDatosUsuario from "../forms/FormularioDatosUsuario";
import { Link } from "react-router-dom";
import { IMAGES_BASE_URL } from "../../config/axios";
import LoginModal from "./CrearEventoModal";

export default function UserProfile() {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const rol = localStorage.getItem("rol");

  const obtenerImagen = (nombreImagen) => {
    if (!nombreImagen) return profilePhoto;
    if (nombreImagen.startsWith("http")) return nombreImagen;
    return `${IMAGES_BASE_URL}${nombreImagen}`;
  };

  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    localidad: "",
    bio: "",
    imagen: "",
    eventosCompletados: 0,

    telefono: "",
    sitioWeb: "",
  });

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        F;
        const esONG = rol === "ONG";
        const id = esONG
          ? localStorage.getItem("ongId")
          : localStorage.getItem("usuarioId");
        const endpoint = esONG
          ? `/api/organizaciones/${id}`
          : `/api/usuarios/${id}`;

        const response = await fetch(endpoint, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const datos = await response.json();

          if (esONG) {
            setUserData({
              nombre: datos.nombreOrganizacion || "",
              email: datos.email || "",
              localidad: datos.localidad || "Sin ubicación",
              bio: datos.descripcion || "Sin biografía",
              imagen: datos.logo || "",
              telefono: datos.telefono || "",
              sitioWeb: datos.sitioWeb || "",
              eventosCompletados: 999,
            });
          } else {
            setUserData({
              nombre: datos.nombre || "",
              apellidos: datos.apellido || "",
              email: datos.email || "",
              localidad: datos.localidad || "Sin ubicación",
              bio: datos.biografia || "Sin biografía",
              eventosCompletados: datos.eventosCompletados || 0,
              imagen: datos.foto || "",
            });
          }
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, [rol]);

  if (cargando) {
    return (
      <div className="container p-5 mt-5 mb-5 text-center">
        <h4 className="text-secondary">Cargando tu perfil real...</h4>
      </div>
    );
  }

  return (
    <section className="container p-5 mb-5">
      {!modoEdicion && (
        <h1 className="fw-bold text-tertiary mb-4 text-center">
          Bienvenido de vuelta, {userData.nombre}
        </h1>
      )}
      <div className="card shadow rounded-4 p-4 p-md-5 bg-white border-0">
        <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0">
            <img
              src={obtenerImagen(userData.imagen)}
              alt="Foto de perfil"
              className="rounded-circle border border-3 border-white shadow-sm mb-4"
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = profilePhoto;
              }}
            />
            <button
              onClick={() => setModoEdicion(true)}
              className="btn btn-secondary text-white fw-bold rounded-3 shadow-sm px-4 py-2 mt-auto"
            >
              Modificar Datos Personales
            </button>
          </div>

          <div className="col-md-8 ps-md-4">
            <div className="d-flex flex-column gap-2 mb-4">
              <div className="d-flex align-items-baseline">
                <p className="text-secondary fw-semibold me-2 mb-0">
                  {rol === "ONG" ? "Organización:" : "Nombre:"}
                </p>
                <span>
                  {userData.nombre} {userData.apellidos || ""}
                </span>
              </div>

              {rol === "ONG" && (
                <>
                  <div className="d-flex align-items-baseline">
                    <p className="text-secondary fw-semibold me-2 mb-0">
                      Teléfono:
                    </p>
                    <span>{userData.telefono}</span>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <p className="text-secondary fw-semibold me-2 mb-0">Web:</p>
                    <a href={userData.sitioWeb}>{userData.sitioWeb}</a>
                  </div>
                </>
              )}

              <div className="d-flex align-items-baseline">
                <p className="text-secondary fw-semibold me-2 mb-0">Correo:</p>
                <span>{userData.email}</span>
              </div>
            </div>

            <div className="border-top pt-4">
              <h5 className="mb-3 text-secondary fw-bold">
                {rol === "ONG" ? "Sobre nosotros" : "Biografía"}
              </h5>
              <p className="lh-base mb-0">{userData.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {modoEdicion && (
        <FormularioDatosUsuario
          datosActuales={userData}
          onCancelar={() => setModoEdicion(false)}
          onGuardar={(datosNuevos) => {
            setUserData(datosNuevos);
            setModoEdicion(false);
          }}
        />
      )}

      <div className="d-flex flex-row justify-content-around mt-5 flex-wrap gap-4">
        <div
          className="card shadow-sm rounded-4 border-0 p-3 bg-white"
          style={{ width: "16rem" }}
        >
          <h3 className="card-title h6 fw-bold text-dark mb-3 mt-2">
            Mis Eventos
          </h3>
          <div className="ratio ratio-4x3 mb-3">
            <img
              className="rounded-4 object-fit-cover"
              src={mios}
              alt="mis eventos"
            />
          </div>
          <div className="mt-auto text-center">
            <Link
              to="/mis-eventos"
              className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2"
            >
              Ver eventos
            </Link>
          </div>
        </div>

        <div
          className="card shadow-sm rounded-4 border-0 p-3 bg-white"
          style={{ width: "16rem" }}
        >
          <h3 className="card-title h6 fw-bold text-dark mb-3 mt-2">
            Crear Evento
          </h3>
          <div className="ratio ratio-4x3 mb-3">
            <img
              className="rounded-4 object-fit-cover"
              src={mios}
              alt="crear evento"
            />
          </div>

          <div className="mt-auto text-center">
            {userData.eventosCompletados >= 5 ? (
              <Link
                to="/eventos/crear"
                className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2"
              >
                Crear Evento
              </Link>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2"
                  onClick={() => setShowModal(true)}
                >
                  Crear Evento
                </button>
              </>
            )}
          </div>
        </div>

        <div
          className="card shadow-sm rounded-4 border-0 p-3 bg-white"
          style={{ width: "16rem" }}
        >
          <h3 className="card-title h6 fw-bold text-dark mb-3 mt-2">
            Participaciones
          </h3>
          <div className="ratio ratio-4x3 mb-3">
            <img
              className="rounded-4 object-fit-cover"
              src={mios}
              alt="participaciones"
            />
          </div>
          <div className="mt-auto text-center">
            <Link
              to="/participaciones"
              className="btn btn-primary text-light fw-bold w-100 rounded-3 py-2"
            >
              historico
            </Link>
          </div>
        </div>
      </div>
      <LoginModal
        open={showModal}
        setOpenModal={setShowModal}
        mensaje={`¡Casi puedes crear tu evento! Te falta participar en ${5 - userData.eventosCompletados} eventos más para desbloquear esta función.`}
      />
    </section>
  );
}
