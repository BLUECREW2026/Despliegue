import CardEvento from "./CardEvento";

export default function GrupoDeCardEvento({ datos, setOpenModal }) {
    return (
        <section className="container mb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 align-items-stretch">
                {datos && datos.map((evento, index) => (
                    <CardEvento
                        key={evento.id}
                        id={evento.id}
                        evento={evento}
                        setOpenModal={setOpenModal}
                    />
                ))}
            </div>
        </section>
    );
}