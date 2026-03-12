import { useLocation, useParams, Link } from 'react-router-dom';
import { IMAGES_BASE_URL } from "../../config/axios";
import "./NewsDetails.scss";

export default function NewsDetails() {
  const { id } = useParams();
  const location = useLocation();

  const noticia = location.state?.noticia;
  const noticias = location.state?.noticias || [];

  const obtenerImagen = (nombreImagen) => {
    if (!nombreImagen) return "/img/cards/card-image-1.webp";
    if (nombreImagen.startsWith('http')) return nombreImagen;
    return `${IMAGES_BASE_URL}${nombreImagen}`;
  };

  const currentIndex = noticias.findIndex(n => String(n.idNoticia) === id);

  if (!noticia) return <p className="text-center my-5">Noticia no encontrada...</p>;

  return (
    <div className="container mt-5 pb-5">
      <div className="bg-white p-4 p-md-5 rounded shadow-sm border mx-auto" style={{ maxWidth: "1000px" }}>
        {/* ENCABEZADO (Título y Metadatos) */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">

            {/* Etiqueta Categoría */}
            <span className="badge bg-accent text-white fw-semibold mb-2">{noticia.categoria.nombreCategoria}</span>

            <h1 className="fw-bold text-tertiary display-5 mb-3">
              {noticia.titulo}
            </h1>

            <p className="text-muted small">
              Publicado por <strong>{noticia.autor.nombre} {noticia.autor.apellido}</strong> | {noticia.fechaPublicacion}
            </p>
          </div>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <div className="ratio ratio-16x9">
              <img
                src={obtenerImagen(noticia.imagen)}
                alt="Imagen destacada de la noticia"
                className="w-100 rounded-4 shadow-sm object-fit-cover border border-tertiary border-3"
                onError={(e) => { e.target.onerror = null; e.target.src = "/img/cards/card-image-1.webp"; }}
              />
            </div>
          </div>
        </div>

        {/* CUERPO DE LA NOTICIA */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 lh-lg fs-5">
            {noticia.descripcion
              .split(/\n\n|\n/)
              .filter(p => p.trim() !== '')
              .map((parrafo, i) => (
                <p key={i} className="news-body-text">
                  {parrafo.trim()}
                </p>
              ))
            }

            {/* Cita destacada */}
            <blockquote className="border-start border-4 border-tertiary-light ps-4 fst-italic my-4 text-muted">
              {noticia.citaDestacada || "La vida marina es un tesoro que debemos proteger y preservar para las generaciones futuras."}
            </blockquote>


          </div>
        </div>
        {/* NAVEGACIÓN (Anterior / Siguiente) */}
        <div className="row justify-content-center mt-5 pt-4 border-top">
          <div className="col-lg-8 d-flex justify-content-between align-items-center">

            {currentIndex > 0 ? (
              <Link
                to={`/noticias/${noticias[currentIndex - 1].idNoticia}`}
                state={{ noticia: noticias[currentIndex - 1], noticias: noticias }}
                className="btn btn-tertiary px-4 fw-bold text-white"
              >
                <i className="bi bi-arrow-left me-2"></i> Anterior
              </Link>
            ) : <div />}

            {currentIndex !== -1 && currentIndex < noticias.length - 1 ? (
              <Link
                to={`/noticias/${noticias[currentIndex + 1].idNoticia}`}
                state={{ noticia: noticias[currentIndex + 1], noticias: noticias }}
                className="btn btn-tertiary px-4 fw-bold text-white"
              >
                Siguiente <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </div>
  );
};
