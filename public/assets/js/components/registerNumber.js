'use strict';


const registroNum = (update) => {
    const registro = $('<div class="container" id="registro"></div>');

    const rowFirst  = $('<div class="row center-align"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgFirst  = $('<img src="assets/img/icons/phone.png" alt="phone">');
    const title     = $('<h5>Para comenzar validemos tu número</h5>');
    const parr      = $('<p>Recibirás un SMS con un código de validación </p>');

    const rowSecond = $('<div class="row"></div>');
    const colSecond = $('<div class="input-field col s12"></div>');
    const imgInput  = $('<img src="assets/img/icons/phoneandnumber.png" alt="phone and number" class="responsive-img">');
    const inputV    = $('<input id="icon_prefix" type="text" class="validate center-align" val="" maxlength="9">');
    const colSec    = $('<div class="col s12" id="terms"></div>');
    const form      = $('<form action="#"></form>');

    const checkb    = $('<input type="checkbox" class="filled-in" id="filled-in-box" value="false"/>');
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

    registro.append(rowFirst);
    registro.append(rowSecond);
    registro.append(rowThird);


    validateNumber(inputV);

    checkb.on('change', (e) => {
        e.preventDefault();
        if(checkb.is(':checked') && inputV.val().length == 9) {
            btn.removeClass("disabled");
        } else {
            btn.addClass("disabled");
        };
    });

    btn.on('click', (e) => {
        e.preventDefault();
        state.phone = inputV.val();
        $.post('api/registerNumber', {
           phone: state.phone,
           terms: true
       }, (response) => {
           state.msn = response.message;
           console.log(response);
           if(!state.msn || state.msn!="El número ya existe"){
               update();
           } else {
               inputV.val("");
               btn.addClass("disabled");
               alert(state.msn);
           }
       },'json'); // post de jQuery
    })

    return registro;
}
