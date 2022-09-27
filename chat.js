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
  const nomeSala = localStorage.getItem("nomeSala");
  const setChatTags = new Set(); 

  getData();
  
  function getData() {
    firebase
      .database()
      .ref("/" + nomeSala)
      .on("value", snapshot => {
        console.log("Keys Changed");
        snapshot.forEach(function (childSnapshot) {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (childKey != "purpose") {
            const firebaseMsgId = childKey;
            const msgData = childData;
            // Inicio do código
            // console.log(firebaseMsgId);
            console.log(msgData);
            const nome = msgData['name'];
            const msg = msgData['message'];
            const likes = msgData['like'];
            console.log(nome + ": " + msg + " (" + likes + " likes)");
            const nomeTag = "<div class='chatCard'><h4 class='chatNome'>" + nome + ":</h4>";
            const msgTag = 
              "<div class='row'>" +
                "<div class='col'>" +
                  "<h3 class='chatMsg'>" + msg + "</h3>" +
                "</div>" +
                "<div class='col-auto'>" +
                  "<button class='btn btn-info'>" + 
                    "<i class='fa-regular fa-thumbs-up'></i>" + 
                    " "+ likes +
                  "</button>" + 
                "</div>" +
              "</div></div>"
            
            const row = nomeTag + msgTag;
            setChatTags.add(row);
            const arrayChatTags = Array.from(setChatTags);
            document.getElementById("output").innerHTML = arrayChatTags.join("");
            
            // Fim do código
          }
        });
      });
  }

function send() {
    const msg = document.getElementById("msg").value;
    firebase.database().ref(nomeSala).push({
        name: nomeUsuario,
        message: msg,
        like: 0
    });
    
    document.getElementById("msg").value = "";

    console.log("Mensagem enviada: " + msg)
}