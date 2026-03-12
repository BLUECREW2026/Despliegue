import { useLocation, useOutletContext } from 'react-router-dom';
import { IMAGES_BASE_URL } from "../../config/axios";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./EventDetails.scss";
import geoIcon from "../../assets/icons/geo-alt-fill.svg";
import { Icon } from "leaflet";
import clienteAxios from "../../config/axios"
import { OpenStreetMapProvider } from 'leaflet-geosearch';

export default function EventDetails() {
    const location = useLocation();
    const evento = location.state?.evento;

    const { refrescarEventos } = useOutletContext();

    const [datos, setDatos] = useState(0);
    const [inscripciones, setInscripciones] = useState(null);

    const obtenerImagen = (nombreImagen) => {
        if (!nombreImagen) return "/img/cards/card-image-2.webp";
        if (nombreImagen.startsWith('http')) return nombreImagen;
        return `${IMAGES_BASE_URL}${nombreImagen}`;
    };

    const customIcon = new Icon({
        iconUrl: geoIcon,
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38]
    });

    const position = [evento?.lat || 40.4167, evento?.lng || -3.7037];

    useEffect(() => {
        if (!evento) return;

        const obtenerDatos = async () => {
            try {
                const response = await clienteAxios.get(`/eventos/${evento.id}/inscripciones/cantidad`);
                setDatos(response.data);
            } catch (error) {
                console.error('Error al obtener la cantidad:', error);
            }
        };
        const fetchInscrito = async () => {
            const usuarioId = localStorage.getItem("usuarioId");
            if (!usuarioId) return;
            try {
                const response = await clienteAxios.get(`/inscripciones/evento/${evento.id}/usuario/${usuarioId}`);
                setInscripciones(response.data || null);
            } catch (error) {
                console.error("Error al obtener estado de inscripción:", error);
                setInscripciones(null);
            }
        };

        obtenerDatos();
        fetchInscrito();
    }, [evento]);

    const [coords, setCoords] = useState(position);

    useEffect(() => {
        if (!evento?.ubicacion) return;

        const provider = new OpenStreetMapProvider();

        const buscarDireccion = async () => {
            const results = await provider.search({ query: evento.ubicacion });
            if (results && results.length > 0) {
                setCoords([results[0].y, results[0].x]);
            }
        };

        buscarDireccion();
    }, [evento.ubicacion]);

    const handleInscripcion = async () => {
        const usuarioId = parseInt(localStorage.getItem("usuarioId"));

        const payload = {
            evento: { idEvento: evento.id },
            usuario: { id: usuarioId },
        };

        try {
            const respuesta = await clienteAxios.post("/inscripciones", payload);
            if (respuesta.status === 201 || respuesta.status === 200) {
                setInscripciones(respuesta.data);
                setDatos(prev => prev + 1);
                refrescarEventos();
            }
        } catch (error) {
            console.error("Error al inscribir:", error);
        }
    };

    const handleDesinscripcion = async () => {
        const usuarioId = localStorage.getItem("usuarioId");

        if (!usuarioId || !evento.id) return;

        try {
            const respuesta = await clienteAxios.delete(`/inscripciones/evento/${evento.id}/usuario/${usuarioId}`);

            if (respuesta.status === 204 || respuesta.status === 200) {
                setInscripciones(null);
                setDatos(prev => Math.max(0, prev - 1));
                refrescarEventos();
            }
        } catch (error) {
            console.error("Error al desinscribir:", error);
        }
    };

    if (!evento) return <p className="text-center mt-5">Evento no encontrado...</p>;

    return (
        <div className="container mt-5 pb-5">
            <div className="bg-white p-4 p-md-5 rounded shadow-sm border mx-auto" style={{ maxWidth: "1000px" }}>
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-10 text-center">
                        <h1 className="fw-bold text-primary mb-2 text-uppercase display-6 display-md-5">
                            {evento.titulo}
                        </h1>
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-10">
                        <img
                            src={obtenerImagen(evento.imagen)}
                            alt="Imagen del evento"
                            className="w-100 rounded-4 shadow-sm object-fit-cover border border-primary border-3 ratio ratio-16x9"
                            style={{ maxHeight: '400px' }}
                            onError={(e) => { e.target.onerror = null; e.target.src = "/img/cards/card-image-2.webp"; }}
                        />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 lh-lg fs-6 fs-md-5">
                        <div className="mb-4">
                            <h4 className="h5 fw-semibold text-primary mb-2">Descripción</h4>
                            <p className='ms-2'>{evento.descripcionEvento}</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="h5 fw-semibold text-primary mb-2">Categoría</h4>
                            <ul>
                                <li className="fw-semibold text-secondary">{evento.categoria}: <span className="fw-normal text-body">{evento.descripcionCategoria}</span></li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h4 className="h5 fw-semibold text-primary mb-2">Requisitos</h4>
                            <p className='ms-2'>{evento.material}</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="h5 fw-semibold text-primary mb-2">Fecha y Hora</h4>
                            <p className="text-secondary ms-2">
                                <i className="bi bi-calendar-event me-2"></i> {evento.fechaDisplay}
                                <i className="bi bi-clock me-2 ms-4"></i> {evento.horaDisplay}
                            </p>
                        </div>

                        <div className="mb-4">
                            <h4 className="h5 fw-semibold text-primary mb-2">Ubicación</h4>
                            <p className='ms-2'>{evento.ubicacion}</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="h5 fw-semibold text-primary mb-3">Ubicación en el mapa</h4>
                            <div className="map-container-wrapper shadow-sm border border-3 border-primary rounded-4 overflow-hidden">
                                <MapContainer
                                    center={coords}
                                    zoom={15}
                                    scrollWheelZoom={false}
                                    key={`${coords[0]}-${coords[1]}`}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={coords} icon={customIcon}>
                                        <Popup>
                                            <div className="text-center">
                                                <strong>{evento.titulo}</strong><br />
                                                {evento.ubicacion}
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            {inscripciones ? (
                                <>
                                    <button
                                        className="btn btn-danger btn-lg text-white fw-semibold px-5 py-3 rounded-3 shadow-sm"
                                        onClick={handleDesinscripcion}
                                    >
                                        Anular Inscripción
                                    </button>
                                    <p className="text-success-dark fw-semibold mt-3">
                                        <i className="bi bi-check-circle-fill me-1"></i> Felicidades, te acabas de inscribir en este evento!
                                    </p>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="btn btn-primary btn-lg text-white fw-semibold px-5 py-3 rounded-3 shadow-sm"
                                        onClick={handleInscripcion}
                                        disabled={datos >= evento.participantes}
                                    >
                                        {datos >= evento.participantes ? "Evento Completo" : "Inscribirse al Evento"}
                                    </button>
                                    <p className="text-muted small mt-3">
                                        * Plazas limitadas ({datos}/{evento.participantes} ocupadas)
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}