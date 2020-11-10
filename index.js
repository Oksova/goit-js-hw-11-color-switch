const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]
const refs = {
  startBtn: document.querySelector(`[data - action = 'start']`),
  stopBtn: document.querySelector(`[data-action = "stop"]`),
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

refs.startBtn.addEventListener('click', onStart)
refs.startBtn.addEventListener('click', onStop)

function onStart() {}

function onStop() {}
