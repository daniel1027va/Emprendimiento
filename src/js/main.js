
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



(() => {

    // =====================================
    // CONFIGURACIÓN
    // =====================================

    const numeroWhatsAppCleanPro = "573164293104";

    const formulario = document.getElementById("formulario-contacto");

    if (!formulario) return;

    const municipio = document.getElementById("municipio");
    const contenedorZona = document.getElementById("contenedor-zona");
    const etiquetaZona = document.getElementById("etiqueta-zona");
    const selectorZona = document.getElementById("zona");
    const campoBarrio = document.getElementById("barrio");
    const listaBarrios = document.getElementById("lista-barrios");
    const ayudaZona = document.getElementById("ayuda-zona");


    // =====================================
    // COMUNAS Y CORREGIMIENTOS DE MEDELLÍN
    // =====================================

    const comunasMedellin = [
        "Popular",
        "Santa Cruz",
        "Manrique",
        "Aranjuez",
        "Castilla",
        "Doce de Octubre",
        "Robledo",
        "Villa Hermosa",
        "Buenos Aires",
        "La Candelaria",
        "Laureles-Estadio",
        "La América",
        "San Javier",
        "El Poblado",
        "Guayabal",
        "Belén"
    ];

    const corregimientosMedellin = [
        "San Sebastián de Palmitas",
        "San Cristóbal",
        "Altavista",
        "San Antonio de Prado",
        "Santa Elena"
    ];


    // =====================================
    // MUNICIPIOS CON CAMPO DE BARRIO
    // =====================================

    const municipiosConBarrio = [
        "Bello",
        "Envigado",
        "Itagüí",
        "Sabaneta",
        "La Estrella",
        "Caldas"
    ];


    // =====================================
    // CATÁLOGO INICIAL DE SUGERENCIAS
    // =====================================

    // Son sugerencias iniciales, no catálogos oficiales completos.
    // El usuario puede escribir un barrio que no aparezca.

    const barriosPorMunicipio = {

        "Bello": [
            "Niquía",
            "Cabañas",
            "Cabañitas",
            "La Cumbre",
            "Santa Ana",
            "Niquía Camacol",
            "El Rosario",
            "París",
            "Zamora"
        ],

        "Envigado": [
            "La Magnolia",
            "El Dorado",
            "Alcalá",
            "Jardines",
            "La Paz"
        ],

        "Itagüí": [
            "Centro",
            "Santa María",
            "Ditaires",
            "Suramérica",
            "San Pío"
        ],

        "Sabaneta": [
            "Entreamigos",
            "Vegas de San José",
            "Aves María",
            "Restrepo Naranjo"
        ],

        "La Estrella": [
            "La Tablaza",
            "Ancón",
            "Centro",
            "Pueblo Viejo"
        ],

        "Caldas": [
            "La Docena",
            "Andalucía",
            "Centro",
            "La Inmaculada"
        ]

    };


    // =====================================
    // CAMBIAR CAMPOS SEGÚN EL MUNICIPIO
    // =====================================

    municipio.addEventListener("change", () => {

        const seleccionado = municipio.value;

        // Reiniciar los campos anteriores.
        selectorZona.innerHTML = '<option value="">Selecciona una zona</option>';

        campoBarrio.value = "";
        listaBarrios.innerHTML = "";

        selectorZona.classList.add("hidden");
        campoBarrio.classList.add("hidden");
        contenedorZona.classList.add("hidden");

        ayudaZona.textContent = "";

        // Si selecciona Medellín.
        if (seleccionado === "Medellín") {

            contenedorZona.classList.remove("hidden");
            selectorZona.classList.remove("hidden");

            etiquetaZona.textContent = "Comuna o corregimiento";

            // Crear grupo de comunas.
            const grupoComunas = document.createElement("optgroup");
            grupoComunas.label = "Comunas";

            comunasMedellin.forEach((comuna) => {

                const opcion = document.createElement("option");

                opcion.value = comuna;
                opcion.textContent = comuna;

                grupoComunas.appendChild(opcion);

            });

            // Crear grupo de corregimientos.
            const grupoCorregimientos = document.createElement("optgroup");
            grupoCorregimientos.label = "Corregimientos";

            corregimientosMedellin.forEach((corregimiento) => {

                const opcion = document.createElement("option");

                opcion.value = corregimiento;
                opcion.textContent = corregimiento;

                grupoCorregimientos.appendChild(opcion);

            });

            selectorZona.appendChild(grupoComunas);
            selectorZona.appendChild(grupoCorregimientos);

            ayudaZona.textContent =
                "Selecciona tu comuna o corregimiento.";

        }

        // Si selecciona uno de los municipios con barrios.
        else if (municipiosConBarrio.includes(seleccionado)) {

            contenedorZona.classList.remove("hidden");
            campoBarrio.classList.remove("hidden");

            etiquetaZona.textContent = "Barrio";

            const barrios = barriosPorMunicipio[seleccionado] || [];

            // Crear sugerencias para el municipio seleccionado.
            barrios.forEach((barrio) => {

                const opcion = document.createElement("option");

                opcion.value = barrio;

                listaBarrios.appendChild(opcion);

            });

            ayudaZona.textContent =
                "Puedes elegir una sugerencia o escribir tu barrio manualmente.";

        }

    });


    // =====================================
    // SELECCIÓN DE SERVICIOS Y CANTIDADES
    // =====================================

    const servicios = document.querySelectorAll(
        'input[name="servicios"]'
    );

    servicios.forEach((servicio) => {

        servicio.addEventListener("change", () => {

            const campoCantidad = document.getElementById(
                servicio.dataset.cantidad
            );

            if (!campoCantidad) return;

            // Mostrar u ocultar el campo de cantidad.
            campoCantidad.classList.toggle(
                "hidden",
                !servicio.checked
            );

            // Limpiar cantidad si se desmarca el servicio.
            if (!servicio.checked) {

                const inputCantidad = campoCantidad.querySelector("input");

                inputCantidad.value = "";

            }

        });

    });


    // =====================================
    // ENVIAR FORMULARIO A WHATSAPP
    // =====================================

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        // Comprobar campos obligatorios y restricciones HTML.
        if (!formulario.reportValidity()) {
            return;
        }

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const direccion = document.getElementById("direccion").value.trim();

        const municipioSeleccionado = municipio.value;

        const zonaSeleccionada = municipioSeleccionado === "Medellín"
            ? selectorZona.value
            : campoBarrio.value.trim();


        // =====================================
        // VALIDAR CANTIDADES
        // =====================================

        const serviciosSeleccionados = document.querySelectorAll(
            'input[name="servicios"]:checked'
        );

        const cantidades = [];

        for (const servicio of serviciosSeleccionados) {

            const campoCantidad = document.getElementById(
                servicio.dataset.cantidad
            );

            const inputCantidad = campoCantidad.querySelector("input");

            const cantidad = inputCantidad.value.trim();

            // La cantidad es opcional.
            if (cantidad === "") {

                cantidades.push({
                    servicio: servicio.value,
                    cantidad: ""
                });

                continue;

            }

            const numero = Number(cantidad);

            // Solo aceptar números enteros desde 1.
            if (!Number.isInteger(numero) || numero < 1) {

                alert(
                    `La cantidad de ${servicio.value} debe ser un número entero mayor que cero.`
                );

                inputCantidad.focus();

                return;

            }

            cantidades.push({
                servicio: servicio.value,
                cantidad: numero
            });

        }


        // =====================================
        // CONSTRUIR MENSAJE
        // =====================================

        let mensaje = `¡Hola CleanPro! Quiero solicitar información o una cotización.

DATOS DEL CLIENTE
Nombre: ${nombre}
WhatsApp: ${telefono}`;

        // Agregar correo si fue proporcionado.
        if (correo !== "") {

            mensaje += `\nCorreo: ${correo}`;

            mensaje +=
                "\nInterés en el descuento del 10 % para mi primer servicio.";

        }


        // Agregar ubicación.
        mensaje += "\n\nUBICACIÓN";

        if (municipioSeleccionado !== "") {
            mensaje += `\nMunicipio: ${municipioSeleccionado}`;
        }

        if (zonaSeleccionada !== "") {
            mensaje += `\nZona: ${zonaSeleccionada}`;
        }

        if (direccion !== "") {
            mensaje += `\nDirección: ${direccion}`;
        }


        // Agregar servicios.
        mensaje += "\n\nSERVICIOS SOLICITADOS";

        if (cantidades.length > 0) {

            cantidades.forEach((item) => {

                mensaje += `\n${item.servicio}`;

                if (item.cantidad !== "") {

                    mensaje += `: ${item.cantidad}`;

                } else {

                    mensaje += ": Cantidad no especificada";

                }

            });

        } else {

            mensaje += "\nEl cliente aún no ha seleccionado un servicio.";

        }


        mensaje += "\n\nQuedo atento(a). ¡Gracias!";


        // =====================================
        // ABRIR WHATSAPP
        // =====================================

        const mensajeCodificado = encodeURIComponent(mensaje);

        const enlaceWhatsApp =
            `https://wa.me/${numeroWhatsAppCleanPro}?text=${mensajeCodificado}`;

        window.open(enlaceWhatsApp, "_blank");

    });

})();


