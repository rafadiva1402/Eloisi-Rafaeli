document.getElementById("togglePassword").addEventListener("click", function () {
  const senha = document.getElementById("senha");
  senha.type = senha.type === "password" ? "text" : "password";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "usuario@exemplo.com" && senha === "1234") {
    window.location.href = "bemvindo.html";
  } else {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "E-mail ou senha incorretos.";
    mensagem.style.color = "red";
  }
});