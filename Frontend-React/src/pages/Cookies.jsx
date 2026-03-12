export default function Cookies(){
    return(
        <div className='container my-5 pb-5'>
            <h1 className='text-secondary mb-3'>Política de Cookies</h1>
            
            <div className="bg-white p-4 p-md-5 rounded shadow-sm border">
                <p className="lead text-muted mb-5">
                    En BlueCrew utilizamos cookies para garantizar que nuestra plataforma funcione correctamente 
                    y para mejorar la experiencia de nuestros voluntarios y organizaciones.
                </p>

                <section className="mb-4">
                    <h2 className="h4 text-primary">1. ¿Qué son las cookies?</h2>
                    <p>
                        Las cookies son pequeños archivos de texto que los sitios web guardan en tu ordenador o dispositivo móvil 
                        cuando los visitas. Permiten que el sitio web recuerde tus acciones y preferencias (como el inicio de sesión) 
                        durante un período de tiempo, para que no tengas que volver a introducirlos cada vez que regreses o navegues de una página a otra.
                    </p>
                </section>

                <section className="mb-4">
                    <h2 className="h4 text-primary">2. ¿Qué tipo de cookies utilizamos?</h2>
                    <p>Nuestra plataforma utiliza principalmente los siguientes tipos de cookies:</p>
                    <ul>
                        <li><strong>Cookies técnicas (estrictamente necesarias):</strong> Son fundamentales para que puedas navegar por BlueCrew y usar funciones como acceder a tu cuenta de usuario o inscribirte en eventos de forma segura.</li>
                        <li><strong>Cookies de personalización:</strong> Permiten recordar información para que accedas al servicio con determinadas características que pueden diferenciar tu experiencia de la de otros usuarios (ej. recordar que ya has cerrado un aviso).</li>
                        <li><strong>Cookies de análisis:</strong> Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de cómo los voluntarios usan la plataforma, con el fin de mejorarla.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="h4 text-primary">3. Cookies de terceros</h2>
                    <p>
                        En algunas páginas de BlueCrew podemos mostrar contenido integrado de terceros (como mapas para la ubicación de los eventos). 
                        Estos terceros pueden establecer sus propias cookies. BlueCrew no tiene control sobre la configuración de estas cookies, 
                        por lo que te sugerimos comprobar los sitios web de esos terceros para obtener más información.
                    </p>
                </section>

                <section>
                    <h2 className="h4 text-primary">4. ¿Cómo gestionar las cookies?</h2>
                    <p>
                        Puedes controlar y/o borrar las cookies siempre que lo desees. Puedes borrar todas las cookies que ya 
                        estén en tu ordenador y configurar la mayoría de los navegadores para que no las acepten. Sin embargo, 
                        si haces esto, es posible que tengas que configurar manualmente algunas preferencias cada vez que visites 
                        BlueCrew y que algunos servicios (como mantener tu sesión iniciada) no funcionen.
                    </p>
                    <p className="text-muted mt-3">
                        <em>Última actualización: Febrero de 2026</em>
                    </p>
                </section>
            </div>
        </div>
    );
}