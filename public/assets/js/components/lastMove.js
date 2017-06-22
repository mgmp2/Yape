const lastMove = (update) => {

    const move = $('<div class="container" id="lastMove"></div>');

    const rowFirst  = $('<div class="row center-align bg-purple-light"></div>');
    const colFirst  = $('<div class="col s12"></div>');
    const imgFirst  = $('<img src="assets/img/icons/happy-face.png" alt="happy face">');
    const title     = $('<h5>Hola</h5>');

    const colSecond  = $('<div class="col s12" id="line"></div>');
    const imgScan  = $('<img src="assets/img/icons/eye.png" alt="eye" class="responsive-img">');
    const textPar   = $('<span>Escanear tarjeta</span>');

    colFirst.append(imgFirst);
    colFirst.append(title);
    colSecond.append(imgScan);
    colSecond.append(textPar);
    rowFirst.append(colFirst);
    rowFirst.append(colSecond);

    move.append(rowFirst)
    return move;
}
