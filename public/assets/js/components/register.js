'use strict';


const registroNum = (update) => {
    const container = $('<div class="container" id="registro"></div>');

    const rowFirst  = $('<div class="row center-align"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgFirst  = $('<img src="assets/img/icons/phone.png" alt="phone">');
    const title     = $('<h5>Para comenzar validemos tu número</h5>');
    const parr      = $('<p>Recibirás un SMS con un código de validación </p>');

    const rowSecond  = $('<div class="row"></div>');
    const colSecond  = $('<div class="input-field col s12"></div>');
    const imgInput  = $('<img src="assets/img/icons/phoneandnumber.png" alt="phone and number" class="responsive-img">');
    const inputV     = $('<input id="icon_prefix" type="text" class="validate center-align" pattern="0||1||2||3||4||5||6||7||8||9"  maxlength="10">');
    const colSec    = $('<div class="col s12" id="terms"></div>');
    const form     = $('<form action="#"></form>');
    const checkb  = $('<input type="checkbox" class="filled-in" id="filled-in-box" />');
    const label     = $('<label for="filled-in-box">Acepto los </label>');
    const terms     = $('<a href="#" class=""> Términos y Condiciones</a>');


    const rowThird  = $('<div class="row center-align"></div>');
    const colThird  = $('<div class="col s12"></div>');
    const btn       = $('<button type="button" name="button" class="waves-effect waves-light btn btn-yellow" disabled>CONTINUAR</button>');

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

    // $('for="filled-in-box" ').on('click', function(){
    //     alert();
    // });
    inputV.on('keypress', () => {
        if(/^[0-9]{9}$/.test(inputV.val())){
            console.log("good");
            checkb.on('change', (e) => {
                console.log($("input[type='checkbox']").val());
            });

        }
    });



    return container;
}
