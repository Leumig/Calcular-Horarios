const boton = document.getElementById("calcular");
const botonIng = document.getElementById("calcularIng");
const textoEsp = document.getElementById("textoEsp");
const botonCopiar = document.getElementById("botonCopiar");

// textoIng.setAttribute("hidden", "true");

textoEsp.innerHTML = "&#x2764 Hola Gibeeeee, te amo mucho. Para generar en Español, tiene que estar sólo la hora. Y para el Inglés, hora y fecha. &#x2764";
let textoEspCalculado = false;
let textoIngCalculado = false;

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
      "&#x2764 Pero amor, para el Español tenes que elegir la hora (con los minutos) &#x2764";
    textoEspCalculado = false;
  } else {
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
Venezuela: ${calcularHoraSegunPais(hora, minutos, 1)} en (Canal)`);
      textoEsp.innerHTML =
      "&#x2764 Texto en Español copiado correctamente &#x2764";
  }

});


botonIng.addEventListener("click", () => {
  const horaRecibida = document.getElementById("hora").value;
  const [hora, minutos] = horaRecibida.split(":");
  const fechaRecibida = document.getElementById("fecha").value;
  const [año, mes, dia] = fechaRecibida.split("-");

  const fecha = new Date(año, mes - 1, dia);

  const diasSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const diaSemana = diasSemana[fecha.getDay()];

  console.log(fechaRecibida);

  if (horaRecibida === "" || fechaRecibida == "") {
    textoEsp.innerHTML =
      "&#x2764 Pero amor, para el Inglés tenes que poner la hora y la fecha &#x2764";
    textoIngCalculado = false;
  } else {
    copiarTablaIngles(mes, dia, diaSemana, año, hora, minutos);
    textoEsp.innerHTML =
    "&#x2764 Tabla en Inglés copiada correctamente &#x2764";

    let tablaDiv = document.getElementById('tabla');

    tablaDiv.innerHTML = `
    <table border="1" cellpadding="1" cellspacing="1">
    <tbody>
      <tr>
        <td style="text-align: center;"><strong>Country</strong></td>
        <td style="text-align: center;"><strong>Date</strong></td>
        <td style="text-align: center;"><strong>Local Time</strong></td>		
        <td style="text-align: center;"><strong>TV Channel and Live Streams</strong></td>
      </tr>
      <tr>
        ${escribirTD('USA', mes, dia, diaSemana, año, hora, minutos, 1, 'ET')}
        <td style="text-align: center;">Telemundo, Telemundo Deportes En Vivo, Foxsports.com, FOX Network, UFORIA App, Futbol de Primera Radio, FOX Sports App, Sling, SiriusXM FC, Peacock</td>
      </tr>
      <tr>
        ${escribirTD('Argelia', mes, dia, diaSemana, año, hora, minutos, 6, '')}
        <td style="text-align: center;">beIN Sports MAX 4 Arabia, beIN Sports MAX 2 Arabia, beIN Sports MAX 3 Arabia, beIN Sports MAX 1 Arabia, TOD, beIN SPORTS CONNECT</td>
      </tr>
      <tr>
        ${escribirTD('Australia', mes, dia, diaSemana, año, hora, minutos, 16, 'AEDT')}
        <td style="text-align: center;">SBS On Demand,&nbsp;SBS</td>
      </tr>
      <tr>
        ${escribirTD('Bangladesh', mes, dia, diaSemana, año, hora, minutos, 11, 'IST')}
        <td style="text-align: center;">MTV India SD, Toffee Live, Gazi TV, T Sports, MTV India HD</td>
      </tr>
      <tr>
        ${escribirTD('Bolivia', mes, dia, diaSemana, año, hora, minutos, 1, '')}
        <td style="text-align: center;">Red Uno, Unitel, Tigo Sports Bolivia, Bolivia TV</td>
      </tr>
      <tr>
        ${escribirTD('Brazil', mes, dia, diaSemana, año, hora, minutos, 2, 'AM')}
        <td style="text-align: center;">SporTV 2, Canais Globo, Globo, GloboEsporte.com, SporTV, NOW NET e Claro</td>
      </tr>
      <tr>
        ${escribirTD('Canada', mes, dia, diaSemana, año, hora, minutos, 1, 'ET')}
        <td style="text-align: center;">RDS, TSN App, TSN5, TSN4, TSN3, TSN1, RDS App, TSN.ca</td>
      </tr>
      <tr>
        ${escribirTD('Chile', mes, dia, diaSemana, año, hora, minutos, 2, '')}
        <td style="text-align: center;">DIRECTV Sports Chile, Chilevision, DIRECTV Sports App, Canal 13</td>
      </tr>
      <tr>
        ${escribirTD('Colombia', mes, dia, diaSemana, año, hora, minutos, 0, '')}
        <td style="text-align: center;">RCN Television, Deportes RCN En Vivo, DIRECTV Sports Colombia, DIRECTV Sports App, Caracol Play, Caracol TV</td>
      </tr>
      <tr>
        ${escribirTD('Ecuador', mes, dia, diaSemana, año, hora, minutos, 0, '')}
        <td style="text-align: center;">Canal del Futbol, DIRECTV Sports Ecuador, Teleamazonas, DIRECTV Sports App, CNT Play</td>
      </tr>
      <tr>
        ${escribirTD('India', mes, dia, diaSemana, año, hora, minutos, 10, 'IST')}
        <td style="text-align: center;">Sports18 HD, JioTV, MTV India SD, Sports18, MTV India HD, DD Sports</td>
      </tr>
      <tr>
        ${escribirTD('Japan', mes, dia, diaSemana, año, hora, minutos, 14, 'AM')}
        <td style="text-align: center;">AbemaTV</td>
      </tr>
      <tr>
        ${escribirTD('Mexico', mes, dia, diaSemana, año, hora, minutos, -1, '')}
        <td style="text-align: center;">Sky HD, Blue To Go Video Everywhere</td>
      </tr>
      <tr>
        ${escribirTD('Morocco', mes, dia, diaSemana, año, hora, minutos, 5, '')}
        <td style="text-align: center;">beIN SPORTS CONNECT, beIN Sports MAX 3 Arabia, TOD, beIN Sports MAX 2 Arabia, beIN Sports MAX 4 Arabia, beIN Sports MAX 1 Arabia</td>
      </tr>
      <tr>
        ${escribirTD('New Zealand', mes, dia, diaSemana, año, hora, minutos, 18, '')}
        <td style="text-align: center;">Sky Sport 7 beIN Sports, Sky Sport NOW, beIN Sports Connect New Zealand, SKY Go NZ</td>
      </tr>
      <tr>
        ${escribirTD('Nigeria', mes, dia, diaSemana, año, hora, minutos, 6, '')}
        <td style="text-align: center;">SuperSport Laliga Nigeria, SuperSport GOtv Football, SuperSport MaXimo 1, SuperSport GOtv Select 1, SuperSport Football Plus Nigeria, SuperSport Variety, SuperSport MáXimo 3, SuperSport MaXimo 2, DStv Now, SuperSport Premier League Nigeria, NTA Sports 24, SuperSport GOtv LaLiga</td>
      </tr>
        <tr>
        ${escribirTD('Spain', mes, dia, diaSemana, año, hora, minutos, 6, '')}
        <td style="text-align: center;">Gol Mundial, RTVE.es, TVE La 1, fuboTV España</td>
      </tr>
      <tr>
        ${escribirTD('United Arab Emirates', mes, dia, diaSemana, año, hora, minutos, 9, '')}
        <td style="text-align: center;">TOD,&nbsp;beIN SPORTS CONNECT</td>
      </tr>
      <tr>
        ${escribirTD('United Kingdom', mes, dia, diaSemana, año, hora, minutos, 5, 'GMT')}
        <td style="text-align: center;">beIN Sports MAX 3 Arabia, beIN Sports MAX 4 Arabia, beIN Sports MAX 2 Arabia, beIN SPORTS CONNECT, beIN Sports MAX 1 Arabia, TOD</td>
      </tr>
      <tr>
        ${escribirTD('Peru', mes, dia, diaSemana, año, hora, minutos, 0, '')}
        <td style="text-align: center;">DIRECTV Sports Peru, Latina Televisión, DIRECTV Sports App</td>
      </tr>
    </tbody>
  </table>`;





    textoIngCalculado = true;
  }
});

function copiarTablaIngles(mes, dia, diaSemana, año, hora, minutos)
{
  navigator.clipboard.writeText(`
  <table border="1" cellpadding="1" cellspacing="1">
  <caption>
    <p style="text-align: center;">Live Streams
  </caption>
  <tbody>
    <tr>
      <td style="text-align: center;"><strong>Country</strong></td>
      <td style="text-align: center;"><strong>Date</strong></td>
      <td style="text-align: center;"><strong>Local Time</strong></td>		
      <td style="text-align: center;"><strong>TV Channel and Live Streams</strong></td>
    </tr>
    <tr>
      ${escribirTD('USA', mes, dia, diaSemana, año, hora, minutos, 1, 'ET')}
      <td style="text-align: center;">Telemundo, Telemundo Deportes En Vivo, Foxsports.com, FOX Network, UFORIA App, Futbol de Primera Radio, FOX Sports App, Sling, SiriusXM FC, Peacock</td>
    </tr>
    <tr>
      ${escribirTD('Argelia', mes, dia, diaSemana, año, hora, minutos, 6, '')}
      <td style="text-align: center;">beIN Sports MAX 4 Arabia, beIN Sports MAX 2 Arabia, beIN Sports MAX 3 Arabia, beIN Sports MAX 1 Arabia, TOD, beIN SPORTS CONNECT</td>
    </tr>
    <tr>
      ${escribirTD('Australia', mes, dia, diaSemana, año, hora, minutos, 16, 'AEDT')}
      <td style="text-align: center;">SBS On Demand,&nbsp;SBS</td>
    </tr>
    <tr>
      ${escribirTD('Bangladesh', mes, dia, diaSemana, año, hora, minutos, 11, 'IST')}
      <td style="text-align: center;">MTV India SD, Toffee Live, Gazi TV, T Sports, MTV India HD</td>
    </tr>
    <tr>
      ${escribirTD('Bolivia', mes, dia, diaSemana, año, hora, minutos, 1, '')}
      <td style="text-align: center;">Red Uno, Unitel, Tigo Sports Bolivia, Bolivia TV</td>
    </tr>
    <tr>
      ${escribirTD('Brazil', mes, dia, diaSemana, año, hora, minutos, 2, 'AM')}
      <td style="text-align: center;">SporTV 2, Canais Globo, Globo, GloboEsporte.com, SporTV, NOW NET e Claro</td>
    </tr>
    <tr>
      ${escribirTD('Canada', mes, dia, diaSemana, año, hora, minutos, 1, 'ET')}
      <td style="text-align: center;">RDS, TSN App, TSN5, TSN4, TSN3, TSN1, RDS App, TSN.ca</td>
    </tr>
    <tr>
      ${escribirTD('Chile', mes, dia, diaSemana, año, hora, minutos, 2, '')}
      <td style="text-align: center;">DIRECTV Sports Chile, Chilevision, DIRECTV Sports App, Canal 13</td>
    </tr>
    <tr>
      ${escribirTD('Colombia', mes, dia, diaSemana, año, hora, minutos, 0, '')}
      <td style="text-align: center;">RCN Television, Deportes RCN En Vivo, DIRECTV Sports Colombia, DIRECTV Sports App, Caracol Play, Caracol TV</td>
    </tr>
    <tr>
      ${escribirTD('Ecuador', mes, dia, diaSemana, año, hora, minutos, 0, '')}
      <td style="text-align: center;">Canal del Futbol, DIRECTV Sports Ecuador, Teleamazonas, DIRECTV Sports App, CNT Play</td>
    </tr>
    <tr>
      ${escribirTD('India', mes, dia, diaSemana, año, hora, minutos, 10, 'IST')}
      <td style="text-align: center;">Sports18 HD, JioTV, MTV India SD, Sports18, MTV India HD, DD Sports</td>
    </tr>
    <tr>
      ${escribirTD('Japan', mes, dia, diaSemana, año, hora, minutos, 14, 'AM')}
      <td style="text-align: center;">AbemaTV</td>
    </tr>
    <tr>
      ${escribirTD('Mexico', mes, dia, diaSemana, año, hora, minutos, -1, '')}
      <td style="text-align: center;">Sky HD, Blue To Go Video Everywhere</td>
    </tr>
    <tr>
      ${escribirTD('Morocco', mes, dia, diaSemana, año, hora, minutos, 5, '')}
      <td style="text-align: center;">beIN SPORTS CONNECT, beIN Sports MAX 3 Arabia, TOD, beIN Sports MAX 2 Arabia, beIN Sports MAX 4 Arabia, beIN Sports MAX 1 Arabia</td>
    </tr>
    <tr>
      ${escribirTD('New Zealand', mes, dia, diaSemana, año, hora, minutos, 18, '')}
      <td style="text-align: center;">Sky Sport 7 beIN Sports, Sky Sport NOW, beIN Sports Connect New Zealand, SKY Go NZ</td>
    </tr>
    <tr>
      ${escribirTD('Nigeria', mes, dia, diaSemana, año, hora, minutos, 6, '')}
      <td style="text-align: center;">SuperSport Laliga Nigeria, SuperSport GOtv Football, SuperSport MaXimo 1, SuperSport GOtv Select 1, SuperSport Football Plus Nigeria, SuperSport Variety, SuperSport MáXimo 3, SuperSport MaXimo 2, DStv Now, SuperSport Premier League Nigeria, NTA Sports 24, SuperSport GOtv LaLiga</td>
    </tr>
      <tr>
      ${escribirTD('Spain', mes, dia, diaSemana, año, hora, minutos, 6, '')}
      <td style="text-align: center;">Gol Mundial, RTVE.es, TVE La 1, fuboTV España</td>
    </tr>
    <tr>
      ${escribirTD('United Arab Emirates', mes, dia, diaSemana, año, hora, minutos, 9, '')}
      <td style="text-align: center;">TOD,&nbsp;beIN SPORTS CONNECT</td>
    </tr>
    <tr>
      ${escribirTD('United Kingdom', mes, dia, diaSemana, año, hora, minutos, 5, 'GMT')}
      <td style="text-align: center;">beIN Sports MAX 3 Arabia, beIN Sports MAX 4 Arabia, beIN Sports MAX 2 Arabia, beIN SPORTS CONNECT, beIN Sports MAX 1 Arabia, TOD</td>
    </tr>
    <tr>
      ${escribirTD('Peru', mes, dia, diaSemana, año, hora, minutos, 0, '')}
      <td style="text-align: center;">DIRECTV Sports Peru, Latina Televisión, DIRECTV Sports App</td>
    </tr>
  </tbody>
</table>`)
}

function escribirTD(pais, mesRecibido, dia, diaSemana, añoRecibido, horaColombia, minutos, diferencia, tipo) {
  let hora = parseInt(horaColombia) + diferencia;
  let mes = escribirMesResumido(mesRecibido);
  let año = añoRecibido - 2000;

  if (hora >= 24) {
    hora -= 24;
    dia++;

    if (dia > cantidadDiasMes(mesRecibido, añoRecibido)) {
      dia = 1;
      mesRecibido++;

      if (mesRecibido > 12) {
        mesRecibido = 1;
        año++;
      }

      mes = escribirMesResumido(String(mesRecibido));
    }

    const fecha = new Date(añoRecibido, mesRecibido - 1, dia);
    const diasSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    diaSemana = diasSemana[fecha.getDay()];
  }

  return `
<td style="text-align: center;">${pais}</td>
<td style="text-align: center;">${diaSemana}, ${dia} ${mes} ${año}</td>
<td style="text-align: center;">${hora}:${minutos} ${tipo}</td>`;
}


function cantidadDiasMes(mes, año) {
  return new Date(año, mes, 0).getDate();
}

function escribirMesResumido(mesRecibido)
{
  switch (mesRecibido) {
    case '01':
    case '1':
      return 'Jan';
    case '02':
    case '2':
      return 'Feb';
    case '03':
    case '3':
      return 'Mar';
    case '04':
    case '4':
      return 'Apr';
    case '05':
    case '5':
      return 'May';
    case '06':
    case '6':
      return 'Jun';
    case '07':
    case '7':
      return 'Jul';
    case '08':
    case '8':
      return 'Aug';
    case '09':
    case '9':
      return 'Sep';
    case '10':
      return 'Oct';
    case '11':
      return 'Nov';
    case '12':
      return 'Dic';
  }
}

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
