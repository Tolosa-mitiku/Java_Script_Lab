//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    startTime();
    loadPost();
    loadPosts();
});



// Clock
const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
var x = 0
var y = 0
var z = 0
var clock = new Date()
hour1 = clock.getHours()
minute1 = clock.getMinutes()
second1 = clock.getSeconds()

second.style.transform = `rotateZ(${second1 * 6}deg)`
minute.style.transform = `rotateZ(${minute1 * 6}deg)`
hour.style.transform = `rotateZ(${hour1 * 30}deg)`

var x = second1 * 6
var y =  minute1 * 6
var z = hour1 * 30
setInterval(()=> {
    if (x >= (second1 * 6) + 360) {
        x = (second1 * 6)
        y += 6
        if (y % 72 == 0) {
            z += 6
        }
    }

    x += 6

    second.style.transform = `rotateZ(${x}deg)`
    minute.style.transform = `rotateZ(${y}deg)`
    hour.style.transform = `rotateZ(${z + ((y * 6)/72)}deg)`
    
}, 1000);
// End