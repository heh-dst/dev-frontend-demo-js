let position = 1;
let nbImages = $('#plateau img').length;

$('#lucarne').on('click', () => {
  position += 1;
  if (position > nbImages) {
    position = 1;
  }
  $('#num').text(position);
  let newTop = (position - 1) * -600;
  $('#plateau').css('top', `${newTop}px`);
});
