const lastMove = () => {
    $('#root').empty();
    const move = $('<div id="lastMove"></div>');

    const rowFirst  = $('<div class="row center-align bg-purple-light"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgSetting  = $('<img src="assets/img/icons/engine.png" class="img-engine" alt="engine">');
    const imgFirst  = $('<img src="assets/img/icons/happy-face.png" alt="happy face">');
    const title     = $('<h5>Hola</h5>');

    const colSecond     = $('<div class="col s12" id="line"></div>');
    const imgScan       = $('<img src="assets/img/icons/eye.png" alt="eye" class="responsive-img">');
    const textPar       = $('<span>Mostrar Saldo</span>');

    const boxMovimientos= $('<div class="bg-purple-dark"></div>')

    const rowMov     = $('<div class="row center-align row-header"></div>');
    const colMov        = $('<div class="col s12 "></div>');
    const parMov        = $('<p>ÚLTIMOS MOVIMIENTOS</p><img src="assets/img/icons/right-arrow-circular-button.png" alt="right arrow"><br><hr>')

    const rowPay        = $('<div class="row row-pay"></div>');
    const colPayImg     = $('<div class="col s4"></div>');
    const payImg        = $('<img src="assets/img/icons/icon.png" alt="movimiento" class="responsive-img">');
    const colPayText    = $('<div class="col s8"></div>');
    const textQues      = $('<p>¿Aún no realizas tu primer pago?</p>');
    const textSpan      = $('<span>Es rápido y sencillo</span>');

    const rowSendGet    = $('<div class="row center-align row-send-get"></div>');
    const colSend       = $('<div class="col s6"></div>');
    const sendImg       = $('<img src="assets/img/icons/send.png" alt="send" class="responsive-img">');
    const textSend      = $('<p>ENVIAR PAGO</p>');

    const colGet        = $('<div class="col s6"></div>');
    const getImg        = $('<img src="assets/img/icons/code-qr.png" alt="codigo qr" class="responsive-img">');
    const textGet      = $('<p>RECIBIR PAGO</p>');


    colFirst.append(imgFirst);
    colFirst.append(title);
    colFirst.append(imgSetting);
    colSecond.append(imgScan);
    colSecond.append(textPar);
    rowFirst.append(colFirst);
    rowFirst.append(colSecond);

    colMov.append(parMov);
    rowMov.append(colMov);

    colPayImg.append(payImg);
    colPayText.append(textQues);
    colPayText.append(textSpan);
    rowPay.append(colPayImg);
    rowPay.append(colPayText);

    colSend.append(sendImg);
    colSend.append(textSend);
    colGet.append(getImg);
    colGet.append(textGet);
    rowSendGet.append(colSend);
    rowSendGet.append(colGet);

    boxMovimientos.append(rowMov);
    boxMovimientos.append(rowPay);
    boxMovimientos.append(rowSendGet);
    move.append(rowFirst);
    move.append(boxMovimientos);
    return $('#root').append(move);
}
