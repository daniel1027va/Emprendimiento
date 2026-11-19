
console.log("Nuestro sitio web está funcionando");

// Seleccionamos los elementos del menú
const botonMenu = document.getElementById("menu-toggle");
const menuPrincipal = document.getElementById("menu-principal");

// Abrir y cerrar el menú
botonMenu.addEventListener("click", () => {

    menuPrincipal.classList.toggle("hidden");

    const menuAbierto = !menuPrincipal.classList.contains("hidden");

    botonMenu.setAttribute("aria-expanded", menuAbierto);

    botonMenu.setAttribute(
        "aria-label",
        menuAbierto ? "Cerrar menú" : "Abrir menú"
    );

    botonMenu.textContent = menuAbierto ? "✕" : "☰";

});

// Cerrar el menú al seleccionar una sección
const enlacesMenu = menuPrincipal.querySelectorAll("a");

enlacesMenu.forEach((enlace) => {

    enlace.addEventListener("click", () => {
        menuPrincipal.classList.add("hidden");
        botonMenu.textContent = "☰";
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
    });

});


// Comparador de antes y después
const comparador = document.getElementById("comparador");
const controlComparador = document.getElementById("control-comparador");

controlComparador.addEventListener("input", () => {

    const posicion = controlComparador.value;

    comparador.style.setProperty("--posicion", `${posicion}%`);

});


