console.log("login functionality initiated");

document.getElementById("signIn-btn").addEventListener("click", () => {
  const username = document.getElementById("input-username").value;
  const password = document.getElementById("input-password").value;

  if (username === "admin" && password === "admin123") {
    alert("Login successful");

    window.location.assign("./home.html");
  } else {
    alert("Invalid username or password");
  }
});
