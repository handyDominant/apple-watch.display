
function currentTime() { //  Изменения времени вверху справа
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
  
    if(hh == 0){
        hh = 24;
    }
    if(hh > 23){
        hh = hh - 24;
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " ";
  
    document.getElementById("change-time").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }



function currentDate(){
    let date = new Date();
    let yers = date.getFullYear();
    let month = date.getDay();

    let time = yers + ". " + month + " ";

    document.getElementById("change-date").innerText = time; 
    
}

currentTime(); // Вывод измениения времени 
currentDate() // Вывод измениения даты