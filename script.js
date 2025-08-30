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
window.onload = function () {
  alert("⚠️ BIENVENIDO A JAFRA ESSENCE, ESTA PAGINA AUN SE ENCUENTRA EN DESARROLLO,LA PAGINA SE ACTUALIZO PARA TENER UN DISEÑO MAS LIMPIO PODIENDO ENTRAR A SECCIONES DISPONIBLES, DESDE EL MENU QUE APARECE EN PANTALLA O BIEN PRECIONANDO EN MEDIO DE LAS FOTOS");
};