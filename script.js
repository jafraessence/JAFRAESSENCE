function contactarWhatsApp(producto) {
  const numero = "7442073056";
  const mensaje = `Hola, me interesa el ${producto}. ¿Podrías darme más información?`;
  const url = `https://wa.me/52${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
// script.js
window.onload = function () {
  alert("⚠️ BIENVENIDO A JAFRA ESSENCE, ESTA PAGINA AUN SE ENCUENTRA EN DESARROLO PLANEO HACERLE MEJORAS DE DISEÑOSY MAS, ESTA PAGINA ESTA DISEÑADA PARA MOSTRAR ESPECIALMENTE LOS PERFUMES DISPONIBLES PARA ENTREGAS RAPIDAS, ADEMAS ENCONTRARAS RECOMENDACION DE PRODUCTOS DE CATALAGO DEL MES.");
};
