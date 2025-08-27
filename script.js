function contactarWhatsApp(producto) {
  const numero = "7442073056";
  const mensaje = `Hola, me interesa el ${producto}. ¿Podrías darme más información?`;
  const url = `https://wa.me/52${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
// script.js
window.onload = function () {
  alert("⚠️ Aun estoy trabajando en esta pagina pido su compresion, se espera que para el mes de septiembre la pagina este funcionando segun lo esperado, el unico apartado que funciona es el de perfumes de entrega rapidas es decir perfumes que tengo a la mano para vender. gracias por visitar la pagina");
};
