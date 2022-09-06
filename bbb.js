let divHora = document.getElementById('hora');
let divFecha = document.getElementById('fecha');

setInterval((reloj) => {

    let marca = new Date();
    let hora = marca.getHours();
    let día = marca.getDay();
    let fecha = marca.getDate();
    let mes = marca.getMonth();
    let minutos = marca.getMinutes();
    let segundos = marca.getSeconds();

    console.log(fecha);

    switch (día) {
        case 1:
            día = "Lunes"

            break;
        case 2:
            día = "Martes"

            break;
        case 3:
            día = "Miércoles"

            break;
        case 4:
            día = "Jueves"

            break;
        case 5:
            día = "Viernes"

            break;
        case 6:
            día = "Sábado"

            break;
        case 7:
            día = "Domingo"

            break;

        default:
            break;
    }

    switch (mes) {
        case 0:
            mes = "Enero";
            break;
        case 1:
            mes = "Febrero";
            break;
        case 2:
            mes = "Marzo";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Mayo";
            break;
        case 5:
            mes = "Junio";
            break;
        case 6:
            mes = "Julio";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Septiembre";
            break;
        case 9:
            mes = "Octubre";
            break;
        case 10:
            mes = "Noviembre";
            break;
        case 11:
            mes = "Diciembre";
            break;
    }

    console.log(día);
    console.log(`Hoy es ${día}`);
    divFecha.innerHTML = `<span>Hoy es ${día} ${fecha} de ${mes}</span>`;
    divHora.innerHTML = `<span>${hora}:${minutos}:${segundos}</span>`;
    return;
},1000)
