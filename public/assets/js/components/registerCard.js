'use strict';

const registerCard = () => {
    $('#root').empty();
    const container = $('<div class="container" id="registerCard"></div>');

    const rowFirst  = $('<div class="row center-align"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgFirst  = $('<img src="assets/img/icons/bcp-logo.png" alt="bcp logo">');
    const title     = $('<h5>Registra tu tarjeta débito BCP</h5>');
    const parr      = $('<p>Por ahora sólo aceptamos cuentas de ahorro y/o corriente en soles</p>');

    const rowSecond = $('<div class="row"></div>');
    const colSecond = $('<div class="input-field col s12"></div>');
    const imgInput  = $('<img src="assets/img/icons/card.png" alt="card" class="responsive-img">');
    const inputV    = $('<input id="icon_prefix" type="text" class="validate center-align" maxlength="16">');
    const colSecPart = $('<div class="center-align col s12"></div>');
    const imgScan  = $('<img src="assets/img/icons/scan.png" alt="card" class="responsive-img">');
    const textPar   = $('<span>Escanear tarjeta</span>');


    const rowThird  = $('<div class="row"></div>');
    const colThird  = $('<div class="input-field col s12"></div>');
    const text      = $('<span>Fecha de vencimiento</span>');
    const inputMes  = $('<input type="text" class="validate center-align" placeholder="Mes" maxlength="2">');
    const line      = $('<span> / </span>');
    const inputAnio = $('<input type="text" class="validate center-align" placeholder="Año" maxlength="2">');


    const rowBtn  = $('<div class="row center-align"></div>');
    const colBtn  = $('<div class="col s12"></div>');
    const btn       = $('<button type="button" name="button" class="waves-effect waves-light btn btn-yellow disabled" >CONTINUAR</button>');

    colFirst.append(imgFirst);
    colFirst.append(title);
    colFirst.append(parr);
    rowFirst.append(colFirst);

    colSecond.append(imgInput);
    colSecond.append(inputV);
    colSecPart.append(imgScan);
    colSecPart.append(textPar);
    rowSecond.append(colSecond);
    rowSecond.append(colSecPart);

    colThird.append(text);
    colThird.append(inputMes);
    colThird.append(line);
    colThird.append(inputAnio);
    rowThird.append(colThird);

    colBtn.append(btn);
    rowBtn.append(colBtn);

    container.append(rowFirst);
    container.append(rowSecond);
    container.append(rowThird);
    container.append(rowBtn);


    return $('#root').append(container);
}
