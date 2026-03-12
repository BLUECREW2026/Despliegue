export default function AvisoLegal() {
    return (
        <div className='container my-5 pb-5'>
            <h1 className='text-secondary mb-3'>Aviso Legal y Condiciones de Uso</h1>
            
            <div className="bg-white p-4 p-md-5 rounded shadow-sm border">
                <p className="lead text-muted mb-5">
                    Bienvenido a BlueCrew. Al utilizar nuestra plataforma, aceptas las siguientes condiciones generales. 
                    Por favor, léelas detenidamente antes de participar en cualquier actividad de voluntariado.
                </p>

                <section className="mb-4">
                    <h2 className="h4 text-primary">1. Información General</h2>
                    <p>
                        En cumplimiento de la normativa vigente, se informa que la plataforma web BlueCrew 
                        es un proyecto destinado a facilitar la conexión entre organizaciones medioambientales y voluntarios.
                    </p>
                    <ul>
                        <li><strong>Titular:</strong> Proyecto BlueCrew</li>
                        <li><strong>Correo electrónico de contacto:</strong> bluecrew@gmail.com</li>
                        <li><strong>Ámbito de actuación:</strong> España</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="h4 text-primary">2. Condiciones de Uso y Comportamiento</h2>
                    <p>
                        El usuario se compromete a hacer un uso adecuado y lícito de la plataforma. Al registrarte como voluntario o como organización, aceptas:
                    </p>
                    <ul>
                        <li>Proporcionar información veraz y mantenerla actualizada.</li>
                        <li>No utilizar la plataforma para difundir contenido ofensivo, publicitario o que no esté relacionado con la conservación marina.</li>
                        <li>Respetar a los demás usuarios, coordinadores y organizaciones durante el desarrollo de los eventos presenciales.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="h4 text-primary">3. Exención de Responsabilidad en Eventos</h2>
                    <p>
                        BlueCrew actúa únicamente como un intermediario digital (tablón de anuncios y gestor de inscripciones) 
                        entre las organizaciones que promueven los eventos y los voluntarios que desean asistir. 
                    </p>
                    <p>
                        <strong>BlueCrew no se hace responsable</strong> de posibles incidentes, accidentes o daños materiales y personales que puedan ocurrir 
                        durante las limpiezas de playas, inmersiones u otras actividades físicas. La responsabilidad de contar con los permisos 
                        y seguros pertinentes recae sobre la Organización creadora del evento, y la asistencia es bajo la propia responsabilidad del voluntario.
                    </p>
                </section>

                <section>
                    <h2 className="h4 text-primary">4. Propiedad Intelectual</h2>
                    <p>
                        El diseño de la plataforma, el código fuente, los logotipos y los textos gráficos pertenecen a BlueCrew y están protegidos 
                        por la normativa de propiedad intelectual. No está permitida su reproducción o distribución sin autorización expresa.
                    </p>
                    <p className="text-muted mt-3">
                        <em>Última actualización: Febrero de 2026</em>
                    </p>
                </section>
            </div>
        </div>
    );
}