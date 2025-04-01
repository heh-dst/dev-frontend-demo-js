const burgerDiv = $('#burger');

function toggleMenu() {
  $('#volet').slideToggle();
}

burgerDiv.on('click', toggleMenu);
