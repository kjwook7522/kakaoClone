const warningPage = document.querySelector(".warning-page");

function paintWarningPage(width) {
  if (width > 700) {
    warningPage.classList.add("show");
  } else {
    warningPage.classList.remove("show");
  }
}

function onChangeWindowSize(event) {
  const windowWidth = event.target.innerWidth;
  paintWarningPage(windowWidth);
}

function init() {
  window.addEventListener("resize", onChangeWindowSize);
  paintWarningPage(window.innerWidth);
}

init();