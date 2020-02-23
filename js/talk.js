const titleIcon = document.querySelectorAll(".title-menu a");
const titleName = document.querySelector(".title-header p");
const plusIcon = document.querySelector(".submit-plus a");
const menuPopup = document.querySelector(".title-menu-popup");
const menuLayer = document.querySelector(".title-menu-layer");
const submitForm = document.querySelector(".submit-input");
const submitInput = document.querySelector(".submit-input input");
const submitIcon = document.querySelector(".submit-icon a");

function warning_massage() {
  alert("Sorry. This fuction is not yet ready.")
}

function createDate() {
  const date = new Date();
  let month = new Intl.DateTimeFormat('en-US',  {month: 'long'}).format(date)
  let day = date.getDate();
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

function showMenuPopup() {
  menuPopup.style.display = "flex";
  menuLayer.style.display = "block";
  menuPopup.addEventListener("click", deleteTalk);
  menuLayer.addEventListener("click", hideMenuPopup);
}

function hideMenuPopup() {
  menuPopup.style.display = "none";
  menuLayer.style.display = "none";
}

function submitMessage(event) {
  event.preventDefault();
  const text = submitInput.value;

  if(text) {
    paintTalk(text);
    saveTalk(text);
  }
  submitInput.value = "";
  submitInput.focus();
}

function saveTalk(text) {
  const talkObj = new Object();
  const date = new Date();
  
  talkObj.month = date.getMonth() + 1;
  talkObj.day = date.getDate();
  talkObj.hours = date.getHours();
  talkObj.minutes = date.getMinutes();
  talkObj.text = text;
  talkObj.who = "leejaeyong";
  talkObj.youandme = "me";

  const talks = [];
  const who = localStorage.getItem("currentUser");
  const data = JSON.parse(localStorage.getItem("talks-" + who));
  if(data) {
    data.forEach(function(talk) {
      talks.push(talk);
    });
  }
  talks.push(talkObj);
  localStorage.setItem("talks-" + who, JSON.stringify(talks));
}

function deleteTalk() {
  const who = localStorage.getItem("currentUser");
  localStorage.removeItem("talks-" + who);
  location.reload();
}

function paintTalk(text) {
  const time = createDate();
  const chat = document.querySelector(".chats-contents");

  const content = document.createElement("h1");
  const contentNode = document.createTextNode(text);
  content.appendChild(contentNode);

  const date = document.createElement("h2");
  const dateNode = document.createTextNode(time);
  date.appendChild(dateNode);

  const message = document.createElement("div");
  message.appendChild(content);
  message.appendChild(date);
  message.classList.add("chats-text");

  const talk = document.createElement("div");
  talk.appendChild(message);
  talk.classList.add("chats-talk-me");
  chat.appendChild(talk);

  window.scrollTo(0,document.body.scrollHeight);
}

function loadInfo() {
  const name = localStorage.getItem("currentUser");
  titleName.innerText = name;
}

function loadTalk() {
  const talks = [];
  const who = localStorage.getItem("currentUser");
  const data = JSON.parse(localStorage.getItem("talks-" + who));
  if(data) {
    data.forEach(function(talk) {
      talks.push(talk);
    });
  }
  talks.forEach(function(talk) {
    paintTalk(talk.text);
  });
}

function addEvent() {
  if(titleIcon) {
    titleIcon[0].addEventListener("click", warning_massage);
    titleIcon[1].addEventListener("click", showMenuPopup);
  }
  if(plusIcon) {
    plusIcon.addEventListener("click", warning_massage);
  }
  if(submitForm) {
    submitForm.addEventListener("submit", submitMessage);
  }
  if(submitIcon) {
    submitIcon.addEventListener("click", submitMessage);
  }
}

function init() {
  addEvent();
  loadInfo();
  loadTalk();
}

init();