const timer = document.querySelector(".timer");
const timerText = document.querySelector("#text-timer");
const btnTimerStart = document.querySelector("#btn-timer-start");
const btnTimerStop = document.querySelector("#btn-timer-stop");
const btnTimerEnd = document.querySelector("#btn-timer-end");

let timeInitial = null;

const start_timer = () => {
  let timeActual = Date.now();
  let secondsTime = Math.floor((timeActual - timeInitial) / 1000);
  timerText.innerHTML = set_time(secondsTime);
};

let interval = null;

function set_time(item) {
  const hour = Math.floor(item / 3600);
  const rest = item % 3600;
  const minutes = Math.floor(rest / 60);
  const seconds = Math.floor(rest % 60);
  const formatTime =
    (hour < 10 ? "0" + hour : hour) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
  return formatTime;
}

btnTimerStart.addEventListener("click", () => {
    timeInitial = Date.now();
    interval = setInterval(start_timer, 1000);
});

btnTimerStop.addEventListener("click", () => {
    clearInterval(interval);
});

btnTimerEnd.addEventListener("click", () => {
    timerText.innerHTML = "00:00:00";
    clearInterval(interval);
})
