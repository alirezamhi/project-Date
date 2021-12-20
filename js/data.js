let time = document.getElementById('clock');
let date = document.getElementById('data');
setInterval(update , 1000);
function update(){
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();
    if(second < 10){
        second = '0' + second;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    if(hour < 10){
        hour = '0' + hour;
    }
    let timestring = `${hour}:${minute}:${second}`;
    time.innerHTML = timestring;
}
