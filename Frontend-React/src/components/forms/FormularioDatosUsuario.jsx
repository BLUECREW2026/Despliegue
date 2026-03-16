import { useState } from "react";

export default function Formulario_Datos_Usuario({ datosActuales, onCancelar, onGuardar }) {
    
    const rol = localStorage.getItem("rol");
    const esONG = rol === "ONG";

    const [formData, setFormData] = useState({
        nombre: datosActuales.nombre || "",
        apellidos: datosActuales.apellidos || "", 
        email: datosActuales.email || "",
        localidad: datosActuales.localidad || "",
        bio: datosActuales.bio || "",
        telefono: datosActuales.telefono || "",
        sitioWeb: datosActuales.sitioWeb || ""
    });

    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        
        const id = esONG ? localStorage.getItem("ongId") : localStorage.getItem("usuarioId");
        const endpoint = esONG ? `/api/organizaciones/${id}` : `/api/usuarios/${id}`;

        
        const bodyData = esONG ? {
            nombreOrganizacion: formData.nombre,
            descripcion: formData.bio,
            email: formData.email,
            telefono: formData.telefono,
            sitioWeb: formData.sitioWeb
        } : {
            nombre: formData.nombre,
            apellido: formData.apellidos,
            email: formData.email,
            biografia: formData.bio
            
        };

        try {
            const response = await fetch(endpoint, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include", 
                body: JSON.stringify(bodyData),
            });

            if (response.ok) {
                onGuardar(formData);
            } else {
                const errorData = await response.json();
                setErrorMsg(errorData.error || "Error al actualizar los datos");
            }
        } catch (error) {
            console.error("Error de red:", error);
            setErrorMsg("No se pudo conectar con el servidor.");
        }
    };

    return (
        <div className="row justify-content-center mb-5">
            <div className="col-lg-12">
                <div className="card contact-card bg-light p-5 border-0 shadow-sm">
                    <div className="card-body">
                        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                            <h3 className="mb-4 text-primary">{esONG ? "Editar Perfil Institucional" : "Editar Datos Personales"}</h3>
                            
                            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                            <div className="row">
                                <div className={esONG ? "col-md-12 mb-3" : "col-md-6 mb-3"}>
                                    <label htmlFor="nombre" className="form-label">
                                        {esONG ? "Nombre de la Organización:" : "Nombre:"}
                                    </label>
                                    <input type="text" className="form-control bg-white" id="nombre" value={formData.nombre} onChange={handleChange} required />
                                </div>

                                {!esONG && (
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="apellidos" className="form-label">Apellidos:</label>
                                        <input type="text" className="form-control bg-white" id="apellidos" value={formData.apellidos} onChange={handleChange} required />
                                    </div>
                                )}
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                                    <input type="email" className="form-control bg-white" id="email" value={formData.email} onChange={handleChange} required />
                                </div>

                                {esONG && (
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="telefono" className="form-label">Teléfono de Contacto:</label>
                                        <input type="text" className="form-control bg-white" id="telefono" value={formData.telefono} onChange={handleChange} required />
                                    </div>
                                )}
                            </div>

                            {esONG && (
                                <div className="mb-3">
                                    <label htmlFor="sitioWeb" className="form-label">Sitio Web (URL):</label>
                                    <input type="text" className="form-control bg-white" id="sitioWeb" value={formData.sitioWeb} onChange={handleChange} placeholder="www.ejemplo.org" />
                                </div>
                            )}

                            <div className="mb-3">
                                <label htmlFor="localidad" className="form-label">Localidad / Ubicación:</label>
                                <input type="text" className="form-control bg-white" id="localidad" value={formData.localidad} onChange={handleChange} />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="bio" className="form-label">
                                    {esONG ? "Descripción / Misión:" : "Biografía:"}
                                </label>
                                <textarea className="form-control bg-white" id="bio" rows="5" value={formData.bio} onChange={handleChange} required></textarea>
                            </div>

                            <div className="d-flex gap-3 mt-4">
                                <button type="button" className="btn btn-outline-secondary w-50" onClick={onCancelar}>Cancelar</button>
                                <button type="submit" className="btn btn-primary w-50">Guardar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}