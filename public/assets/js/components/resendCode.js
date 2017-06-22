'use strict';

const resendCode = (update) => {

    const container = $('<div class="container" id="resendCode"></div>');

    const rowFirst  = $('<div class="row center-align"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgFirst  = $('<img src="assets/img/icons/message.png" alt="phone">');
    const title     = $('<h5>Ahora ingresa tu código</h5>');
    const parr      = $('<p>Enviamos un SMS con el código de validación al número <strong>'+state.phone+'</strong></p>');

    const rowSecond = $('<div class="row center-align"></div>');
    const colSecond = $('<div class="input-field col s12"></div>');
    const imgInput  = $('<img src="assets/img/icons/lock.png" alt="phone and number" class="responsive-img">');
    const inputV    = $('<input id="icon_prefix" type="text" class="validate center-align" placeholder="- - - - -"maxlength="6">');
    const span      = $('<span>Reintentar en </span><img src="assets/img/icons/clock.png" alt="phone and number" class="responsive-img"><span id="count"></span>')

    colFirst.append(imgFirst);
    colFirst.append(title);
    colFirst.append(parr);
    rowFirst.append(colFirst);

    colSecond.append(imgInput);
    colSecond.append(inputV);
    rowSecond.append(colSecond);
    rowSecond.append(span);

    container.append(rowFirst);
    container.append(rowSecond);
    // MY FUNCTION COUNT
    const countTime = setInterval(function(){
        myTimer()
    }, 1000);
    let time = 22;
    function myTimer() {
        if(time == 0) {
            time= 22;
            $.post('api/resendCode', {
                phone: state.phone
            }, (response) => {
                state.cod = response.data;
                console.log(response);
                alert("Él código generado es: " +state.cod);
            },'json');
        } else if (time == 22) {
            $.post('api/resendCode', {
                phone: state.phone
            }, (response) => {
                state.cod = response.data;
                console.log(response);
                alert("Él código generado es: " +state.cod);
            },'json');
        }time --;
        $('#count').html(time);
    }
    // --------------------------------------------------

        inputV.on('keyup', () => {
            if(state.cod == inputV.val()) {
                clearInterval(countTime);
                update();
            }
        })
    return container
}
