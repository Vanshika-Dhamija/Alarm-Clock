let tick = new Audio ("tickingclock.mp3")
let alrmAudio = new Audio ("alarmclock.mp3")
setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hr = 30*h + m/2;
    mr = 6*m;
    sr = 6*s;
    tick.play();
    hour.style.transform = `rotate(${hr}deg)`;
    min.style.transform = `rotate(${mr}deg)`;
    sec.style.transform = `rotate(${sr}deg)`;
    time = (alarm.value.split(":"));
    aHr = time[0];
    aMin = time[1];
    if(aHr == h && aMin == m){
    console.log("boommmm!!");
    alrmAudio.play();}
    ar = 30*aHr + aMin/2;
    aClock.style.transform = `rotate(${ar}deg)`;
}, 1000);