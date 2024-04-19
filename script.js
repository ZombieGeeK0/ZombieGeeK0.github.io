function verificarContrasena() {
	var contrasenaIngresada = document.getElementById("contrasenaInput").value;
	var contrasenaCorrecta = "wikipedia";

	if (contrasenaIngresada === contrasenaCorrecta) {
		document.getElementById("formulario").style.display = "none";
		window.location.href = "dashboard.html";
	} else {
		document.getElementById("mensajeError").innerText =
			"Contraseña incorrecta. Inténtalo de nuevo.";
	}
}
