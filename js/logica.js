const boton = document.getElementById("calcular");
const texto = document.getElementById("texto");
const botonCopiar = document.getElementById("botonCopiar");

texto.innerHTML = "&#x2764 Hola Gibeeeee, te amo mucho &#x2764";
let textoCalculado = false;

/*function calcularHoraSegunPais(hora, minutos, diferenciaHoraria) {
    const fecha = new Date();
    fecha.setHours(parseInt(hora));
    fecha.setMinutes(parseInt(minutos));
    fecha.setHours(fecha.getHours() + diferenciaHoraria);

    const nuevaHora = fecha.getHours().toString().padStart(2, "0");
    const nuevosMinutos = fecha.getMinutes().toString().padStart(2, "0");

    return `${nuevaHora}:${nuevosMinutos} PM en (Canal)`;
}*/

function calcularHoraSegunPais(hora, minutos, diferenciaHoraria) {
    const fecha = new Date();
    fecha.setHours(parseInt(hora));
    fecha.setMinutes(parseInt(minutos));
    fecha.setHours(fecha.getHours() + diferenciaHoraria);

    let horaFormato12h = fecha.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return `${horaFormato12h} en (Canal)`;
}

boton.addEventListener("click", () => {
    const horaRecibida = document.getElementById("hora").value;
    const [hora, minutos] = horaRecibida.split(":");

    if (horaRecibida === "") {
        texto.innerHTML =
        "&#x2764 Pero amor, primero tenes que escribir la hora (con los minutos) &#x2764";
        textoCalculado = false;
    } else {
        texto.innerHTML = `
            Argentina: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
            Bolivia: ${calcularHoraSegunPais(hora, minutos, 1)}<br>
            Brasil: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
            Chile: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
            Colombia: ${calcularHoraSegunPais(hora, minutos, 0)}<br>
            Ecuador: ${calcularHoraSegunPais(hora, minutos, 0)}<br>
            Estados Unidos (ET): ${calcularHoraSegunPais(hora, minutos, 1)}<br>
            España: ${calcularHoraSegunPais(hora, minutos, 6)}<br>
            Inglaterra: ${calcularHoraSegunPais(hora, minutos, 5)}<br>
            México: ${calcularHoraSegunPais(hora, minutos, -1)}<br>
            Paraguay: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
            Perú: ${calcularHoraSegunPais(hora, minutos, 0)}<br>
            Uruguay: ${calcularHoraSegunPais(hora, minutos, 2)}<br>`;

        textoCalculado = true;
     }
});

const mensaje = document.querySelector("#mensaje");

botonCopiar.addEventListener("click", function () {
    const textoGenerado = document.getElementById("texto");

    if (textoCalculado == false)
    {
        textoGenerado.innerHTML = "&#x2764 Pero qué estás copiandoooo &#x2764";
        textoCalculado == false
    } else {
        // Esto copia lo que aparezca en el párrafo generado de forma directa
        /*
        const seleccion = window.getSelection();
        const rango = document.createRange();
        rango.selectNodeContents(textoGenerado);
        seleccion.removeAllRanges();
        seleccion.addRange(rango);
        document.execCommand("copy");
        seleccion.removeAllRanges();
        */

        // Esto lo hago para que al copiar se respete el formato de mejor manera
        const horaRecibida = document.getElementById("hora").value;
        const [hora, minutos] = horaRecibida.split(":");

        navigator.clipboard.writeText(`
Argentina: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
Bolivia: ${calcularHoraSegunPais(hora, minutos, 1)}<br>
Brasil: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
Chile: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
Colombia: ${calcularHoraSegunPais(hora, minutos, 0)}<br>
Ecuador: ${calcularHoraSegunPais(hora, minutos, 0)}<br>
Estados Unidos (ET): ${calcularHoraSegunPais(hora, minutos, 1)}<br>
España: ${calcularHoraSegunPais(hora, minutos, 6)}<br>
Inglaterra: ${calcularHoraSegunPais(hora, minutos, 5)}<br>
México: ${calcularHoraSegunPais(hora, minutos, -1)}<br>
Paraguay: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
Perú: ${calcularHoraSegunPais(hora, minutos, 0)}<br>
Uruguay: ${calcularHoraSegunPais(hora, minutos, 2)}<br>`);

        mensaje.innerHTML = "\u2714";
        mensaje.classList.add("fade-in");
        setTimeout(function () {
        mensaje.classList.remove("fade-in");
        mensaje.classList.add("fade-ou");
        }, 1500);
    }
});