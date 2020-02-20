const titleIcon = document.querySelectorAll(".title-menu a");
const moreIcon = document.querySelectorAll(".more-menu-icon a");
const suggestionIcon = document.querySelectorAll(".suggestions-icon a");

function warning_massage() {
  alert("Sorry. This fuction is not yet ready.")
}

function addEvent() {
  titleIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
  moreIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
  suggestionIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
}

function init() {
  addEvent();
}

init();