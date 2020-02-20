const titleIcon = document.querySelectorAll(".title-menu a");
const findIcon = document.querySelectorAll(".find-menu-icon a");
const addIcon = document.querySelectorAll(".plus-add a");

function warning_massage() {
  alert("Sorry. This fuction is not yet ready.")
}

function addEvent() {
  titleIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
  findIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
  addIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
}

function init() {
  addEvent();
}

init();