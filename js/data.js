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
    // date.innerHTML = now.toLocaleDateString('fa-IR');

    // date.innerHTML = now.toLocaleDateString('fa-IR' , {
    //     weekday:'long',
    //     day:'numeric', 
    //     year:'numeric',
    //     month:'long'
    // })

    let weekday = now.toLocaleDateString('fa-IR' , {weekday: 'long'});
    let mothDay = now.toLocaleDateString('fa-IR' , {day: 'numeric'});
    let year = now.toLocaleDateString('fa-IR' , {year: 'numeric'});
    let monthName = now.toLocaleDateString('fa-IR' , {month: 'long'});

    let dateString = `${weekday} , ${mothDay} ${monthName} ${year}`;
    date.innerHTML = dateString;
}


