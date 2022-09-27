// ADICIONE SUS LINKS FIREBASE AQUI
const firebaseConfig = {
  apiKey: "AIzaSyDFLPLYHvMfwoYi6Da9-645NjkXdtt0LO4",
  authDomain: "chatc93-f0f0d.firebaseapp.com",
  databaseURL: "https://chatc93-f0f0d-default-rtdb.firebaseio.com",
  projectId: "chatc93-f0f0d",
  storageBucket: "chatc93-f0f0d.appspot.com",
  messagingSenderId: "117361453329",
  appId: "1:117361453329:web:1e7407e9c74b6433ce44b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  let userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose: "adding user",
  });
}
