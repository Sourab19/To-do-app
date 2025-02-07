sessionStorage.setItem("loggedIn", "true");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  var em = document.getElementById("em").value.trim();
  var pass = document.getElementById("password1").value.trim();
  var n = document.getElementById("name");

  login(em, pass, (error) => {
    if (error) {
      n.innerText = error;
      n.style.color = "red";
    } else {
      window.location.href = "index.html"; // Redirect to home
    }
  });
});

function login(email, password, callback) {
  if (email === "admin" && password === "12345") {
    callback(null); // No error
  } else {
    callback("Invalid Credentials"); // Error msg
  }
}
