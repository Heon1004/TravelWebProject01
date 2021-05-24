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