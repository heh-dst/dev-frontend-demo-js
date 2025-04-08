$('.apparition').addClass('invisible');

function checkVisibility() {
  const windowTop = $(window).scrollTop();
  const windowBottom = windowTop + $(window).height();
  $('.invisible').each((index, element) => {
    const elementTop = $(element).offset().top;
    const elementMiddle = elementTop + $(element).outerHeight() / 2;
    if (elementMiddle < windowBottom) {
      $(element).removeClass('invisible');
    }
  });
}

$(window).on('scroll', checkVisibility);
