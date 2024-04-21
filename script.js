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

document.getElementById("discord-button").addEventListener("click", function() {
    window.location.href = "https://discord.com/users/1112290766631477248";
});
  
document.getElementById("email-button").addEventListener("click", function() {
    window.location.href = "mailto:3xpl017.contact@proton.me";
});
  
document.getElementById("x-button").addEventListener("click", function() {
    window.location.href = "https://twitter.com/?lang=es";
});

document.getElementById("github-button").addEventListener("click", function() {
    window.location.href = "https://github.com/ZombieGeeK0";
});
