document.getElementById('clock').addEventListener('load', clock);

function clock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let amPM;

    if( hours < 12 )
        amPM = 'AM';
    else
        amPM = 'PM';

    if( hours > 12 ) 
        hours -= 12;
    

    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('amPM').innerHTML = amPM;

    setInterval(clock, 1000)
}