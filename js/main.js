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
  const hours = date.getHours();
  const minutes = date.getMinutes();
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
  setInterval(paintClock, 1000);
  paintBattery();
  
}

init();