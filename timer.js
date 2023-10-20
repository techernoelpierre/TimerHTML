
const millisecondsScreen = document.querySelector('#milliseconds');
const secondsScreen = document.querySelector('#seconds');
const minutesScreen = document.querySelector('#minutes');

let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const start = document.querySelector('#startAndStop');
const reset = document.querySelector('#reset');

let isStart = false;
let isStop = true;

start.addEventListener('click', () => {
    isStart = !isStart;
    isStop = !isStop;
    start.classList.toggle('startAndStopOnStop')
    if (isStart) {
        start.textContent = 'stop';
        reset.style.display = 'none';
    } else {
        start.textContent = 'start';
        reset.style.display = 'block';
    }
});

reset.addEventListener('click', () => {
    if (isStop) {
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
    }
    reset.style.display = 'none';

});

function TimeUpdate() {
    if (isStart) {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes >= 60) {
            isStart = false;
            minutes = 0;
        }
    }
    if (milliseconds < 10) {
        millisecondsScreen.textContent = "0" + milliseconds;
    } else {
        millisecondsScreen.textContent = milliseconds;
    }
    if (seconds < 10) {
        secondsScreen.textContent = "0" + seconds;
    } else {
        secondsScreen.textContent = seconds;
    }
    if (minutes < 10) {
        minutesScreen.textContent = "0" + minutes;
    } else {
        minutesScreen.textContent = minutes;
    }
}