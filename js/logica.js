const boton = document.getElementById("calcular");
const textoEsp = document.getElementById("textoEsp");
const textoIng = document.getElementById("textoIng");
const botonCopiar = document.getElementById("botonCopiar");

textoIng.setAttribute("hidden", "true");

textoEsp.innerHTML = "&#x2764 Hola Gibeeeee, te amo mucho &#x2764";
let textoEspCalculado = false;
let textoIngCalculado = false;
let mostrarIngles = false;

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

  let horaFormato12h = fecha.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return `${horaFormato12h}`;
}

boton.addEventListener("click", () => {
  const horaRecibida = document.getElementById("hora").value;
  const [hora, minutos] = horaRecibida.split(":");

  if (horaRecibida === "") {
    textoEsp.innerHTML =
      "&#x2764 Pero amor, primero tenes que escribir la hora (con los minutos) &#x2764";
    textoEspCalculado = false;
    textoIngCalculado = false;
    mostrarIngles = false;
    textoIng.setAttribute("hidden", "true");
  } else {
    textoEsp.innerHTML = `
            Argentina: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
            Bolivia: ${calcularHoraSegunPais(hora, minutos, 1)} en (Canal)<br>
            Brasil: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
            Chile: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
            Colombia: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)<br>
            Ecuador: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)<br>
            Estados Unidos (ET): ${calcularHoraSegunPais(
              hora,
              minutos,
              1
            )} en (Canal)<br>
            España: ${calcularHoraSegunPais(hora, minutos, 6)} en (Canal)<br>
            Inglaterra: ${calcularHoraSegunPais(
              hora,
              minutos,
              5
            )} en (Canal)<br>
            México: ${calcularHoraSegunPais(hora, minutos, -1)} en (Canal)<br>
            Paraguay: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
            Perú: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)<br>
            Uruguay: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
            Venezuela: ${calcularHoraSegunPais(hora, minutos, 1)} en (Canal)<br>`;
    textoEspCalculado = true;

    mostrarIngles = true;
    if (mostrarIngles) {
      textoIng.removeAttribute("hidden");

      textoIng.innerHTML = `Argentina: ${calcularHoraSegunPais(
        hora,
        minutos,
        2
      )} on (Channel)<br>
            Bolivia: ${calcularHoraSegunPais(hora, minutos, 1)} on (Channel)<br>
            Brazil: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)<br>
            Chile: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)<br>
            Colombia: ${calcularHoraSegunPais(
              hora,
              minutos,
              0
            )} on (Channel)<br>
            Ecuador: ${calcularHoraSegunPais(hora, minutos, 0)} on (Channel)<br>
            USA (ET): ${calcularHoraSegunPais(
              hora,
              minutos,
              1
            )} on (Channel)<br>
            Spain: ${calcularHoraSegunPais(hora, minutos, 6)} on (Channel)<br>
            England: ${calcularHoraSegunPais(hora, minutos, 5)} on (Channel)<br>
            Mexico: ${calcularHoraSegunPais(hora, minutos, -1)} on (Channel)<br>
            Paraguay: ${calcularHoraSegunPais(
              hora,
              minutos,
              2
            )} on (Channel)<br>
            Peru: ${calcularHoraSegunPais(hora, minutos, 0)} on (Channel)<br>
            Uruguay: ${calcularHoraSegunPais(
              hora,
              minutos,
              2
            )} on (Channel)<br>`;
      textoIngCalculado = true;
    }
  }
});

/*
<br>
<br>
<br>
Argentina: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)<br>
Bolivia: ${calcularHoraSegunPais(hora, minutos, 1)} on (Channel)<br>
Brazil: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)<br>
Chile: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)<br>
Colombia: ${calcularHoraSegunPais(hora, minutos, 0)} on (Channel)<br>
Ecuador: ${calcularHoraSegunPais(hora, minutos, 0)} on (Channel)<br>
USA (ET): ${calcularHoraSegunPais(hora, minutos, 1)} on (Channel)<br>
Spain: ${calcularHoraSegunPais(hora, minutos, 6)} on (Channel)<br>
England: ${calcularHoraSegunPais(hora, minutos, 5)} on (Channel)<br>
Mexico: ${calcularHoraSegunPais(hora, minutos, -1)} on (Channel)<br>
Paraguay: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)<br>
Peru: ${calcularHoraSegunPais(hora, minutos, 0)} on (Channel)<br>
Uruguay: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)<br>
*/

const mensaje = document.querySelector("#mensaje");

textoEsp.addEventListener(
"click", () => {
    const textoEspGenerado = document.getElementById("textoEsp");

    if (textoEspCalculado == false) {
      textoEspGenerado.innerHTML = "&#x2764 Pero qué estás copiandoooo &#x2764";
      textoEspCalculado == false;
    } else {
      // Esto lo hago para que al copiar se respete el formato de mejor manera
      const horaRecibida = document.getElementById("hora").value;
      const [hora, minutos] = horaRecibida.split(":");

      navigator.clipboard.writeText(`
Argentina: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)
Bolivia: ${calcularHoraSegunPais(hora, minutos, 1)} en (Canal)
Brasil: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)
Chile: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)
Colombia: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)
Ecuador: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)
Estados Unidos (ET): ${calcularHoraSegunPais(hora, minutos, 1)} en (Canal)
España: ${calcularHoraSegunPais(hora, minutos, 6)} en (Canal)
Inglaterra: ${calcularHoraSegunPais(hora, minutos, 5)} en (Canal)
México: ${calcularHoraSegunPais(hora, minutos, -1)} en (Canal)
Paraguay: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)
Perú: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)
Uruguay: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)
Venezuela: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)`);


      mensaje.innerHTML = "\u2714";
      mensaje.classList.add("fade-in");
      setTimeout(function () {
        mensaje.classList.remove("fade-in");
        mensaje.classList.add("fade-ou");
      }, 1500);
    }
});



textoIng.addEventListener("click", () => {
    const textoIngGenerado = document.getElementById("textoEsp");

    if (textoIngCalculado == false) {
        textoIngGenerado.innerHTML = "&#x2764 Pero qué estás copiandoooo &#x2764";
        textoIngCalculado == false;
    } else {
      // Esto lo hago para que al copiar se respete el formato de mejor manera
      const horaRecibida = document.getElementById("hora").value;
      const [hora, minutos] = horaRecibida.split(":");

      navigator.clipboard.writeText(`
Argentina: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)
Bolivia: ${calcularHoraSegunPais(hora, minutos, 1)} on (Channel)
Brazil: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)
Chile: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)
Colombia: ${calcularHoraSegunPais(hora, minutos, 0)} on (Channel)
Ecuador: ${calcularHoraSegunPais(hora, minutos, 0)} on (Channel)
USA (ET): ${calcularHoraSegunPais(hora, minutos, 1)} on (Channel)
Spain: ${calcularHoraSegunPais(hora, minutos, 6)} on (Channel)
England: ${calcularHoraSegunPais(hora, minutos, 5)} on (Channel)
Mexico: ${calcularHoraSegunPais(hora, minutos, -1)} on (Channel)
Paraguay: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)
Peru: ${calcularHoraSegunPais(hora, minutos, 0)} on (Channel)
Uruguay: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)
Venezuela: ${calcularHoraSegunPais(hora, minutos, 2)} on (Channel)`);

      mensaje.innerHTML = "\u2714";
      mensaje.classList.add("fade-in");
      setTimeout(function () {
        mensaje.classList.remove("fade-in");
        mensaje.classList.add("fade-ou");
      }, 1500);
    }
});









// botonCopiar.addEventListener("click", function () {
//     const textoEspGenerado = document.getElementById("textoEsp");

//     if (textoEspCalculado == false)
//     {
//         textoEspGenerado.innerHTML = "&#x2764 Pero qué estás copiandoooo &#x2764";
//         textoEspCalculado == false
//     } else {
//         // Esto copia lo que aparezca en el párrafo generado de forma directa
//         /*
//         const seleccion = window.getSelection();
//         const rango = document.createRange();
//         rango.selectNodeContents(textoEspGenerado);
//         seleccion.removeAllRanges();
//         seleccion.addRange(rango);
//         document.execCommand("copy");
//         seleccion.removeAllRanges();
//         */

//         // Esto lo hago para que al copiar se respete el formato de mejor manera
//         const horaRecibida = document.getElementById("hora").value;
//         const [hora, minutos] = horaRecibida.split(":");

//         navigator.clipboard.writeText(`
// Argentina: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
// Bolivia: ${calcularHoraSegunPais(hora, minutos, 1)} en (Canal)<br>
// Brasil: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
// Chile: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
// Colombia: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)<br>
// Ecuador: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)<br>
// Estados Unidos (ET): ${calcularHoraSegunPais(hora, minutos, 1)} en (Canal)<br>
// España: ${calcularHoraSegunPais(hora, minutos, 6)} en (Canal)<br>
// Inglaterra: ${calcularHoraSegunPais(hora, minutos, 5)} en (Canal)<br>
// México: ${calcularHoraSegunPais(hora, minutos, -1)} en (Canal)<br>
// Paraguay: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>
// Perú: ${calcularHoraSegunPais(hora, minutos, 0)} en (Canal)<br>
// Uruguay: ${calcularHoraSegunPais(hora, minutos, 2)} en (Canal)<br>`);

//         mensaje.innerHTML = "\u2714";
//         mensaje.classList.add("fade-in");
//         setTimeout(function () {
//         mensaje.classList.remove("fade-in");
//         mensaje.classList.add("fade-ou");
//         }, 1500);
//     }
// });
