document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.getElementById("loginMessage");
  msg.textContent = "Logging in...";
  msg.style.color = "#f1faee";

  setTimeout(() => {
    msg.textContent = "Login successful!";
    msg.style.color = "#38b000";
  }, 1000);
});
