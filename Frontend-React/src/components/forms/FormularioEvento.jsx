import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "./FormularioEvento.scss";
import SearchField from "../common/SearchField"
import geoIcon from "../../assets/icons/geo-alt-fill.svg";

const customIcon = new Icon({
  iconUrl: geoIcon,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});

// Componente para capturar el click manual
function ClickHandler({ onMapClick }) {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function Formulario_Evento() {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    categoria: '',
    requisitos: '',
    fecha: '',
    ubicacionTexto: '',
    lat: 40.4167,
    lng: -3.7037
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Función cuando se busca en el buscador
  const handleLocationFound = (label, lat, lng) => {
    setFormData(prev => ({ ...prev, ubicacionTexto: label, lat, lng }));
  };

  // Función cuando se hace click en el mapa
  const handleMapClick = (lat, lng) => {
    setFormData(prev => ({ ...prev, lat, lng }));
    console.log(lat + " " + lng)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      console.log("Datos del evento a enviar:", formData);
      alert("Evento creado con éxito. Revisa la consola.");
    }
    form.classList.add('was-validated');
  };

  return (
    <div className="container">
      <div className="row justify-content-center mb-5 mt-5">
        <div className="col-lg-8 col-md-10">
          <div className="card contact-card bg-light p-4 p-md-5 border-0 shadow rounded-4">
            <div className="card-body">
              <h2 className="text-secondary fw-bolder mb-4 text-center">
                Crear Evento
              </h2>
              <form className="needs-validation" noValidate onSubmit={handleSubmit}>

                {/* Título */}
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label fw-bold text-secondary">Título del evento:</label>
                  <input
                    type="text"
                    className="form-control bg-white"
                    id="titulo"
                    placeholder="Nombre del evento"
                    required
                    value={formData.titulo}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Imagen */}
                <div className="mb-3">
                  <label htmlFor="imagenEvento" className="form-label fw-bold text-secondary">Imagen:</label>
                  <input type="file" className="form-control" id="imagenEvento" accept="image/*" required />
                </div>

                {/* Descripción */}
                <div className="mb-4">
                  <label htmlFor="descripcion" className="form-label fw-bold text-secondary">Descripción del evento:</label>
                  <textarea
                    className="form-control bg-white"
                    id="descripcion"
                    rows={4}
                    placeholder="Describe el evento aquí..."
                    required
                    value={formData.descripcion}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="row">
                  {/* Categoría */}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="categoria" className="form-label fw-bold text-secondary">Categoría:</label>
                    <select id="categoria" className="form-select" required value={formData.categoria} onChange={handleInputChange}>
                      <option value="" disabled>Selecciona una...</option>
                      <option value="playa">Playa</option>
                      <option value="rio">Río</option>
                      <option value="costa">Costa</option>
                    </select>
                  </div>

                  {/* Fecha */}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fecha" className="form-label fw-bold text-secondary">Fecha:</label>
                    <input type="date" className="form-control bg-white" id="fecha" required value={formData.fecha} onChange={handleInputChange} />
                  </div>
                </div>

                {/* Requisitos */}
                <div className="mb-4">
                  <label htmlFor="requisitos" className="form-label fw-bold text-secondary">Requisitos:</label>
                  <input
                    type="text"
                    className="form-control bg-white"
                    id="requisitos"
                    placeholder="Ej: Traer guantes..."
                    required
                    value={formData.requisitos}
                    onChange={handleInputChange}
                  />
                </div>

                {/* UBICACIÓN Y MAPA */}
                <div className="mb-4">
                  <label htmlFor="ubicacionTexto" className="form-label fw-bold text-primary">
                    <i className="bi bi-geo-alt-fill me-2"></i>Ubicación:
                  </label>
                  <input
                    type="text"
                    className="form-control bg-white mb-3"
                    id="ubicacionTexto"
                    placeholder="Busca en el mapa o escribe la dirección"
                    required
                    value={formData.ubicacionTexto}
                    onChange={handleInputChange}
                  />

                  <div className="shadow-sm rounded-3 overflow-hidden border border-2 border-primary">
                    <MapContainer
                      center={[formData.lat, formData.lng]}
                      zoom={13}
                    >
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                      <SearchField onLocationFound={handleLocationFound} />
                      <ClickHandler onMapClick={handleMapClick} />

                      <Marker position={[formData.lat, formData.lng]} icon={customIcon} />
                    </MapContainer>
                  </div>
                  <small className="text-muted d-block mt-2">
                    * Haz clic en el mapa para ajustar el marcador o usa la barra de búsqueda.
                  </small>
                </div>

                <button type="submit" className="btn btn-secondary col-12 py-3 fw-bold shadow-sm">
                  PUBLICAR EVENTO
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}