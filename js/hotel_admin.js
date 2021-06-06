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
/*side-nav*/
$(document).ready(function(){
    // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
    $(".side-item>button").click(function(){
        var submenu = $(this).next("ul");
        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
});

function changeHotelTap(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("hotel-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

function imgcount(id){
    var img = ['remove-img','add-img'];
    var check = ['Room','Adult','Child']
    var add = 'add';
    var remove = 'remove';
    for(var i=0; i<img.length; i++){
      if(id === remove+check[i]){
        var num = document.getElementById(img[i]).value;
        if(num > 0){
          var result = parseInt(num)-1;
          document.getElementById(img[i]).value = result;
        }
      }else if(id === add+check[i]){
        var num = document.getElementById(img[i]).value;
        var result = parseInt(num)+1;
        document.getElementById(img[i]).value = result;
      }
    }
  }
  var imgNum = 1;
  function addImg() {
    imgNum++;
    const element = document.getElementById('img-con');
    element.innerHTML += "<div class='img-box' id='img-box-"+imgNum+"'>"
    +"<div class='img-preview'><img id=''></div>"
    +"<input type='file' id='img-file' name='imageSelector' onchange='setThumbnail(event);' accept='image/jpeg, image/jpg, image/png' multiple /></div>";
  }

  function deleteImg() {
    if(imgNum > 1){
        var imgbox= "img-box-"+imgNum;
        var element = document.getElementById('img-con');
        //最後の要素を消す
        element.removeChild(element.lastChild);
        imgNum--;
        }
  } 

  function setThumbnail(event) {
    var reader = new FileReader(); 
    reader.onload = function(event) { 
        var check = document.getElementById('img');
            var img = document.createElement("img"); 
            img.setAttribute("src", event.target.result); 
            document.querySelector(".img-preview").appendChild(img); 
       
    }; 
    reader.readAsDataURL(event.target.files[0]); 
}