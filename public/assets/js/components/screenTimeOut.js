'use strict';

const screenTimeOut = () => {
  const screen = $('<div class="container  orange darken-1" id="time-out"></div>');
  const rowFirst  = $('<div class="row center-align"></div>');
  const colFirst  = $('<div class="col s12"></div>');
  const imgFirst  = $('<img src="assets/img/icons/check.png" alt="phone">');
  const textFirst = $('<h5>¡Bien!<br>Ahora puedes usar Yape</h5>');

  colFirst.append(imgFirst);
  colFirst.append(textFirst);

  rowFirst.append(colFirst);
  screen.append(rowFirst);
  return screen;
}
