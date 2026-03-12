import { useNavigate } from "react-router-dom";
import { IMAGES_BASE_URL } from "../../config/axios";
import "./CardNoticias.scss";


export default function CardNoticias({ noticia, id, noticias }) {
    const navigate = useNavigate();

    const obtenerImagen = (nombreImagen) => {
        if (!nombreImagen) return "/img/cards/card-image-1.webp";
        if (nombreImagen.startsWith('http')) return nombreImagen;
        return `${IMAGES_BASE_URL}${nombreImagen}`;
    };
    return (
        <div className="card mb-3 shadow-sm border-0 bg-white">
            <div className="row g-3 align-items-center p-3">
                <div className="col-md-6 col-lg-5">
                    <div className="ratio ratio-16x9 overflow-hidden">
                        <img
                            src={obtenerImagen(noticia.imagen)}
                            className="img-fluid rounded-4 object-fit-cover border border-tertiary border-2"
                            alt="Noticia"
                            onError={(e) => { e.target.onerror = null; e.target.src = "/img/cards/card-image-1.webp"; }}
                        />
                    </div>
                </div>

                <div className="col-md-6 col-lg-7">
                    <div className="card-body">
                        <h5 className="card-title fw-semibold text-tertiary">{noticia.titulo}</h5>
                        <p className="card-text text-muted news-card-description">
                            {noticia.descripcion}
                        </p>
                        <div className="d-grid mt-4">
                            <button className="btn btn-tertiary text-white fw-medium rounded-3 py-2" onClick={() => navigate(`/noticias/${id}`, { state: { noticia, noticias } })}>
                                Leer más
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}