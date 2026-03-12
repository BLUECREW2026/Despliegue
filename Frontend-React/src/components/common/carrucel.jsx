export default function Carrucel(){
    const importarTodo = (r) => r.keys().map(r);
  const logos = importarTodo(
    require.context("/src/assets/ong", false, /\.(png|jpe?g|svg)$/),
  );
    return(
        <div className="colaboradores-section py-4 position-relative bg-white">
        <div className="container-fluid text-center overflow-hidden">
          <h3 className="text-secondary mb-5 fw-semibold">COLABORAMOS CON:</h3>

          <div className="slider-logos">
            <div className="slide-track">
              {logos.map((logo, index) => (
                <div className="slide" key={`logo-original-${index}`}>
                  <img src={logo} alt={`Colaborador ${index}`} />
                </div>
              ))}

              {logos.map((logo, index) => (
                <div className="slide" key={`logo-duplicado-${index}`}>
                  <img src={logo} alt={`Colaborador ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}