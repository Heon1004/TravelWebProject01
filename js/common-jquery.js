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
  if( !$('#login-modal-con').has(e.target).length ) {
    $('#login-modal-con').css("display","none");
    $('#login-modal-con').hide();
  }
});

$('#register-modal-con').click(function(e){
  if( !$('#register-modal-con').has(e.target).length ) {
    $('#register-modal-con').css("display","none");
    $('#register-modal-con').hide();
  }
});

$('#forgot-modal-con').click(function(e){
  if( !$('#forgot-modal-con').has(e.target).length ) {
    $('#forgot-modal-con').css("display","none");
    $('#forgot-modal-con').hide();
  }
});