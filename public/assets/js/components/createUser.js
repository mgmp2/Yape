'use strict';

const createUser = (update) => {
  const container = $('<div class="container" id="resendCode"></div>');

  const rowFirst  = $('<div class="row center-align"></div>');
  const colFirst  = $('<div class="col s12"></div>');
  const imgFirst  = $('<img src="assets/img/icons/lockone.png" alt="lock">');
  const title     = $('<h5>Crea tu usuario Yape</h5>');
  const parr      = $('<p>Ingresa un nombre, email y clave del usuario</p>');

  const rowSecond = $('<div class="row"></div>');

  const colSecond = $('<div class="input-field col s12"></div>');
  const imgUser   = $('<img src="assets/img/icons/user.png" alt="user" class="responsive-img">');
  const inputUser = $('<input id="icon_prefix" type="text" class="validate center-align" placeholder="Nombre" >');

  const colThird  = $('<div class="input-field col s12"></div>');
  const imgEmail   = $('<img src="assets/img/icons/message-gray.png" alt="message" class="responsive-img">');
  const inputEmail = $('<input id="icon_prefix" type="text" class="validate center-align" placeholder="correo@ejemplo.com">');

  const colFourth = $('<div class="input-field col s12"></div>');
  const imgInput  = $('<img src="assets/img/icons/lock.png" alt="phone and number" class="responsive-img">');
  const inputClave= $('<input id="icon_prefix" type="text" class="validate center-align" placeholder="Ingresa clave de 6 dígitos" maxlength="5">');

  const rowBtn  = $('<div class="row center-align"></div>');
  const colBtn  = $('<div class="col s12"></div>');
  const btn       = $('<button type="button" name="button" class="waves-effect waves-light btn btn-yellow disabled" >CONTINUAR</button>');

  const parrFinal = $('<p class="center-align">Cuida esta clave como oro, es tu acceso a Yape</p>')
  colFirst.append(imgFirst);
  colFirst.append(title);
  colFirst.append(parr);
  rowFirst.append(colFirst);

  colSecond.append(imgUser);
  colSecond.append(inputUser);

  colThird.append(imgEmail);
  colThird.append(inputEmail);

  colFourth.append(imgInput);
  colFourth.append(inputClave);

  rowSecond.append(colSecond);
  rowSecond.append(colThird);
  rowSecond.append(colFourth);


  colBtn.append(btn);
  rowBtn.append(colBtn);

  container.append(rowFirst);
  container.append(rowSecond);
  container.append(parrFinal);
  container.append(rowBtn);

  
  return container
}
