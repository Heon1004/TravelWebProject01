function openloginModal(){
    document.getElementById("login-modal-con").style.display = "block";
}
 function closeloginModal(){
  document.getElementById("login-modal-con").style.display = "none";
}

function openregisterModal(){
  document.getElementById("register-modal-con").style.display = "block";
}
function closeregisterModal(){
document.getElementById("register-modal-con").style.display = "none";
}

function openforgotModal(){
  document.getElementById("forgot-modal-con").style.display = "block";
}
function closeforgotModal(){
document.getElementById("forgot-modal-con").style.display = "none";
}

document.getElementById('register-link').addEventListener('click', function () {
  document.getElementById('login-modal-con').style.display = 'none';
  document.getElementById('register-modal-con').style.display = 'block';
});
document.getElementById('forgot-link').addEventListener('click', function () {
  document.getElementById('login-modal-con').style.display = 'none';
  document.getElementById('forgot-modal-con').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function () {
  document.getElementById('register-modal-con').style.display = 'none';
  document.getElementById('login-modal-con').style.display = 'block';
});

$(document).ready(function(){
  // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
  $(".drop-item>button").click(function(){
      var submenu = $(this).next("ul");
      // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
      if( submenu.is(":visible") ){
          submenu.slideUp();
      }else{
          submenu.slideDown();
      }
  });
});


