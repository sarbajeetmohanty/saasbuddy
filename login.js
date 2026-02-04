const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginStatus = document.getElementById("loginStatus");

const getAdminUrl = () => {
  const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
  if (path.endsWith("/login/") || path.endsWith("/login/index.html")) {
    return new URL("../admin.html", window.location.href).toString();
  }
  return new URL("admin.html", window.location.href).toString();
};

window.firebaseAuth?.onAuthStateChanged((user) => {
  if (user) {
    window.location.href = getAdminUrl();
  }
});

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = (emailInput?.value || "").trim().toLowerCase();
  const password = (passwordInput?.value || "").trim();
  if (!window.firebaseAuth) {
    loginStatus.dataset.state = "error";
    loginStatus.textContent = "Firebase not ready. Refresh and try again.";
    return;
  }
  loginStatus.dataset.state = "loading";
  loginStatus.textContent = "Signing in...";
  window.firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      loginStatus.dataset.state = "success";
      loginStatus.textContent = "Login successful. Redirecting...";
      window.location.href = getAdminUrl();
    })
    .catch((error) => {
      const message = error?.message || "Login failed. Check your credentials.";
      loginStatus.dataset.state = "error";
      loginStatus.textContent = message;
    });
});
