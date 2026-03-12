import somos from "../../../assets/img/sobreNosotros/nosotros.jpg";
import ods from "../../../assets/img/sobreNosotros/ods.png";
import blue from "../../../assets/img/sobreNosotros/blue.jpg";
import "./nosotros.scss";

export default function QuienesSomos() {
  return (
    <section className="container my-5 quienes-somos">
      <div className="row align-items-center g-5 mb-5">
        <div className="col-lg-6">
          <img src={blue} alt="Equipo BlueCrew" className="img-somos" />
        </div>

        
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">¿Quiénes Somos?</h2>

          <p className="text-muted fs-5">
            Somos BlueCrew, una iniciativa comprometida con la protección de los ecosistemas acuáticos. Nacemos con el objetivo de conectar a personas con voluntad de ayudar con organizaciones que trabajan activamente en la conservación de mares, ríos y costas. Creemos en el poder de la colaboración y en la creación de una comunidad activa que actúe de forma conjunta para cuidar nuestro planeta.
          </p>

          
        </div>

      </div>

      <div className="row align-items-center g-5">
        

        
        <div className="col-lg-6 pt-5">
          <h2 className="fw-bold mb-4">¿Que hacemos?</h2>

          <p className="text-muted fs-5">
            Somos una plataforma web que funciona como punto de encuentro entre voluntarios y organizaciones medioambientales. A través de BlueCrew, las entidades pueden publicar noticias, organizar eventos y gestionar actividades como limpiezas de playas, rescate de fauna marina o talleres de concienciación. Los usuarios pueden descubrir estas iniciativas, inscribirse fácilmente y seguir su propio impacto positivo en la protección del medio acuático.
          </p>

          
        </div>
        <div className="col-lg-6">
          <img
            src={somos}
            alt="Equipo BlueCrew"
            className="img-somos"
          />
        </div>

        <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <img
            src={ods}
            alt="Equipo BlueCrew"
           className="img-somos"
          />
        </div>

        
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4">¿ODS al que contribuimos?</h2>

          <p className="text-muted fs-5">
            BlueCrew apoya el Objetivo de Desarrollo Sostenible 14: Vida Submarina, cuyo propósito es conservar y utilizar de forma sostenible los océanos, los mares y los recursos marinos. Nuestro proyecto contribuye a este objetivo fomentando la participación ciudadana en actividades de conservación, promoviendo la sensibilización ambiental y facilitando acciones directas para proteger nuestros ecosistemas acuáticos.
          </p>

        </div>

      </div>

      </div>
    </section>
  );
}