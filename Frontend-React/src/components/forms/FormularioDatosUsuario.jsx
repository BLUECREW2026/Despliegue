import { useState } from "react";


export default function Formulario_Datos_Usuario({ datosActuales, onCancelar, onGuardar }) {
   
    const [formData, setFormData] = useState({
        nombre: datosActuales.nombre || "",
        apellidos: datosActuales.apellidos || "",
        email: datosActuales.email || "",
        localidad: datosActuales.localidad || "",
        bio: datosActuales.bio || ""
    });

   
    const [errorMsg, setErrorMsg] = useState("");

    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const userId = 1; 

        try {
           
            const response = await fetch(`/api/usuarios/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", 
                body: JSON.stringify({
                    nombre: formData.nombre,
                    apellido: formData.apellidos,
                    email: formData.email,
                    biografia: formData.bio,
                    
                }),
            });

            if (response.ok) {
                onGuardar(formData);
                
            } else {
                const errorData = await response.json();
                setErrorMsg(errorData.error || "Error al actualizar los datos");
            }
        } catch (error) {
            console.error("Error de red:", error);
            setErrorMsg("No se pudo conectar con el servidor. Revisa tu conexión.");
        }
    };

    return (
        <div className="row justify-content-center mb-5">
            <div className="col-lg-12">
                <div className="card contact-card bg-light p-5 border-0 shadow-sm">
                    <div className="card-body">
                        
                        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                           
                            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                                    <input 
                                        type="text" 
                                        className="form-control bg-white" 
                                        id="nombre" 
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required 
                                    />
                                    <div className="invalid-feedback">Por favor, escribe tu nombre.</div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="apellidos" className="form-label">Apellidos</label>
                                    <input 
                                        type="text" 
                                        className="form-control bg-white" 
                                        id="apellidos" 
                                        value={formData.apellidos}
                                        onChange={handleChange}
                                        required 
                                    />
                                    <div className="invalid-feedback">Por favor, escribe tus apellidos.</div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                                <input 
                                    type="email" 
                                    className="form-control bg-white" 
                                    id="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                                <div className="invalid-feedback">Introduce un correo electrónico válido.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="localidad" className="form-label">Dirección / Localidad (Opcional)</label>
                                <input 
                                    type="text" 
                                    className="form-control bg-white" 
                                    id="localidad"
                                    value={formData.localidad}
                                    onChange={handleChange} 
                                    placeholder="Tu localidad" 
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="bio" className="form-label">Biografía</label>
                                <textarea 
                                    className="form-control bg-white" 
                                    id="bio" 
                                    rows="5" 
                                    value={formData.bio}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <div className="invalid-feedback">La biografía no puede estar vacía.</div>
                            </div>

                           
                            <div className="d-flex gap-3 mt-4">
                                <button type="button" className="btn btn-outline-secondary w-50" onClick={onCancelar}>
                                    Cancelar
                                </button>
                                <button type="submit" className="btn btn-primary w-50">
                                    Guardar Cambios
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}