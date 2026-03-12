import userEvent from "@testing-library/user-event";
import "../../../assets/icons/bootstrap-icons.css";
import "./DesplegableUsuario.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import clienteAxios, { IMAGES_BASE_URL } from "../../../config/axios";

export default function DesplegableUsuario({ onLogout }) {
  const [usuarios, setUsuarios] = useState([]);
  const [imgError, setImgError] = useState(false);

const id = Number(localStorage.getItem("usuarioId"));

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await clienteAxios.get(`/usuarios/${id}`);
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    fetchUsuarios();
  }, [id]);
 

  return (
    <div className="dropdown d-flex align-items-center">
      <button
        className="btn p-0 border-0 d-flex align-items-center shadow-none dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {usuarios?.foto && !imgError ? (
          <img
            src={usuarios.foto.startsWith('http') ? usuarios.foto : `${IMAGES_BASE_URL}${usuarios.foto}?t=${Date.now()}`}
            alt="Foto perfil"
            className="rounded-circle object-fit-cover"
            style={{ width: "36px", height: "36px" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <i className="bi bi-person-circle text-secondary user-icon-btn"></i>
        )}
      </button>

      <ul className="dropdown-menu dropdown-menu-end shadow border-0 bg-white user-dropdown-menu">
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary"
            to="/perfil"
          >
            <i className="bi bi-person"></i> Mi Cuenta
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary"
            to="/mis-eventos"
          >
            <i className="bi bi-calendar-event"></i> Mis Eventos
          </Link>
        </li>
        {usuarios.eventosCompletados >= 5 ? (
         <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary"
            to="/eventos/crear"
          >
            <i className="bi bi-geo-alt-fill"></i> Crear Evento
          </Link>
        </li>
        ) :  <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary opacity-50 disabled"
            to="/eventos/crear"
          >
            <i className="bi bi-geo-alt-fill"></i> Crear Evento
          </Link>
        </li>}
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-secondary"
            to="/participaciones"
          >
            <i className="bibi bi-pencil-square"></i> Participaciones
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider border-secondary" />
        </li>
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2 py-2 text-danger" onClick={onLogout}
          >
            <i className="bi bi-calendar-event"></i> Cerrar
            Sesión
          </Link>
        </li>
      </ul>
    </div>
  );
}
