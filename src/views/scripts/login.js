document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginError = document.getElementById("loginError");

  // Usuário simulado (você pode expandir para um JSON com vários)
  const fakeUser = {
    username: "ana",
    password: "123456"
  };

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === fakeUser.username && password === fakeUser.password) {
      // Salvar usuário no localStorage (opcional)
      localStorage.setItem("user", username);

      // Redirecionar para o dashboard
      window.location.href = "dashboard.html";
    } else {
      loginError.textContent = "Usuário ou senha inválidos.";
      loginError.style.color = "red";
    }
  });
});