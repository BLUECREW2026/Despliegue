import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import { Icon } from "leaflet";
import clienteAxios from "../../config/axios";

import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "./FormularioEvento.scss";

import SearchField from "../common/SearchField";
import geoIcon from "../../assets/icons/geo-alt-fill.svg";

const customIcon = new Icon({
  iconUrl: geoIcon,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
});

// Componente para mover la vista del mapa cuando cambian las coordenadas
function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

// Componente para capturar el click manual y obtener la dirección
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
    materialNecesario: '',
    fechaInicio: '',
    fechaFin: '',
    participantes: 5,
    ubicacionTexto: '',
    lat: 40.4167,
    lng: -3.7037
  });

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await clienteAxios.get("/categorias");

        const dataMapeada = response.data.map(cat => ({
          id: cat.idCategoria,
          nombre: cat.nombreCategoria
        }));

        setCategorias(dataMapeada);
      } catch (error) {
        console.error("Error al obtener las categorias:", error);
      }
    };

    fetchCategorias();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLocationFound = (label, lat, lng) => {
    setFormData(prev => ({ ...prev, ubicacionTexto: label, lat, lng }));
  };

  // Función para recibir la localización con las coordenadas
  const handleMapClick = async (lat, lng) => {
    setFormData(prev => ({ ...prev, lat, lng }));

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();

      if (data && data.display_name) {
        setFormData(prev => ({
          ...prev,
          ubicacionTexto: data.display_name
        }));
      }
    } catch (error) {
      console.error("Error al obtener la dirección:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    try {
      const eventoPayload = {
        titulo: formData.titulo,
        descripcion: formData.descripcion,
        imagen: null,
        ubicacion: formData.ubicacionTexto,
        fechaInicio: formData.fechaInicio.replace('T', ' '),
        fechaFin: formData.fechaFin.replace('T', ' '),
        participantes: parseInt(formData.participantes),
        materialNecesario: formData.materialNecesario,
        categoria: {
          idCategoria: parseInt(formData.categoria)
        },
        usuario: {
          id: localStorage.getItem("usuarioId")
        }
      };

      console.log("Enviando JSON al backend:", eventoPayload);

      const response = await clienteAxios.post('/eventos', eventoPayload);

      if (response.status === 201) {
        alert("¡Evento creado con éxito!");

        setFormData({
          titulo: '',
          descripcion: '',
          categoria: '',
          materialNecesario: '',
          fechaInicio: '',
          fechaFin: '',
          participantes: 5,
          ubicacionTexto: '',
          lat: 40.4167,
          lng: -3.7037
        });

        form.classList.remove('was-validated');
      }

    } catch (error) {
      console.error("Error al crear el evento:", error);
      const mensajeError = error.response?.data?.error || "Hubo un error al conectar con el servidor.";
      alert(`Error: ${mensajeError}`);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mb-5 mt-5">
        <div className="col-lg-8 col-md-10">
          <div className="card contact-card bg-light p-4 p-md-5 border-0 shadow rounded-4">
            <div className="card-body">
              <h2 className="text-secondary fw-bolder mb-4 text-center">Crear Evento</h2>
              <form className="needs-validation" noValidate onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label fw-bold text-secondary">Título:</label>
                  <input type="text" className="form-control bg-white" id="titulo" required value={formData.titulo} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                  <label htmlFor="imagenEvento" className="form-label fw-bold text-secondary">Imagen:</label>
                  <input type="file" className="form-control bg-white" id="imagenEvento" accept="image/*" />
                </div>

                <div className="mb-4">
                  <label htmlFor="descripcion" className="form-label fw-bold text-secondary">Descripción:</label>
                  <textarea className="form-control bg-white" id="descripcion" rows={4} required value={formData.descripcion} onChange={handleInputChange}></textarea>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="categoria" className="form-label fw-bold text-secondary">
                      Categoría:
                    </label>
                    <select
                      id="categoria"
                      name="categoria"
                      className="form-select"
                      required
                      value={formData.categoria}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>Selecciona una...</option>
                      {categorias.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="participantes" className="form-label fw-bold text-secondary">Participantes (Mín. 5):</label>
                    <input type="number" className="form-control bg-white" id="participantes" min="5" required value={formData.participantes} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fechaInicio" className="form-label fw-bold text-secondary">Fecha y Hora de Inicio:</label>
                    <input type="datetime-local" className="form-control bg-white" id="fechaInicio" required value={formData.fechaInicio} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fechaFin" className="form-label fw-bold text-secondary">Fecha y Hora de Fin:</label>
                    <input type="datetime-local" className="form-control bg-white" id="fechaFin" required value={formData.fechaFin} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="materialNecesario" className="form-label fw-bold text-secondary">Material Necesitario:</label>
                  <input
                    type="text"
                    className="form-control bg-white"
                    id="materialNecesario"
                    placeholder="Ej: Traer guantes..."
                    required
                    value={formData.materialNecesario}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="ubicacionTexto" className="form-label fw-bold text-primary">
                    <i className="bi bi-geo-alt-fill me-2"></i>Ubicación:</label>
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
                    <MapContainer center={[formData.lat, formData.lng]} zoom={13}>
                      <ChangeView center={[formData.lat, formData.lng]} />
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                      <SearchField onLocationFound={handleLocationFound} />
                      <ClickHandler onMapClick={handleMapClick} />

                      <Marker position={[formData.lat, formData.lng]} icon={customIcon} />
                    </MapContainer>
                  </div>
                </div>

                <button type="submit" className="btn btn-secondary col-12 py-3 fw-bold shadow-sm">PUBLICAR EVENTO</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}