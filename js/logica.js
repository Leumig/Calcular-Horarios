const boton = document.getElementById("calcular");
const texto = document.getElementById("texto");
const botonCopiar = document.getElementById("botonCopiar");

texto.innerHTML = "&#x2764 Hola Gibeeeee, te amo mucho &#x2764";
let textoCalculado = false;

function calcularHoraSegunPais(hora, minutos, diferenciaHoraria) {
    const fecha = new Date();
     fecha.setHours(parseInt(hora));
     fecha.setMinutes(parseInt(minutos));
     fecha.setHours(fecha.getHours() + diferenciaHoraria);

     const nuevaHora = fecha.getHours().toString().padStart(2, "0");
     const nuevosMinutos = fecha.getMinutes().toString().padStart(2, "0");

     return `${nuevaHora}:${nuevosMinutos} hrs.`;
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
            Colombia: ${horaRecibida} hrs.<br>
            Ecuador: ${horaRecibida} hrs.<br>
            Estados Unidos: ${horaRecibida} hrs.<br>
            España: ${calcularHoraSegunPais(hora, minutos, 6)}<br>
            Inglaterra: ${calcularHoraSegunPais(hora, minutos, 5)}<br>
            México: ${calcularHoraSegunPais(hora, minutos, -1)}<br>
            Paraguay: ${calcularHoraSegunPais(hora, minutos, 2)}<br>
            Perú: ${horaRecibida} hrs.<br>
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
        const seleccion = window.getSelection();
        const rango = document.createRange();
        rango.selectNodeContents(textoGenerado);
        seleccion.removeAllRanges();
        seleccion.addRange(rango);
        document.execCommand("copy");
        seleccion.removeAllRanges();
    
        mensaje.innerHTML = "\u2714";
        mensaje.classList.add("fade-in");
        setTimeout(function () {
        mensaje.classList.remove("fade-in");
        mensaje.classList.add("fade-ou");
        }, 1500);
    }
});