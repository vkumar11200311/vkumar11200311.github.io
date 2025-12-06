document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const statusEl = document.getElementById("loginStatus");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  // Show / hide password
  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "Show" : "Hide";
  });

  // Fake login validation (front-end only)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      statusEl.textContent = "Please enter email and password.";
      statusEl.style.color = "#ffb3b3";
      return;
    }

    // Here you can integrate your real backend / API
    statusEl.textContent = "Logging in... (demo only, no backend yet)";
    statusEl.style.color = "#b3e6ff";

    setTimeout(() => {
      statusEl.textContent =
        "Login demo complete. Connect this form to your backend when ready.";
      statusEl.style.color = "#c5ffb3";
    }, 1200);
  });
});
