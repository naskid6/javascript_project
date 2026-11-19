
const firebaseConfig = {
  apiKey: "AIzaSyDbINjCAM5-Xbz-xX4jaAvRVeaX-KoDJXE",
  authDomain: "chat-app-881f8.firebaseapp.com",
  projectId: "chat-app-881f8",
  storageBucket: "chat-app-881f8.firebasestorage.app",
  messagingSenderId: "727888992314",
  appId: "1:727888992314:web:4e8ad878e89af672893d03",
  measurementId: "G-E0ZWB9QLY5"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function sendMsg() {
  let msg = document.getElementById("msg").value;

  if (msg == "") return;

  db.collection("messages").add({
    name: "You",
    text: msg,
    time: new Date()
  });

  document.getElementById("msg").value = "";

  if (msg.toLowerCase() == "hi"||"hello"||"bonjour"||"good morning"||"i salute") {
    db.collection("messages").add({
      name: "Robot",
      text: "How are you?" ||"good day boss",
      time: new Date()
    });
  }
}

db.collection("messages").orderBy("time").onSnapshot((snapshot) => {
  let box = document.getElementById("messages");

  box.innerHTML = "";

  snapshot.forEach((doc) => {
    let data = doc.data();

    if (data.name == "You") {
      box.innerHTML += "<div class='mine'>" + data.text + "</div>";
    } else {
      box.innerHTML += "<div class='others'><b>" + data.name + ":</b> " + data.text + "</div>";
    }
  });

  box.scrollTop = box.scrollHeight;
});
