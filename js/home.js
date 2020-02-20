const titleIcon = document.querySelectorAll(".title-menu a");

function warning_massage() {
  alert("Sorry. This fuction is not yet ready.")
}

function addEvent() {
  titleIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
}

function init() {
  addEvent();
}

init();