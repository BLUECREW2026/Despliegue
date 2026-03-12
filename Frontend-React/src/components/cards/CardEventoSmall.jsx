import { useNavigate } from 'react-router-dom';
import { IMAGES_BASE_URL } from "../../config/axios";

export default function CardEvento({ evento, id, ruta }) {
    const navigate = useNavigate();

    const obtenerImagen = (nombreImagen) => {
        if (!nombreImagen) return "/img/cards/card-image-2.webp";
        if (nombreImagen.startsWith('http')) return nombreImagen;
        return `${IMAGES_BASE_URL}${nombreImagen}`;
    };

    const handleClick = () => {
        navigate(`${ruta}/${id}`, {
            state: { evento: evento }
        });
    }
    return (
        <div className="col p-3" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <article className="card rounded-4 p-3 bg-white shadow">
                <div className="ratio ratio-4x3">
                    <img className="card-img-top rounded-4 object-fit-cover border border-primary border-2"
                        src={obtenerImagen(evento.imagen)}
                        alt={evento.titulo}
                        onError={(e) => { e.target.onerror = null; e.target.src = "/img/cards/card-image-2.webp"; }} />
                </div>
                <div className="card-body">
                    <h3 className="card-title h5  mt-2 text-truncate" title={evento.titulo}>
                        {evento.titulo}
                    </h3>
                </div>
            </article>
        </div>
    );
}