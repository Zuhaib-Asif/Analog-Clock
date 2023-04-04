let hourEL = document.querySelector(".hour");
let minuteEL = document.querySelector(".minute");
let secondEL = document.querySelector(".second");

function updateClock() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let hourdeg = (hour / 12) * 360;
  let minutedeg = (minute / 60) * 360;
  let seconddeg = (second / 60) * 360;
  hourEL.style.transform = `rotate(${hourdeg}deg)`;
  minuteEL.style.transform = `rotate(${minutedeg}deg)`;
  secondEL.style.transform = `rotate(${seconddeg}deg)`;
}
updateClock();
setInterval(() => {
  updateClock();
}, 1000);
