const myClock = document.querySelector('.clock')

function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";


    if(hour === 0) {
        hour = 12;
    }
    if(hour > 12) {
        hour = hour - 12;
        session =  'PM'
    }

    if(hour < 10) {
        hour = "0" + hour
    } else {
        hour = hour
    }

    if (min < 10) {
        min = "0" + min
    } else {
        min = min
    }

    if (sec < 10) {
        sec = "0" + sec
    } else {
        sec = sec
    }

    myClock.innerHTML = hour + ":" + min + ":" + sec + " " + session
    setTimeout(currentTime, 1000)

}

currentTime()

