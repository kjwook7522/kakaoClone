const titleIcon = document.querySelectorAll(".title-menu a");
const plusIcon = document.querySelector(".submit-plus a");
const submitIcon = document.querySelector(".submit-icon a");
const chats = document.querySelectorAll(".chats");

function warning_massage() {
  alert("Sorry. This fuction is not yet ready.")
}

function enterChat(order) {
  location.href = `${order.currentTarget.id}.html`;
}

function addEvent() {
  titleIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
  chats.forEach(function(node) {
    node.addEventListener("click", enterChat);
  });
  if(plusIcon) {
    plusIcon.addEventListener("click", warning_massage);
  }
}

function init() {
  addEvent();
}

init();