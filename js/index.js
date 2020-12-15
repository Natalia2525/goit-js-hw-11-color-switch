const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  startBtn: document.querySelector(`[data-action="start"]`),
  stopBtn: document.querySelector(`[data-action="stop"]`),
  body: document.querySelector(`body`),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function bodyColorChange() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

let intervalId = null;

function startClick() {
  refs.stopBtn.removeAttribute('disabled');
  refs.startBtn.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    bodyColorChange();
  }, 1000);
}

function stopClick() {
  refs.startBtn.removeAttribute('disabled');

  clearInterval(intervalId);
}

refs.startBtn.addEventListener('click', startClick);
refs.stopBtn.addEventListener('click', stopClick);
