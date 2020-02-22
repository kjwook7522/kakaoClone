const titleIcon = document.querySelectorAll(".title-menu a");
const plusIcon = document.querySelector(".submit-plus a");
const submitForm = document.querySelector(".submit-input");
const submitInput = document.querySelector(".submit-input input");
const submitIcon = document.querySelector(".submit-icon a");
const chats = document.querySelectorAll(".chats");

function warning_massage() {
  alert("Sorry. This fuction is not yet ready.")
}

function enterChat(order) {
  location.href = `${order.currentTarget.id}.html`;
}

function createDate() {
  const date = new Date();
  let month = new Intl.DateTimeFormat('en-US',  {month: 'long'}).format(date)
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  if(hours < 10) {
    hours = "0" + hours;
  }
  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  const time = `${month} ${day}, ${hours}:${minutes}`;
  return time;
}

function submitMessage(event) {
  event.preventDefault();
  const time = createDate();

  const chat = document.querySelector(".chats-contents");

  const text = document.createElement("h1");
  const textNode = document.createTextNode(submitInput.value);
  text.appendChild(textNode);

  const date = document.createElement("h2");
  const dateNode = document.createTextNode(time);
  date.appendChild(dateNode);

  const message = document.createElement("div");
  message.appendChild(text);
  message.appendChild(date);
  message.classList.add("chats-text");

  const talk = document.createElement("div");
  talk.appendChild(message);
  talk.classList.add("chats-talk-me");
  chat.appendChild(talk);

  window.scrollTo(0,document.body.scrollHeight);

  submitInput.value = "";
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
  if(submitForm) {
    submitForm.addEventListener("submit", submitMessage);
  }
  if(submitIcon) {
    submitIcon.addEventListener("click", warning_massage);
  }
}

function init() {
  addEvent();
  createDate();
}

init();