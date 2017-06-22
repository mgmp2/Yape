'use strict';

const passwCard = (update) => {

    const passwordCard = $('<div class="container" id="passwCard"></div>');

    const rowFirst  = $('<div class="row center-align"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgFirst  = $('<img src="assets/img/icons/bcp-logo.png" alt="bcp logo">');
    const title     = $('<h5>Ingresa la clave de tu tarjeta</h5>');
    const parr      = $('<p>Tarjeta <strong>****'+state.numCard.substr(-4)+'</strong></p>');

    const rowSecond = $('<div class="row"></div>');
    const colSecond = $('<div class="input-field col s12"></div>');
    const imgInput  = $('<img src="assets/img/icons/lock.png" alt="phone and number" class="responsive-img">');
    const inputV    = $('<input id="icon_prefix" type="password" class="validate center-align" placeholder="- - - - -"maxlength="5">');



    const rowBtn  = $('<div class="row center-align"></div>');
    const colBtn  = $('<div class="col s12"></div>');
    const btn       = $('<button type="button" name="button" class="waves-effect waves-light btn btn-yellow disabled" >REGISTRAR</button>');

    colFirst.append(imgFirst);
    colFirst.append(title);
    colFirst.append(parr);
    rowFirst.append(colFirst);

    colSecond.append(imgInput);
    colSecond.append(inputV);
    rowSecond.append(colSecond);



    colBtn.append(btn);
    rowBtn.append(colBtn);

    passwordCard.append(rowFirst);
    passwordCard.append(rowSecond);
    passwordCard.append(rowBtn);

    validateNumber(inputV);


    inputV.on('keyup', _ => {
            if(inputV.val().length == 5){
                btn.removeClass("disabled");
            } else {
                btn.addClass("disabled");

            }
    })
    btn.on('click', (e) => {
        e.preventDefault();
        lastMove();

    })
    return passwordCard;
}
