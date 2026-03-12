import FormularioContacto from '../components/forms/FormularioContacto';

export default function Contacto() {
    return (
        <div className="container my-5 pb-5">
            {/* Cabecera de la página */}
            <div className="text-center mb-5">
                <h1 className="text-secondary fw-bold mb-3">Contacta con nosotros</h1>
                <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
                    ¿Tienes dudas sobre los eventos, quieres dar de alta a tu organización
                    o simplemente saludarnos? <span className='text-primary'>¡Estamos aquí para ayudarte!</span>
                </p>
            </div>

            {/* Fila principal con las dos columnas */}
            <div className="row g-4 justify-content-center">

                {/* COLUMNA IZQUIERDA: Información de contacto */}
                <div className="col-12 col-md-5 col-lg-4">
                    <div className="bg-gradient-primary-secondary text-white p-4 p-md-5 rounded shadow h-100 d-flex flex-column">
                        <h3 className="h4 mb-4 fw-bold">Información</h3>
                        <p className="mb-5 text-white-50">
                            Rellena el formulario y el equipo de coordinación de BlueCrew te responderá lo antes posible.
                        </p>

                        {/* Datos de contacto con iconos */}
                        <div className="d-flex align-items-center mb-4">
                            <i className="bi bi-envelope-at-fill fs-3 me-3"></i>
                            <div>
                                <h4 className="h6 mb-0 text-white-50">Email</h4>
                                <span>bluecrew@gmail.com</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mb-4">
                            <i className="bi bi-geo-alt-fill fs-3 me-3"></i>
                            <div>
                                <h4 className="h6 mb-0 text-white-50">Ubicación</h4>
                                <span>España</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: Componente del Formulario */}
                <div className="col-12 col-md-7 col-lg-6 bg-white p-4 p-md-5 rounded shadow-sm">
                    <FormularioContacto />
                </div>
            </div>
        </div>
    );
}