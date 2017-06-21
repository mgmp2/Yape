'use strict';
const reRender = (getValue, result, update) => {
    result.empty();
    // if(getValue.length > 0) {
    //
    //     getValue.forEach( getStation => {
    //         result.append(searchItem(getStation,update));
    //     })
    // } else {
    //     const output = $('<p> No se encontró el destino a buscar...<p>');
    //     result.append(output);
    // }
};

const screenTimeOut = (update) => {
  const screen = $('<div class="container" id="time-out"></div>');
  const rowFirst  = $('<div class="row center-align"></div>');
  const colFirst  = $('<div class="col s12"></div>');
  const imgFirst  = $('<img src="assets/img/icons/check.png" alt="phone">');
  const textFirst = $('<h5>¡Bien!<br>Ahora puedes usar Yape</h5>');

  colFirst.append(imgFirst);
  colFirst.append(textFirst);

  rowFirst.append(colFirst);
  screen.append(rowFirst);
  setTimeout(function(){ registerCard() }, 3000);
    //   wrapper.append(registerCard (_ => render(root)));
  return screen;
}
