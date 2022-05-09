const firebaseConfig = {
  apiKey: "AIzaSyDkP8LeGANbsy3z0OiQXln_THepQAtYMZ0",
  authDomain: "iic3585-g4-e4.firebaseapp.com",
  projectId: "iic3585-g4-e4",
  storageBucket: "iic3585-g4-e4.appspot.com",
  messagingSenderId: "216241501064",
  appId: "1:216241501064:web:b8540bbf99960d3e52403d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const msgScreen = document.getElementById("messages");
const msgForm = document.getElementById("messageForm");
const msgInput = document.getElementById("msg-input");
const msgBtn = document.getElementById("msg-btn");

const db = firebase.database();
const msgRef = db.ref("/msgs"); 

let userName = "";

function init() {
  userName = prompt("Por favor escribe tu nombre");
  msgRef.on('child_added', updateMsgs);
}

document.addEventListener('DOMContentLoaded', init);
msgForm.addEventListener('submit', sendMessage);

function sendMessage(e){
  e.preventDefault();
  const text = msgInput.value;

  if (!text.trim()) return alert('Please type a message');
  const msg = {
      user: userName,
      text
  };

  msgRef.push(msg);
  msgInput.value = "";
}

function updateMsgs(data) {
  const {user, text} = data.val();
  const ownMessage = user === userName;

  const msg = `<li class="${ownMessage ? "msg text-right": "msg"}"><span class = "msg-span">
    <strong class="${ownMessage ? "hidden" : ""}">${user}: </strong>${text}
    </span>
  </li>`

  msgScreen.innerHTML += msg;

  document.getElementById("messages").scrollTop = document.getElementById("messages").scrollHeight;
}

const messaging = firebase.messaging();

messaging
   .requestPermission()
   .then(function () {
     console.log("Notification permission granted.");
     return messaging.getToken()
   })
   .then((token) => {
     console.log('Token: ', token);
   })
   .catch(function (err) {
   console.log("Unable to get permission to notify.", err);
 });

messaging.onMessage(payload => {
  console.log(payload.notification)
});