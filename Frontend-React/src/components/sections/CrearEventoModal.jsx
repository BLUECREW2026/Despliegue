import { useNavigate } from "react-router-dom";

export default function CrearEventoModal({ open, setOpenModal, mensaje, ruta}) {
    const navigate = useNavigate();
    if (!open) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setOpenModal(false);
        }
    };
    return (
        <div className="modal-overlay shadow" onClick={handleOverlayClick}>
            <div className="bg-white shadow w-25 border rounded p-3">
                <p className="text-primary text-center">{mensaje}
                </p>
                <button className="btn btn-primary text-light fw-bold w-100" onClick={() => navigate(ruta)}>
                    Ver eventos
                </button>
            </div>
        </div>
    )
}