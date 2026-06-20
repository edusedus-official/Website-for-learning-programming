function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const pass = document.getElementById("regPass").value;
  if (!name || !email || !pass) {
    document.getElementById("regStatus").textContent = "Please fill in all fields.";
    return;
  }
  localStorage.setItem("user", JSON.stringify({ name, email, pass }));
  document.getElementById("regStatus").textContent = "Account created!";
  setTimeout(() => window.location.href = "login.html", 1000);
}
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user.email === email && user.pass === pass) {
    localStorage.setItem("logged", "1");
    window.location.href = "index.html";
  } else {
    document.getElementById("loginStatus").textContent = "Incorrect login details.";
  }
}
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
  const link = document.getElementById("authLink");
  if (localStorage.getItem("logged") === "1") {
    link.textContent = "Panel";
    link.href = "panel.html";
  }
}
if (window.location.pathname.includes("panel.html")) {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  document.getElementById("userName").textContent = user.name;
}
function logout() {
  localStorage.removeItem("logged");
  window.location.href = "index.html";
}
