import Logo from "../../assets/logo/bluecrew-logo-complete-white.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white mt-auto">
            <div className="container">
                <div className="row gy-4 py-5 row-gap-4">
                    {/* COLUMNA 1: Logo e Identidad */}
                    <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center justify-content-md-start align-items-center mb-5 mb-md-0">
                        <Link to="/" className="text-decoration-none d-flex align-items-center text-white gap-2">
                            <img src={Logo} alt="BlueCrew Logo" height="38" />
                        </Link>
                    </div>

                    {/* COLUMNA 2: Navegación Principal */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-2 text-center text-md-start mb-4 mb-md-0">
                        <h6 className="fw-bold text-white-50 mb-2">Explora</h6>
                        <Link to="/" className="text-white text-decoration-none fw-semibold">Inicio</Link>
                        <Link to="/noticias" className="text-white text-decoration-none fw-semibold">Noticias</Link>
                        <Link to="/sobre-nosotros" className="text-white text-decoration-none fw-semibold">Sobre Nosotros</Link>
                        <Link to="/eventos" className="text-white text-decoration-none fw-semibold">Eventos</Link>
                    </div>

                    {/* COLUMNA 3: Legales */}
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column gap-2 text-center text-md-start mb-4 mb-md-0">
                        <h6 className="fw-bold text-white-50 mb-2">Legal</h6>
                        <Link to="/privacidad" className="text-white text-decoration-none fw-semibold">Política de privacidad</Link>
                        <Link to="/cookies" className="text-white text-decoration-none fw-semibold">Política de cookies</Link>
                        <Link to="/aviso-legal" className="text-white text-decoration-none fw-semibold">Aviso legal</Link>
                        <Link to="/contacto" className="text-white text-decoration-none fw-semibold">Contacto</Link>
                    </div>

                    {/* COLUMNA 4: Contacto e Info */}
                    <div className="col-12 col-lg-3 d-flex flex-row flex-lg-column justify-content-center justify-content-lg-start align-items-lg-start gap-2">
                        <h6 className="fw-bold text-white-50 mb-2 d-none d-lg-block">Contacto</h6>
                        <a href="mailto:bluecrew@gmail.com" className="text-white text-decoration-none">
                            <i className="bi bi-envelope-at-fill me-2"></i>bluecrew@gmail.com
                        </a>
                        <span className="mb-1">
                            <i className="bi bi-geo-alt-fill me-2"></i>España
                        </span>
                    </div>
                </div>
            </div>
            {/* BARRA DE COPYRIGHT (Fondo oscurecido) */}
            <div className="bg-secondary-dark text-center p-3">
                <span className="small">
                    &copy; {new Date().getFullYear()} BlueCrew. Todos los derechos
                    reservados.
                </span>
            </div>
        </footer>
    );
}
