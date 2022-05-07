// Your web app's Firebase configuration
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

let name="";
function init() {
  name = prompt("Please enter your name");
  msgRef.on('child_added', updateMsgs);
}

document.addEventListener('DOMContentLoaded', init);
msgForm.addEventListener('submit', sendMessage);

function sendMessage(e){
  e.preventDefault();
  const text = msgInput.value;

    if(!text.trim()) return alert('Please type a message'); //no msg submitted
    const msg = {
        name: name,
        text: text
    };

    msgRef.push(msg);
    msgInput.value = "";
}

const updateMsgs = data => {
  console.log('AASDADA')
  const {dataName, text} = data.val();

  const msg = `<li class="${dataName == name ? "msg my": "msg"}"><span class = "msg-span">
    <i class = "name">${name}: </i>${text}
    </span>
  </li>`

  msgScreen.innerHTML += msg;

  document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
}