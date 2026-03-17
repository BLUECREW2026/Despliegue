import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./LoginRegistro.scss";
import videoFondo from "../../assets/login/video-fondo.mp4";
import { Home } from "lucide-react";

export default function Login() {
  const [registrado, setRegistrado] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("voluntario");
  const [validado, setValidado] = useState(false);
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [regNombre, setRegNombre] = useState("");
  const [regApellido, setRegApellido] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [regNombreOrg, setRegNombreOrg] = useState("");
  const [regTelefono, setRegTelefono] = useState("");
  const [regSitioWeb, setRegSitioWeb] = useState("");
  const [regDescripcion, setRegDescripcion] = useState("");

  const navigate = useNavigate();

  const toggleForm = () => {
    setRegistrado((prev) => !prev);
    setValidado(false);
    setError("");
    setExito("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError("");

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const urlLogin = tipoUsuario === "voluntario" ? `/api/auth/login` : `/api/organizaciones/login`;

    try {
      const response = await fetch(urlLogin, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("email", email);
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("rol", tipoUsuario === "voluntario" ? "USER" : "ONG");

        if (tipoUsuario === "voluntario") {
          localStorage.setItem("usuarioId", data.id);
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          const idCorrecto = data.idOrganizacion || data.id_organizacion || data.id;
          localStorage.setItem("ongId", idCorrecto);
        }
        window.location.href = "/";
      } else {
        setError(data.message || "Credenciales incorrectas");
      }
    } catch (err) {
      setError("No hay conexión con el servidor");
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setError("");
    setExito("");

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidado(true);
      return;
    }

    const urlRegistro = tipoUsuario === "voluntario" ? `/api/auth/register` : `/api/organizaciones/register`;
    const bodyData = tipoUsuario === "voluntario"
      ? { nombre: regNombre, apellido: regApellido, email: regEmail, password_hash: regPassword }
      : { nombreOrganizacion: regNombreOrg, email: regEmail, passwordHash: regPassword, telefono: regTelefono, sitioWeb: regSitioWeb, descripcion: regDescripcion };

    try {
      const response = await fetch(urlRegistro, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setExito("¡Registro completado! Revisa tu correo.");
        
        emailjs.send("service_jde23sl", "template_thpbvke", {
          to_name: tipoUsuario === "voluntario" ? regNombre : regNombreOrg,
          user_email: regEmail,
          company_name: "Blue Crew",
        }, "XRltpFrVtfWnjbjMO").catch(() => {});

        setTimeout(() => {
          setRegistrado(false);
          setValidado(false);
        }, 2500);
      } else {
        const rawError = data.error || data.message || "";
        if (rawError.includes("Unique index") || rawError.includes("23505")) {
          setError("Este correo electrónico ya está registrado.");
        } else {
          setError("Error al procesar el registro.");
        }
      }
    } catch (err) {
      setError("Fallo en la conexión");
    }
  };

  return (
    <div className="login-page-wrapper">
      <Link to="/" className="boton volver-inicio">
        <Home size={24} />
        <span>Inicio</span>
      </Link>

      <video autoPlay loop muted playsInline className="video-fondo" src={videoFondo} />

      <div className="login principal mt-4">
        <div className={`login container ${registrado ? "active" : ""}`} id="container">
          <div className="panel panel-izquierdo">
            <h2>{registrado ? "Bienvenido" : "Crea tu cuenta"}</h2>
            <p>{registrado ? "Inicia sesión para continuar" : "Únete a nuestra comunidad"}</p>
            <button onClick={toggleForm}>{registrado ? "Ir a Login" : "Ir a Registro"}</button>
          </div>

          <div className="panel panel-derecho">
            <form className={`form login needs-validation ${validado ? 'was-validated' : ''}`} noValidate onSubmit={handleLogin}>
              <h2>LOGIN</h2>
              <div className="botones-tipo-usuario mb-3">
                <button type="button" className={tipoUsuario === "voluntario" ? "activa" : ""} onClick={() => setTipoUsuario("voluntario")}>Voluntario</button>
                <button type="button" className={tipoUsuario === "ong" ? "activa" : ""} onClick={() => setTipoUsuario("ong")}>ONG</button>
              </div>

              {error && <div className="alert alert-danger py-2 w-100" style={{ fontSize: '14px' }}>{error}</div>}

              <div className="w-100">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <div className="invalid-feedback text-start ms-2">Introduce un email válido.</div>
              </div>

              <div className="w-100">
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div className="invalid-feedback text-start ms-2">La contraseña es obligatoria.</div>
              </div>

              <button type="submit" className="btn-submit">Iniciar Sesión</button>
            </form>

            <form className={`form registro needs-validation ${validado ? 'was-validated' : ''}`} noValidate onSubmit={handleRegistro}>
              <h2>REGISTRO</h2>
              <div className="botones-tipo-usuario mb-3">
                <button type="button" className={tipoUsuario === "voluntario" ? "activa" : ""} onClick={() => setTipoUsuario("voluntario")}>Voluntario</button>
                <button type="button" className={tipoUsuario === "ong" ? "activa" : ""} onClick={() => setTipoUsuario("ong")}>ONG</button>
              </div>

              {error && <div className="alert alert-danger py-2 w-100" style={{ fontSize: '14px' }}>{error}</div>}
              {exito && <div className="alert alert-success py-2 w-100" style={{ fontSize: '14px' }}>{exito}</div>}

              {tipoUsuario === "voluntario" ? (
                <>
                  <div className="w-100">
                    <input type="text" placeholder="Nombre" value={regNombre} onChange={(e) => setRegNombre(e.target.value)} required />
                    <div className="invalid-feedback text-start ms-2">Escribe tu nombre.</div>
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Apellido" value={regApellido} onChange={(e) => setRegApellido(e.target.value)} required />
                    <div className="invalid-feedback text-start ms-2">Escribe tu apellido.</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-100">
                    <input type="text" placeholder="Nombre Organización" value={regNombreOrg} onChange={(e) => setRegNombreOrg(e.target.value)} required />
                    <div className="invalid-feedback text-start ms-2">Nombre requerido.</div>
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Teléfono" value={regTelefono} onChange={(e) => setRegTelefono(e.target.value)} required />
                    <div className="invalid-feedback text-start ms-2">Teléfono requerido.</div>
                  </div>
                  <div className="w-100">
                    <input type="url" placeholder="Sitio Web" value={regSitioWeb} onChange={(e) => setRegSitioWeb(e.target.value)} />
                  </div>
                </>
              )}

              <div className="w-100">
                <input type="email" placeholder="Email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} required />
                <div className="invalid-feedback text-start ms-2">Email inválido.</div>
              </div>

              <div className="w-100">
                <input type="password" placeholder="Contraseña" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} required minLength="6" />
                <div className="invalid-feedback text-start ms-2">Mínimo 6 caracteres.</div>
              </div>

              <button type="submit" className="btn-submit">Crear Cuenta</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}