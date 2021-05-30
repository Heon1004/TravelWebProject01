function closeloginModal(){
    document.getElementById("login-modal-con").style.display = "none";
 }
 function openloginModal(){
    document.getElementById("login-modal-con").style.display = "block";
    
 }

function closeRegisternModal(){
   document.getElementById("register-modal-con").style.display = "none";
}
function openRegisterModal(){
   document.getElementById("register-modal-con").style.display = "block";
   
}

    document.getElementById('register-modal-btn').addEventListener('click', function () {
    document.getElementById('login-modal-con').style.display = 'none';
    document.getElementById('register-modal-con').style.display = 'block';
  });