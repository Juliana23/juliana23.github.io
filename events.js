const print = document.getElementById('print');
const inputPassword = document.getElementById("inputPassword");
const form = document.getElementById("formPassword");

print.addEventListener("click", togglePrint);
form.addEventListener("submit", validatePassword);
inputPassword.addEventListener("keyup", toggleEvent);

function togglePrint() {
	window.print();
}

function validatePassword() {
	let name = document.getElementById("inputTeamName").value;
	let password = document.getElementById("inputPassword").value;
	if (password && password.toLowerCase().replace(/\s/g, '') === 'ordinateur') {
		document.getElementById('congratulations').play();
		document.getElementById("modalContent").innerHTML = 'Bravo ' + name + ' vous avez accompli votre mission ! Les machines vont de nouveau fonctionner correctement.';
	} else {
		document.getElementById('failed').play();
		document.getElementById("modalContent").innerHTML = 'Dommage ' + name + " le mot de passe n'a pas encore débloqué les machines... Mais ne perdez pas espoir ! Continuez vos efforts — la mission dépend de vous !";
	}
	document.getElementById("inputPassword").value = "";
	document.getElementById("inputTeamName").value = "";
}

function toggleEvent(event) {
	event.preventDefault();
		const button = document.getElementById("buttonPassword");
		if (event.key === 'Enter') {
			button.click();
		}
}