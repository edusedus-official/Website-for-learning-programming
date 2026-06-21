function showTooltip(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `<div class="tooltip">${msg}</div>`;
}
function registerUser() {
  const name = regName.value;
  const email = regEmail.value;
  const pass = regPass.value;
  if (!name || !email || !pass) {
    showTooltip("regTooltip", lang("fill_fields"));
    return;
  }
  if (!email.includes("@gmail.com")) {
    showTooltip("regTooltip", lang("email_invalid"));
    return;
  }
  localStorage.setItem("user", JSON.stringify({ name, email, pass }));
  localStorage.setItem("xp", "0");
  localStorage.setItem("level", "1");
  localStorage.setItem("achievements", JSON.stringify([]));
  showTooltip("regTooltip", lang("account_created"));
  setTimeout(() => window.location.href = "login.html", 1000);
}
function loginUser() {
  const email = loginEmail.value;
  const pass = loginPass.value;
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user.email) {
    showTooltip("loginTooltip", lang("account_missing"));
    return;
  }
  if (user.email === email && user.pass === pass) {
    localStorage.setItem("logged", "1");
    window.location.href = "index.html";
  } else {
    showTooltip("loginTooltip", lang("wrong_login"));
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("authLink");
  const logged = localStorage.getItem("logged");
  if (link) {
    if (logged === "1") {
      link.textContent = lang("panel");
      link.href = "panel.html";
    } else {
      link.textContent = lang("login");
      link.href = "login.html";
    }
  }
  updateXPBars();
  if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
  }
});
function addXP(amount) {
  let xp = parseInt(localStorage.getItem("xp") || "0");
  let level = parseInt(localStorage.getItem("level") || "1");
  xp += amount;
  if (xp >= 100) {
    xp = 0;
    level++;
    unlockAchievement("Level " + level + " reached!");
  }
  localStorage.setItem("xp", xp);
  localStorage.setItem("level", level);
  updateXPBars();
}
function updateXPBars() {
  const xp = parseInt(localStorage.getItem("xp") || "0");
  const xpFillPanel = document.getElementById("xpFillPanel");
  if (xpFillPanel) xpFillPanel.style.width = xp + "%";
  const levelEl = document.getElementById("levelDisplay");
  if (levelEl) levelEl.textContent = "Level " + (localStorage.getItem("level") || "1");
}
function unlockAchievement(name) {
  let list = JSON.parse(localStorage.getItem("achievements") || "[]");
  if (!list.includes(name)) {
    list.push(name);
    localStorage.setItem("achievements", JSON.stringify(list));
  }
}
function logout() {
  localStorage.removeItem("logged");
  window.location.href = "index.html";
}
function openLesson(id) {
  window.location.href = "lesson.html?id=" + id;
}
function toggleTheme(){
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}