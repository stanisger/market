$('.dropdown').hover(
  function() {
    if (document.documentElement.clientWidth > 768) {
      $('.dropdown-menu').delay(200).show();
    }
  }, 
  function() {
    if (document.documentElement.clientWidth > 768) {
      $('.dropdown-menu').delay(200).hide();
    }
  }
);

$('.dropdown').click(
  function() {
    if (document.documentElement.clientWidth <= 768) {
      $('.dropdown-menu').delay(200).toggle();
    }
  }
);

  