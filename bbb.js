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
    let año = marca.getFullYear();

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
            mes = "01";
            break;
        case 1:
            mes = "02";
            break;
        case 2:
            mes = "03";
            break;
        case 3:
            mes = "04";
            break;
        case 4:
            mes = "05";
            break;
        case 5:
            mes = "06";
            break;
        case 6:
            mes = "07";
            break;
        case 7:
            mes = "08";
            break;
        case 8:
            mes = "09";
            break;
        case 9:
            mes = "10";
            break;
        case 10:
            mes = "11";
            break;
        case 11:
            mes = "12";
            break;
    }

    console.log(día);
    console.log(`Hoy es ${día}`);
    divFecha.innerHTML = `<span>${fecha}/${mes}/${año}</span>`;
    divHora.innerHTML = `<span>${hora}:${minutos}:${segundos}</span>`;
    return;
},1000)
