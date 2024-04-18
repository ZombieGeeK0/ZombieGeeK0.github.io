function guardarUsuario() {
  var usuario = document.getElementById("userInput").value;
  var contacto = document.getElementById("contactInput").value;
  window.location.href = "menu.html";
}

function verificarContrasena() {
  var contrasenaIngresada = document.getElementById("contrasenaInput").value;
  var contrasenaCorrecta = "h3ll0w0rld";

  if (contrasenaIngresada === contrasenaCorrecta) {
    document.getElementById("formulario").style.display = "none";
    window.location.href = "user-0000.html";
  } else {
    document.getElementById("mensajeError").innerText =
      "Contraseña incorrecta. Inténtalo de nuevo.";
  }
}
