$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.top-btn-con').fadeIn(500);
    } else {
      $('.top-btn-con').fadeOut('fast');
    }
  });

$('.top-btn-con').click(function (e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 200);
});

$('#login-modal-con').click(function(e){
  if( !$('#login-modal-con').has(e.target).length ) $('#login-modal-con').hide();
});
