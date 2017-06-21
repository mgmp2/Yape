'use strict';

const resendCode = (update) => {

    const container = $('<div class="container" id="resendCode"></div>');

    const rowFirst  = $('<div class="row center-align"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgFirst  = $('<img src="assets/img/icons/message.png" alt="phone">');
    const title     = $('<h5>Ahora ingresa tu código</h5>');
    const parr      = $('<p>Enviamos un SMS con el código de validación al número<strong>'+state.phone+'</strong></p>');

    const rowSecond = $('<div class="row"></div>');
    const colSecond = $('<div class="input-field col s12"></div>');
    const imgInput  = $('<img src="assets/img/icons/lock.png" alt="phone and number" class="responsive-img">');
    const inputV    = $('<input id="icon_prefix" type="text" class="validate center-align" placeholder="- - - - -"maxlength="6">');




    colFirst.append(imgFirst);
    colFirst.append(title);
    colFirst.append(parr);
    rowFirst.append(colFirst);

    colSecond.append(imgInput);
    colSecond.append(inputV);
    rowSecond.append(colSecond);

    container.append(rowFirst);
    container.append(rowSecond);

    while (parr) {

        $.post('api/resendCode', { phone: state.phone }, (response) => {
            state.cod = response.data;
            alert("Él código generado es: " +state.cod);
        },'json');

        setInterval(function(){
            $.post('api/resendCode', {
                phone: state.phone
            }, (response) => {
                state.cod = response.data;
                console.log(response);
                alert("Él código generado es: " +state.cod);
            },'json');
        }, 21000);

        inputV.on('keyup', () => {
            if(state.cod == inputV.val()) {
                update();
            }


        })
    }
    return container
}