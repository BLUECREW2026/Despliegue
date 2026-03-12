import GrupoDeCardEvento from "../components/cards/GrupoDeCardEvento";
import SearchBar from "../components/common/SearchBar";
import Calendario from "../components/common/Calendario";
import { useState } from "react";
import LoginModal from "../components/sections/LoginModal";

export default function Eventos({ datos }) {
    const [openModal, setOpenModal] = useState(false);
    const [query, setQuery] = useState("");

    const [rangoFechas, setRangoFechas] = useState({
        start: new Date(),
        end: null
    });

    const filteredEvents = datos.filter((e) => {
        const text = query.toLowerCase();
        const fechaEvento = new Date(e.fechaDisplay);

        const cumpleTexto = e.titulo.toLowerCase().includes(text);

        const cumpleFecha = rangoFechas.start && rangoFechas.end
            ? (fechaEvento >= rangoFechas.start && fechaEvento <= rangoFechas.end)
            : true;

        return cumpleTexto && cumpleFecha;
    });
    return (
        <div className="container mt-4">
            <div className="row g-3 align-items-center justify-content-center">
                <div className="col-auto">
                    <Calendario value={rangoFechas} setValue={setRangoFechas} />
                </div>

                <div className="col-md-6 col-lg-4">
                    <SearchBar
                        query={query}
                        onChange={setQuery}
                        onClear={() => setQuery("")}
                    />
                </div>
            </div>
            <GrupoDeCardEvento datos={filteredEvents} setOpenModal={setOpenModal} />
            <LoginModal open={openModal} setOpenModal={setOpenModal} />
        </div>
    );
}