// === MENÚ HAMBURGUESA ===
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  // Abrir/cerrar menú al dar clic en el botón hamburguesa
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que se cierre inmediatamente
    navbar.classList.toggle("active");
  });

  // Cerrar el menú si se hace clic fuera
  document.addEventListener("click", (e) => {
    if (navbar.classList.contains("active") && !navbar.contains(e.target) && e.target !== hamburger) {
      navbar.classList.remove("active");
    }
  });
});

// === CONTACTAR WHATSAPP ===
function contactarWhatsApp(producto) {
  const numero = "7442073056"; // tu número
  const mensaje = `Hola, me interesa el ${producto}. ¿Podrías darme más información?`;
  const url = `https://wa.me/52${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// === ALERT AL CARGAR ===
window.onload = function () {
  alert("⚠️ Bienvenido a Jafra Essence");
};
