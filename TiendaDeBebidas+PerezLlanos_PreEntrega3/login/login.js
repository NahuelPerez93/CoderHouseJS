document.addEventListener("DOMContentLoaded", function() {
    var loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
    var loginDiv = document.getElementById("loginDiv");
    var adminDiv = document.getElementById("adminDiv");
    if (loginDiv) {
      loginDiv.style.display = "none";
    }
    if (adminDiv) {
      adminDiv.style.display = "block";
    }
  } else {
    var loginDiv = document.getElementById("loginDiv");
    var adminDiv = document.getElementById("adminDiv");
    if (loginDiv) {
      loginDiv.style.display = "block";
    }
    if (adminDiv) {
      adminDiv.style.display = "none";
    }
  }
});

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username === "admin" && password === "admin") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "admin.html";
  } else {
    alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}
