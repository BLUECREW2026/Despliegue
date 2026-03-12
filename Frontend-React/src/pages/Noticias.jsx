import clienteAxios from "../config/axios";
import { useState, useEffect } from "react";
import CardNoticias from "../components/cards/CardNoticias";

export default function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await clienteAxios.get("/noticias");
        setNoticias(response.data);
      } catch (error) {
        console.error("Error al obtener las noticias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <section className="container mb-5 mt-4">
      <div className="row">
        {noticias.map((noticia) => (
          <div key={noticia.idNoticia}>
            <CardNoticias noticia={noticia} id={noticia.idNoticia} noticias={noticias}/>
          </div> 
        ))}
      </div>
    </section>
  );
}
