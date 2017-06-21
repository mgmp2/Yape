'use strict';

const resendCode = (update) => {

    const container = $('<div class="container" id="registro"></div>');

    const rowFirst  = $('<div class="row center-align"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgFirst  = $('<img src="assets/img/icons/message.png" alt="phone">');
    const title     = $('<h5>Ahora ingresa tu código</h5>');
    const parr      = $('<p>Enviamos un SMS con el código de validación al número<strong>'+state.phone+'</strong></p>');

    const rowSecond = $('<div class="row"></div>');
    const colSecond = $('<div class="input-field col s12"></div>');
    const imgInput  = $('<img src="assets/img/icons/lock.png" alt="phone and number" class="responsive-img">');
    const inputV    = $('<input id="icon_prefix" type="text" class="validate center-align" placeholder="- - - - -"maxlength="5">');
    const colSec    = $('<div class="col s12" id="terms"></div>');
    const form      = $('<form action="#"></form>');
    const checkb    = $('<input type="checkbox" class="filled-in" id="filled-in-box" value=""/>');
    const label     = $('<label for="filled-in-box">Acepto los </label>');
    const terms     = $('<a href="#" class=""> Términos y Condiciones</a>');


    const rowThird  = $('<div class="row center-align"></div>');
    const colThird  = $('<div class="col s12"></div>');
    const btn       = $('<button type="button" name="button" class="waves-effect waves-light btn btn-yellow disabled" >CONTINUAR</button>');

    colFirst.append(imgFirst);
    colFirst.append(title);
    colFirst.append(parr);
    rowFirst.append(colFirst);

    colSecond.append(imgInput);
    colSecond.append(inputV);
    form.append(checkb);
    form.append(label);
    form.append(terms);
    colSec.append(form);
    rowSecond.append(colSecond);
    rowSecond.append(colSec);

    colThird.append(btn);
    rowThird.append(colThird);

    container.append(rowFirst);
    container.append(rowSecond);
    container.append(rowThird);


    return container
}
