'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(registroNum( _ => render(root)));

  root.append(wrapper);
}




const state = {
    user: null
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


// $.post('api/registerNumber', {
//     phone: 953633612,
//     terms: true
// }, (response) => {
//     console.log(response);
// },'json'); // post de jQuery


});
