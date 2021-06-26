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
