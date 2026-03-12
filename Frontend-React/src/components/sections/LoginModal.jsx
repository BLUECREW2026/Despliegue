import { useNavigate } from "react-router-dom";

export default function LoginModal({ open, setOpenModal }) {
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
                <p className="text-primary text-center">¡Casi llegas! Para ver este contenido, solo necesitas iniciar sesión. Te llevará apenas un segundo.
                </p>
                <button className="btn btn-primary text-light fw-bold w-100" onClick={() => navigate("/login")}>
                    Iniciar sesión
                </button>
            </div>
        </div>
    )
}