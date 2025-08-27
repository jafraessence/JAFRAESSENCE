function contactarWhatsApp(producto) {
  const numero = "7442073056";
  const mensaje = `Hola, me interesa el ${producto}. ¿Podrías darme más información?`;
  const url = `https://wa.me/52${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
// script.js
window.onload = function () {
  alert("⚠️ Esta página aún está en desarrollo.\nSe espera que para el 1 de septiembre esté terminada.");
};
