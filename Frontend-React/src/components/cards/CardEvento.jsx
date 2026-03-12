import { useNavigate } from "react-router-dom";
import { IMAGES_BASE_URL } from "../../config/axios";

export default function CardEvento({ evento, id, setOpenModal }) {
    const navigate = useNavigate();

    const obtenerImagen = (nombreImagen) => {
        if (!nombreImagen) return "/img/cards/card-image-2.webp";
        if (nombreImagen.startsWith('http')) return nombreImagen;
        return `${IMAGES_BASE_URL}${nombreImagen}`;
    };

    const handleClick = () => {
        if (localStorage.getItem("usuarioId")) {
            navigate(`/eventos/${id}`, { state: { evento } });
        } else {
            setOpenModal(true);
        }
    };
    return (
        <div className="col p-3 d-flex align-items-stretch">
            <article className="card rounded-4 p-3 bg-white shadow h-100 w-100 d-flex flex-column">
                <div className="ratio ratio-4x3">
                    <img
                        className="card-img-top rounded-4 object-fit-cover border border-primary border-2"
                        src={obtenerImagen(evento.imagen)}
                        alt={evento.titulo}
                        onError={(e) => { e.target.onerror = null; e.target.src = "/img/cards/card-image-2.webp"; }}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5 fw-bold">{evento.titulo}</h3>
                    <p className="card-text text-secondary mb-4 text-muted">
                        {evento.descripcionEvento}
                    </p>
                    <div className="mt-auto text-center">
                        <button className="btn btn-primary text-light fw-bold w-100"
                            onClick={() => handleClick()}>
                            Inscribirse
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}