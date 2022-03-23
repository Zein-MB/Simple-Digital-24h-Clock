let clock = document.querySelector('.clock');

setInterval(showTime, 1000)

function showTime() {
    let date = new Date()
    let hours = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    if (secs < 10) {
        secs = `0${date.getSeconds()}`
    }
    if (mins < 10) {
        mins = `0${date.getMinutes()}`
    }
    if (hours < 10) {
        hours = `0${date.getHours()}`
    }
    let time = `${hours}:${mins}:${secs}`;
    clock.innerHTML = time;
}