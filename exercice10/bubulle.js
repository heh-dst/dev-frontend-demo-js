const bubulle = $('#bubulle');

function moveBubulle(ev) {
  const hoveredA = $(ev.currentTarget);
  const position = hoveredA.offset();
  const width = hoveredA.width();
  bubulle
    .css('left', position.left - 8)
    .css('top', position.top - 16)
    .css('width', width + 32);
}

$('#menu a').on('mouseover', moveBubulle);
