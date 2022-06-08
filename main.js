let navMenu = document.querySelector(".nav-menu");
let btnMenu = document.querySelector(".menu-btn");
let li1 = document.querySelector(".a1");
let li2 = document.querySelector(".a2");
let li3 = document.querySelector(".a3");
let li4 = document.querySelector(".a4");
let divConejos = document.getElementById("Conejos Disponibles");
let divAccesorios = document.getElementById("Accesorios");
let divAcerca = document.querySelector(".acerca-banner-three");
let divContacto = document.querySelector(".links");
let h1 = document.querySelector(".h1-logo");
let linkContacto = document.querySelectorAll(".contacto-items");
let linkContacto2 = document.querySelectorAll(".accesorios-items");

btnMenu.addEventListener("click", () => {
    if (navMenu.className === "nav-menu") {
        navMenu.classList.add("show");
} else {
navMenu.classList.remove("show");
    };
});

h1.addEventListener("click", () => {
    scrollTo(0, 0);
});

li1.addEventListener("click", () => {
navMenu.classList.remove("show");
    divConejos.scrollIntoView({
        behavior: "smooth", block: "start"
    });
});

li2.addEventListener("click", () => {
    navMenu.classList.remove("show");
    divAccesorios.scrollIntoView({
        behavior: "smooth", block: "start"
    });
});

li3.addEventListener("click", () => {
    navMenu.classList.remove("show");
    divAcerca.scrollIntoView({
        behavior: "smooth", block: "center"
    });
});

li4.addEventListener("click", () => {
    navMenu.classList.remove("show");
    divContacto.scrollIntoView({
        behavior: "smooth", block: "start"
    });
});

linkContacto.forEach(enlace => {enlace.addEventListener("click", () => {
    divContacto.scrollIntoView({
        behavior: "smooth", block: "start"
    });
})
});

linkContacto2.forEach(enlace1 => {
enlace1.addEventListener("click", () => {
console.log("Hola")
        divContacto.scrollIntoView({
            behavior: "smooth", block: "start"
        });
    })
});

