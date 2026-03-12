export default function Privacidad() {
    return (
        <div className='container my-5'>
            <h1 className='text-secondary mb-3'>Política de Privacidad</h1>

            <div className="bg-white p-4 p-md-5 rounded shadow-sm border">
                <p className="lead text-muted mb-5">
                    En BlueCrew nos tomamos muy en serio la privacidad de nuestros voluntarios y organizaciones.
                    Esta política explica cómo recopilamos, usamos y protegemos tus datos personales.
                </p>

                <section className="mb-4">
                    <h2 className="h4 text-primary">1. Información que recopilamos</h2>
                    <p>Al registrarte en nuestra plataforma, ya sea como voluntario o como organización, podemos recopilar los siguientes datos:</p>
                    <ul>
                        <li><strong>Datos de registro:</strong> Nombre completo, dirección de correo electrónico y contraseña.</li>
                        <li><strong>Datos del perfil:</strong> Biografía, foto de perfil (si aplica) y estadísticas de participación.</li>
                        <li><strong>Datos de actividad:</strong> Eventos a los que te inscribes, asistencia confirmada y calificaciones otorgadas.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="h4 text-primary">2. ¿Para qué usamos tus datos?</h2>
                    <p>Utilizamos la información recopilada exclusivamente para el funcionamiento de la plataforma:</p>
                    <ul>
                        <li>Gestionar tu cuenta y permitirte iniciar sesión.</li>
                        <li>Tramitar tus inscripciones a los eventos de limpieza y concienciación marina.</li>
                        <li>Permitir que las organizaciones coordinen los eventos sabiendo cuántas personas asistirán.</li>
                        <li>Mostrar tu historial y métricas de impacto en tu panel de usuario.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="h4 text-primary">3. Compartir información con terceros</h2>
                    <p>
                        <strong>BlueCrew no vende tus datos personales.</strong> Sin embargo, debes tener en cuenta que,
                        al apuntarte a un evento, la Organización creadora del mismo o los Administradores tendrán
                        acceso a tu nombre y correo electrónico para poder coordinar la actividad y avisarte de cambios o del material necesario.
                    </p>
                </section>

                <section className="mb-4">
                    <h2 className="h4 text-primary">4. Seguridad de los datos</h2>
                    <p>
                        Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra
                        el acceso no autorizado, la alteración, divulgación o destrucción. Las contraseñas se almacenan de forma encriptada.
                    </p>
                </section>

                <section>
                    <h2 className="h4 text-primary">5. Tus derechos</h2>
                    <p>
                        Tienes derecho a acceder, rectificar, limitar o eliminar tus datos personales en cualquier momento.
                        Puedes ejercer la mayoría de estos derechos directamente desde la sección "Mi Cuenta". Para la eliminación
                        total de tu cuenta, puedes contactar con los administradores de la plataforma.
                    </p>
                    <p className="text-muted mt-3">
                        <em>Última actualización: Febrero de 2026</em>
                    </p>
                </section>
            </div>
        </div>
    );
}