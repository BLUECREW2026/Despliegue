import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginRegistro.scss";
import videoFondo from "../../assets/login/video-fondo.mp4";
import { Home } from "lucide-react";

export default function Login() {
  const [registrado, setRegistrado] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("voluntario");

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

  const toggleForm = () => setRegistrado((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    const urlLogin = tipoUsuario === "voluntario" 
        ? `/api/auth/login` 
         : `/api/organizaciones/login`;

    try {
      const response = await fetch(urlLogin, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("rol", tipoUsuario === "voluntario" ? "USER" : "ONG");
        
        if (tipoUsuario === "voluntario") {
            localStorage.setItem("usuarioId", data.id);
            localStorage.setItem("user", JSON.stringify(data.user));
        } else {
            localStorage.setItem("ongId", data.id);
            localStorage.setItem("ongData", JSON.stringify(data.ong || data.user));
        }
        navigate("/");
      } else {
        alert("Error: " + (data.message || "Credenciales incorrectas"));
      }
    } catch (error) {
      console.error("Error completo:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    const urlRegistro = tipoUsuario === "voluntario" 
        ? `/api/auth/register` 
        : `/api/organizaciones/register`;

    const bodyData = tipoUsuario === "voluntario" 
        ? { nombre: regNombre, apellido: regApellido, email: regEmail, password_hash: regPassword }
        : { 
            nombreOrganizacion: regNombreOrg, 
            email: regEmail, 
            passwordHash: regPassword,        
            telefono: regTelefono, 
            sitioWeb: regSitioWeb,            
            descripcion: regDescripcion 
          };

    try {
      const response = await fetch(urlRegistro, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        alert(`¡Registro exitoso! Ahora puedes iniciar sesión.`);
        setRegistrado(false); 
      } else {
        alert("Error: " + (data.error || data.message || "Error al registrar"));
      }
    } catch (error) {
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div className="login-page-wrapper">
      
      <Link to="/" className="boton volver-inicio ">
        <Home size={24} />
        <span>Inicio</span>
      </Link>

      <video autoPlay loop muted playsInline className="video-fondo" src={videoFondo} />

      <div className="login principal mt-4">
        <div className={`login container ${registrado ? "active" : ""}`} id="container">
          
          <div className="panel panel-izquierdo">
            
            <h2>{registrado ? "Bienvenido" : "Crea tu cuenta"}</h2>
            <p>{registrado ? "Inicia sesión para continuar" : "Únete a nuestra comunidad"}</p>
            <button onClick={toggleForm}>
              {registrado ? "Ir a Login" : "Ir a Registro"}
            </button>
          </div>

          <div className="panel panel-derecho">
            
            <form className="form login" onSubmit={handleLogin}>
              
              <h2>LOGIN</h2>
              <div className="botones-tipo-usuario">
                <button type="button" className={tipoUsuario === "voluntario" ? "activa" : ""} onClick={() => setTipoUsuario("voluntario")}>Voluntario</button>
                <button type="button" className={tipoUsuario === "ong" ? "activa" : ""} onClick={() => setTipoUsuario("ong")}>ONG</button>
              </div>
              

              <input type="email" placeholder={tipoUsuario === "ong" ? "Email de la organización" : "Email"} value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit" className="btn-submit">Iniciar Sesión</button>
            </form>

         
            <form className="form registro" onSubmit={handleRegistro}>
              <h2 >REGISTRO</h2>

              <div className="botones-tipo-usuario">
                <button type="button" className={tipoUsuario === "voluntario" ? "activa" : ""} onClick={() => setTipoUsuario("voluntario")}>Voluntario</button>
                <button type="button" className={tipoUsuario === "ong" ? "activa" : ""} onClick={() => setTipoUsuario("ong")}>ONG</button>
              </div>
              
              {tipoUsuario === "voluntario" ? (
                <>
                  <input type="text" placeholder="Nombre" value={regNombre} onChange={(e) => setRegNombre(e.target.value)} required />
                  <input type="text" placeholder="Apellido" value={regApellido} onChange={(e) => setRegApellido(e.target.value)} required />
                </>
              ) : (
                <>
                  <input type="text" placeholder="Nombre de la Organización" value={regNombreOrg} onChange={(e) => setRegNombreOrg(e.target.value)} required />
                  
                    <input type="text" placeholder="Teléfono" value={regTelefono} onChange={(e) => setRegTelefono(e.target.value)} required />
                    <input type="url" placeholder="Sitio Web (Opcional)" value={regSitioWeb} onChange={(e) => setRegSitioWeb(e.target.value)} />
                  
                </>
              )}

              <input type="email" placeholder={tipoUsuario === "ong" ? "Email corporativo" : "Email"} value={regEmail} onChange={(e) => setRegEmail(e.target.value)} required />
              <input type="password" placeholder="Contraseña" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} required />
              
              <button type="submit" className="btn-submit">Crear Cuenta</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}