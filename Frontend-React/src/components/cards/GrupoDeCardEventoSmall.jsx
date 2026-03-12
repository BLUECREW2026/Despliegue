import CardEventoSmall from "./CardEventoSmall";

export default function GrupoDeCardEventoSmall({ datos, ruta }) {
    return (
        <section className="container mb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 align-items-stretch">
                {datos && datos.map((evento) => (
                    <CardEventoSmall
                        key={evento.id}
                        id={evento.id}
                        evento={evento}
                        ruta={ruta}
                    />
                ))}
            </div>
        </section>
    );
}