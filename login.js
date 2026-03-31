function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  auth.signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

function registrar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  auth.createUserWithEmailAndPassword(email, senha)
    .then(() => {
      alert("Conta criada!");
    })
    .catch(err => alert(err.message));
}