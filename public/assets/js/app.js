'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if(!state.phone) {
      wrapper.append(registroNum( _ => render(root)));
  }

  else if(state.phone && !state.cod) {
      wrapper.append(resendCode( _ => render(root)));
  }
  else if (state.cod) {
      wrapper.append(createUser( _ => render(root)));

  }


    //   wrapper.append(screenTimeOut (_ => render(root)));
    // wrapper.append(registerCard (_ => render(root)));
    // wrapper.append(passwCard (_ => render(root)));

  root.append(wrapper);
}


const state = {
    user: null,
    phone: null,
    msn: null,
    cod: null
};

$( _ => {


// FUNCTION FOR MY CAROUSEL
$('.owl-carousel').owlCarousel({
    margin:35,
    responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:3 }
    }
});
// -----------------------------

const root = $('#root');

$('.btn-yellow').on('click', (e) => {
    e.preventDefault();
    render(root);
})




});
