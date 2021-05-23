/*nav押したらactive追加後で修正する予定*/
function navTap(event, id) {
  var id = id;
  
  if(document.getElementById(id).className == "nav-link active"){
    //replace関数が適用されない。
    document.getElementById(id).className = "nav-link";
  }else{
    document.getElementById(id).className += " active";
  }
  console.log(id);
}

function searchTap(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
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

function hotelTap(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("hotel-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("hotel-tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function keepChecked(value){
  var id = "review-item" + value;
  
  if(document.getElementById(id).className == "review-item active"){
    //replace関数が適用されない。
    document.getElementById(id).className = "review-item";
  }else{
    document.getElementById(id).className += " active";
  }
}  

//ブラウザが開いたら実行される
window.onload = function() {

  let today = new Date();
  let endDay = today;

  //ブラウザで時刻差が9時間あるため足す
  today.setHours(today.getHours()+9);
  today = today.toISOString().slice(0, 10);

  endDay.setDate(endDay.getDate()+1);
  endDay = endDay.toISOString().slice(0, 10);
  //チェックイン日付を設定
  start = document.getElementById("start-date");
  start.value = today;

  //チェックアウト日付を設定
  end = document.getElementById("end-date");
  end.value = endDay;
}

function setairDate(){
  let today = new Date();
  let endDay = today;

  //ブラウザで時刻差が9時間あるため足す
  today.setHours(today.getHours()+9);
  today = today.toISOString().slice(0, 10);

  endDay.setDate(endDay.getDate()+1);
  endDay = endDay.toISOString().slice(0, 10);
  //チェックイン日付を設定
  start = document.getElementById("start-date-air");
  start.value = today;
  start = document.getElementById("start-date-rentcar");
  start.value = today;
  //チェックアウト日付を設定
  end = document.getElementById("end-date-air");
  end.value = endDay;
  end = document.getElementById("end-date-rentcar");
  end.value = endDay;
}

/* 日数を数える */
// var sdt = new Date('string_Date1');
// var edt = new Date('string_Date2');
// var dateDiff = Math.ceil((edt.getTime()-sdt.getTime())/(1000*3600*24));
// ex) dateDiff = (차이일수를 정수로 반환)