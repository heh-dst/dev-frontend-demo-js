function displayLightbox(ev) {
  const figureClicked = ev.currentTarget;
  const srcImage = $('img', figureClicked).attr('src');
  $('#lightbox img').attr('src', srcImage);
  $('#lightbox').show();
}

function hideLightbox() {
  $('#lightbox').fadeOut();
}

function handleEscape(ev) {
  if (ev.key === 'Escape') {
    hideLightbox();
  }
}

$('figure').on('click', displayLightbox);
$('#lightbox').on('click', hideLightbox);
$(document).on('keyup', handleEscape);
