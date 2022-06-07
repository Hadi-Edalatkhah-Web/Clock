const clockHour = document.getElementById("hour");
const clockMinute = document.getElementById("minute");
const clockSecound = document.getElementById("secound");

setInterval(setTime, 1000);

function setTime() {

    let time = new Date();
    clockHour.innerText=time.getHours();
    clockMinute.innerText=time.getMinutes();
    clockSecound.innerText=time.getSeconds();

    
    clockHour.innerText=(clockHour.innerText > 12) ? clockHour.innerText-=12 : clockHour.innerText;
    clockMinute.innerText=(clockMinute.innerText===0) ? clockMinute.innerText=60 : clockMinute.innerText;
    clockSecound.innerText=(clockSecound.innerText===0) ? clockSecound.innerText=60 : clockSecound.innerText;

    clockHour.innerText=(clockHour.innerText < 10) ? `0${clockHour.innerText}` : clockHour.innerText;
    clockMinute.innerText=(clockMinute.innerText < 10) ? `0${clockMinute.innerText}` : clockMinute.innerText;
    clockSecound.innerText=(clockSecound.innerText < 10) ? `0${clockSecound.innerText}` : clockSecound.innerText;


    

    
}

setTime();