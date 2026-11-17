
  function sendMsg() {
    let name = document.getElementById("name").value;
    let msg = document.getElementById("msg").value;
    if (name == "" || msg == "") return;

    db.collection("messages").add({
      name: name,
      text: msg,
      time: new Date()
    });

    document.getElementById("msg").value = "";
  }

  db.collection("messages").orderBy("time").onSnapshot((snapshot) => {
    let box = document.getElementById("messages");
    box.innerHTML = "";

    // First person wey ever send message
    let firstPerson = "";
    if (snapshot.docs.length > 0) {
      firstPerson = snapshot.docs[0].data().name;
    }

    snapshot.forEach((doc) => {
      let data = doc.data();
      if (data.name == firstPerson) {
        box.innerHTML += "<div class='mine'>" + data.text + "</div>";
      } else {
        box.innerHTML += "<div class='others'><b>" + data.name + ":</b> " + data.text + "</div>";
      }
    });
    box.scrollTop = box.scrollHeight;
  });