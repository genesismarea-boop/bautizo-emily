/*==================================================
    EL BAUTIZO DE EMILY
    SCRIPT.JS
    PARTE 1
==================================================*/

"use strict";

/*=========================================
CARGA DEL DOCUMENTO
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarLoader();
    iniciarCuentaRegresiva();
    iniciarBotonMusica();
    iniciarBotonAbrir();
    iniciarBotonSubir();

});

/*=========================================
LOADER
=========================================*/

function iniciarLoader() {

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            document.body.classList.add("loaded");

        }, 1200);

    });

}

/*=========================================
CUENTA REGRESIVA
=========================================*/

function iniciarCuentaRegresiva() {

    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const fechaEvento = new Date("October 24, 2026 13:50:00").getTime();

    function actualizar() {

        const ahora = new Date().getTime();

        const diferencia = fechaEvento - ahora;

        if (diferencia <= 0) {

            dias.textContent = "00";
            horas.textContent = "00";
            minutos.textContent = "00";
            segundos.textContent = "00";

            return;

        }

        const d = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        const h = Math.floor(
            (diferencia % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const m = Math.floor(
            (diferencia % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const s = Math.floor(
            (diferencia % (1000 * 60))
            / 1000
        );

        dias.textContent = String(d).padStart(2, "0");
        horas.textContent = String(h).padStart(2, "0");
        minutos.textContent = String(m).padStart(2, "0");
        segundos.textContent = String(s).padStart(2, "0");

    }

    actualizar();

    setInterval(actualizar, 1000);

}

/*=========================================
MÚSICA
=========================================*/

function iniciarBotonMusica() {

    const musica = document.getElementById("bgMusic");

    const boton = document.getElementById("musicButton");

    if (!musica || !boton) return;

    boton.addEventListener("click", () => {

        if (musica.paused) {

            musica.play();

            boton.classList.remove("paused");

        } else {

            musica.pause();

            boton.classList.add("paused");

        }

    });

}

/*=========================================
BOTÓN ABRIR INVITACIÓN
=========================================*/

function iniciarBotonAbrir() {

    const boton = document.getElementById("openInvitation");

    const musica = document.getElementById("bgMusic");

    if (!boton) return;

    boton.addEventListener("click", () => {

        if (musica && musica.paused) {

            musica.play().catch(() => {});

        }

    });

}
/*==================================================
    SCRIPT.JS
    PARTE 2
==================================================*/

/*=========================================
BOTÓN VOLVER ARRIBA
=========================================*/

function iniciarBotonSubir() {

    const boton = document.getElementById("backTop");

    if (!boton) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            boton.classList.add("show");

        } else {

            boton.classList.remove("show");

        }

    });

    boton.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*=========================================
ANIMACIONES AL HACER SCROLL
=========================================*/

function iniciarAnimaciones() {

    const elementos = document.querySelectorAll(

        ".fade, .fade-up, .fade-left, .fade-right, .zoom, .timeline-item"

    );

    if (!elementos.length) return;

    const observer = new IntersectionObserver((entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    elementos.forEach((elemento) => {

        observer.observe(elemento);

    });

}

/*=========================================
LIGHTBOX GALERÍA
=========================================*/

function iniciarLightbox() {

    const imagenes = document.querySelectorAll(".gallery-item img");

    const lightbox = document.getElementById("lightbox");

    const imagenGrande = document.getElementById("lightboxImage");

    const cerrar = document.querySelector(".lightbox-close");

    if (!imagenes.length || !lightbox || !imagenGrande || !cerrar) return;

    imagenes.forEach((imagen) => {

        imagen.addEventListener("click", () => {

            imagenGrande.src = imagen.src;

            imagenGrande.alt = imagen.alt;

            lightbox.classList.add("active");

        });

    });

    cerrar.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}

/*=========================================
INICIALIZAR EFECTOS VISUALES
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    iniciarAnimaciones();

    iniciarLightbox();

});
/*==================================================
    SCRIPT.JS
    PARTE 3
==================================================*/

/*=========================================
SCROLL SUAVE DEL BOTÓN ABRIR INVITACIÓN
=========================================*/

const botonAbrir = document.getElementById("openInvitation");

if (botonAbrir) {

    botonAbrir.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.getElementById("bienvenida");

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

}

/*=========================================
CERRAR LIGHTBOX CON ESC
=========================================*/

document.addEventListener("keydown", function (e) {

    if (e.key !== "Escape") return;

    const lightbox = document.getElementById("lightbox");

    if (lightbox) {

        lightbox.classList.remove("active");

    }

});

/*=========================================
REPRODUCIR MÚSICA EN LA PRIMERA INTERACCIÓN
=========================================*/

(function () {

    const musica = document.getElementById("bgMusic");

    if (!musica) return;

    function iniciarMusica() {

        musica.play().catch(() => {});

        document.removeEventListener("click", iniciarMusica);

        document.removeEventListener("touchstart", iniciarMusica);

    }

    document.addEventListener("click", iniciarMusica);

    document.addEventListener("touchstart", iniciarMusica);

})();

/*=========================================
PREVENIR ERRORES EN CONSOLA
=========================================*/

window.addEventListener("error", function (e) {

    console.warn("Error detectado:", e.message);

});

/*=========================================
FIN DEL SCRIPT
=========================================*/

console.log("Invitación 'El Bautizo de Emily' cargada correctamente.");
