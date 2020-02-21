const warningPage = document.querySelector(".warning-page");
const clock = document.querySelector(".clock p");
const batteryPer = document.querySelector(".status #battery");

function paintWarningPage(width) {
  if (width > 700) {
    warningPage.classList.add("show");
  } else {
    warningPage.classList.remove("show");
  }
}

function paintClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  clock.innerText = `${hours}:${minutes}`;
}

function paintBattery() {
  navigator.getBattery().then(function(battery) {
    batteryPer.innerText = `${battery.level * 100}%`;
  });
}

function onChangeWindowSize(event) {
  const windowWidth = event.target.innerWidth;
  paintWarningPage(windowWidth);
}

function init() {
  window.addEventListener("resize", onChangeWindowSize);
  paintWarningPage(window.innerWidth);
  paintClock();
  setInterval(paintClock, 1000);
  paintBattery();
}

init();