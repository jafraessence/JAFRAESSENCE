function contactarWhatsApp(producto) {
  const numero = "7442073056";
  const mensaje = `Hola, me interesa el ${producto}. ¿Podrías darme más información?`;
  const url = `https://wa.me/52${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
// script.js
window.onload = function () {
  alert("⚠️ BIENVENIDO A JAFRA ESSENCE, EN");
};

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('active');
}
