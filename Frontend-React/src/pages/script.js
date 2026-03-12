const container = document.getElementById("container");
const btn = document.getElementById("registro");
const title = document.getElementById("titulo");
const texto = document.getElementById("texto panel");

btn.addEventListener("click", () => {
  const isRegistre = container.classList.toggle("active");

  if (isRegistre) {
    title.textContent = "Bienvenido";
    texto.textContent="Ingresa a tu cuenta"
    btn.textContent = "Login";
  } else {
    title.textContent = "Crea tu cuenta";
    btn.textContent = "Registro";
  }
});
