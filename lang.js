const translations = {
  en: {
    login: "Login",
    email: "Email",
    password: "Password",
    create_account: "Create new account",
    forgot: "I don't remember my password",
    start_learning: "Start learning now",
    hero_title: "Learn programming step by step.",
    hero_desc: "Choose a learning path, follow interactive tasks, and build real projects in web, Python, or game dev.",
    view_resources: "View free resources",
    live_preview: "LIVE PREVIEW",
    try_snippet: "Try a simple JavaScript snippet:",
    run_demo: "Run demo",
    terms: "Terms & Conditions",
    panel: "Panel",
    hello: "Hello",
    your_courses: "Your courses",
    logout: "Logout",
    xp_title: "Your progress",
    back_panel: "Back to panel",
    free_resources: "Free resources",
    contact_feedback: "Contact & feedback",
    fill_fields: "Please fill in all fields.",
    email_invalid: "Email must contain @gmail.com",
    account_created: "Account created!",
    wrong_login: "Incorrect login details.",
    account_missing: "Account does not exist."
  },
  pl: {
    login: "Zaloguj",
    email: "Email",
    password: "Hasło",
    create_account: "Utwórz konto",
    forgot: "Nie pamiętam hasła",
    start_learning: "Zacznij naukę",
    hero_title: "Ucz się programowania krok po kroku.",
    hero_desc: "Wybierz ścieżkę nauki, wykonuj zadania i twórz prawdziwe projekty w web, Pythonie lub game dev.",
    view_resources: "Zobacz darmowe materiały",
    live_preview: "PODGLĄD NA ŻYWO",
    try_snippet: "Wypróbuj prosty fragment JavaScript:",
    run_demo: "Uruchom demo",
    terms: "Regulamin",
    panel: "Panel",
    hello: "Witaj",
    your_courses: "Twoje kursy",
    logout: "Wyloguj",
    xp_title: "Twój postęp",
    back_panel: "Powrót do panelu",
    free_resources: "Darmowe materiały",
    contact_feedback: "Kontakt i opinie",
    fill_fields: "Wypełnij wszystkie pola.",
    email_invalid: "Email musi zawierać @gmail.com",
    account_created: "Konto utworzone!",
    wrong_login: "Błędne dane logowania.",
    account_missing: "Konto nie istnieje."
  }
};
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang();
}
function lang(key) {
  const l = localStorage.getItem("lang") || "en";
  return translations[l][key];
}
function applyLang() {
  const l = localStorage.getItem("lang") || "en";
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.dataset.t;
    if (translations[l][key]) {
      el.textContent = translations[l][key];
    }
  });
}
document.addEventListener("DOMContentLoaded", applyLang);