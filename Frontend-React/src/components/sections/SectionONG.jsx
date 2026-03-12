import { Link } from "react-router-dom";
export default function ONGSection() {
  return (
    <section>
      <div
        className="container-fluid text-center py-5 bg-gradient-primary-tertiary text-white d-flex align-items-center"
        style={{ minHeight: "400px" }}
      >
        <div className="row justify-content-center w-100">
          <div className="col-md-8">
            <h2 className="fw-bold mb-4">¿Eres una ONG?</h2>
            <p className="mb-4 fs-5">
              Organiza tus propios eventos y recluta voluntarios para tus
              iniciativas de conservación marina.
            </p>
            <div>
              <Link
                to="/ong"
                className="btn btn-primary text-light fw-bold px-5 rounded-3 py-2"
              >
                Saber más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
