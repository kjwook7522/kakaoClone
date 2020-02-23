const titleIcon = document.querySelectorAll(".title-menu a");
const chats = document.querySelectorAll(".chats");

function warning_massage() {
  alert("Sorry. This fuction is not yet ready.")
}

function enterChat(order) {
  const nameObj = order.currentTarget.querySelector("h1");
  localStorage.setItem("currentUser", nameObj.innerText);
  location.href = `${order.currentTarget.id}.html`;
}

function addEvent() {
  titleIcon.forEach(function(node) {
    node.addEventListener("click", warning_massage);
  });
  chats.forEach(function(node) {
    node.addEventListener("click", enterChat);
  });
}

function init() {
  addEvent();
}

init();