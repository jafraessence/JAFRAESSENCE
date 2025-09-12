// Menu hamburguesa
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

// abrir/cerrar con click
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// cerrar si clickeo fuera
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// script.js
// Obtenemos el año actual
  const year = new Date().getFullYear();

  // Texto del mensaje
  const mensaje = "✨ Bienvenido/a a JAFRA ESSENCE ✨\n\n" +
                  "Esta página fue creada por Arturo\n" +
                  "© " + year + " JAFRA ESSENCE. Todos los derechos reservados.";

  // Mostramos el alert
  alert(mensaje);
