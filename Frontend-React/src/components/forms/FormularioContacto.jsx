import React, {useState} from 'react';

// 1. IMPORTANTE: Importamos nuestro cliente configurado, no el axios genérico
import clienteAxios from '../../config/axios';

export default function FormularioContacto() {

    // Definimos el estado para los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        direccion: '',
        mensaje: ''
    });

    // Estado para manejar mensajes de éxito o error después de enviar el formulario
    const [status, setStatus] = useState({tipo: '', mensaje: ''}); // Para mostrar el estado del envío

    // Función que actualiza el estado cada vez que el usuario escribe algo
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // Función que se ejecuta al enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario

        if (!formData.nombre || !formData.apellidos || !formData.email || !formData.mensaje) {
            setStatus({tipo: 'error', mensaje: 'Por favor, completa todos los campos obligatorios.'});
            return;
        }

        try {
            // Enviamos los datos del formulario a la API
            const response = await clienteAxios.post('/contactos', formData);

            if (response.status === 201) {
                setStatus({tipo: 'éxito', mensaje: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.'});
                setFormData({nombre: '', apellidos: '', email: '', direccion: '', mensaje: ''}); // Limpiamos el formulario
            }
        } catch (error) {
            console.log('Error al enviar el formulario:', error);
            setStatus({tipo: 'error', mensaje: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.'});
        }
    };

    return (
        <form className="needs-validation" noValidate onSubmit={handleSubmit}>

            {/* Mostramos el mensaje de estado si existe */}
            {status.mensaje && (
                <div className={`alert ${status.tipo === 'éxito' ? 'alert-success' : 'alert-danger'}`} role="alert">
                    {status.mensaje}
                </div>
            )}

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="nombre" className="form-label fw-semibold">Nombre *</label>
                    <input type="text" className="form-control bg-light" id="nombre" placeholder="Tu nombre" required value={formData.nombre} onChange={handleChange} />
                    <div className="invalid-feedback">Por favor, escribe tu nombre.</div>
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="apellidos" className="form-label fw-semibold">Apellidos *</label>
                    <input type="text" className="form-control bg-light" id="apellidos" placeholder="Tus apellidos" required value={formData.apellidos} onChange={handleChange} />
                    <div className="invalid-feedback">Por favor, escribe tus apellidos.</div>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Dirección de correo electrónico *</label>
                <input type="email" className="form-control bg-light" id="email" placeholder="nombre@ejemplo.com" required value={formData.email} onChange={handleChange} />
                <div className="invalid-feedback">Introduce un correo electrónico válido.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="direccion" className="form-label fw-semibold">Dirección (Opcional)</label>
                <input type="text" className="form-control bg-light" id="direccion" placeholder="Calle, Ciudad, Código Postal" value={formData.direccion} onChange={handleChange} />
            </div>

            <div className="mb-4">
                <label htmlFor="mensaje" className="form-label fw-semibold">Tu consulta *</label>
                <textarea className="form-control bg-light" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..." required value={formData.mensaje} onChange={handleChange}></textarea>
                <div className="invalid-feedback">El mensaje no puede estar vacío.</div>
            </div>

            {/* Cambiado col-12 por w-100 que es la utilidad correcta de Bootstrap para anchos al 100% */}
            <button type="submit" className="btn btn-secondary w-100 fw-bold py-2">
                Enviar mensaje
            </button>
        </form>
    );
} 