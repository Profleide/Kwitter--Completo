// ADICIONE SUS LINKS FIREBASE AQUI
const firebaseConfig = {
  apiKey: "AIzaSyDFLPLYHvMfwoYi6Da9-645NjkXdtt0LO4",
  authDomain: "chatc93-f0f0d.firebaseapp.com",
  databaseURL: "https://chatc93-f0f0d-default-rtdb.firebaseio.com",
  projectId: "chatc93-f0f0d",
  storageBucket: "chatc93-f0f0d.appspot.com",
  messagingSenderId: "117361453329",
  appId: "1:117361453329:web:51ca7fb83d4cd946ce44b0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const nomeUsuario = localStorage.getItem("nomeUsuario");

document.getElementById("nomeUsuario").innerHTML = "Olá, " + nomeUsuario + "!";

getData();

function addSala() {
  const sala = document.getElementById("nomeSala").value;

  firebase.database().ref("/").child(sala).set({
    purpose: "sala criada",
  });

  loadRoom(sala);
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", snapshot => {
      let salas = [];
      console.log("Keys Changed");
      snapshot.forEach(function (childSnapshot) {
        const childKey = childSnapshot.key;
        const row =
          "<div class='nomeSala' id='" +
          childKey +
          "' onclick='loadRoom(this.id)'> #" +
          childKey +
          "</div>"
        salas.push(row);
      });
      console.log(salas);
      const output = salas.join("");
      document.getElementById("output").innerHTML = output;
    });
}

function loadRoom(room) {
  localStorage.setItem("nomeSala", room);
  location = "chat.html";
}