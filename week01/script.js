let startTime = null;
let elapsed = 0;
let interval = null;

function updateDisplay() {
  const milliSeconds = elapsed;
  const hrs = String(Math.floor(milliSeconds / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((milliSeconds % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((milliSeconds % 60000) / 1000)).padStart(2, '0');
  const ms = String(Math.floor((milliSeconds % 1000) / 10)).padStart(2, '0');
  document.getElementById("stopwatch").textContent = `${hrs}:${mins}:${secs}.${ms}`;
}

function startStopWatch() {
  startTime = Date.now() - elapsed;
  interval = setInterval(() => {
    elapsed = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function pauseStopWatch() {
  clearInterval(interval);
  interval = null;
}

const startButton = document.querySelector("#start")
const resetButton = document.querySelector("#reset")

startButton.addEventListener("click", () => {
  if (!interval) {
    startButton.textContent = "Stop";
    startButton.style.backgroundColor = "lightcoral";
    startStopWatch();
  } else {
    startButton.textContent = "Start";
    startButton.style.backgroundColor = "#bbccd0";
    pauseStopWatch();
  }
});

resetButton.addEventListener("click", () => {
  pauseStopWatch();

  // reset กลับเป็น 0
  elapsed = 0;
  updateDisplay();
  startButton.textContent = "Start";
  startButton.style.backgroundColor = "#bbccd0";
});
