function addUsuario() {
    let nomeUsuario = document.getElementById("nomeUsuario").value;
    localStorage.setItem("nomeUsuario", nomeUsuario);
    // window.location = "sala.html"
    location = "sala.html"
}

function logout() {
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("nomeSala");
    location = "index.html";
}