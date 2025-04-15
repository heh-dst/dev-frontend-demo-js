$(window).on('scroll', () => {
  const documentPosition = $(document).scrollTop();
  $('#prlx').css('background-position-y', `${0.8 * documentPosition}px`);
});
