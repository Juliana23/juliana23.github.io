d3.select('#print').on('click', function(d) {
	window.print();
});

function validatePassword(form) {
	let name = document.getElementById("inputTeamName").value;
	let password = document.getElementById("inputPassword").value;
	if (password && password.toLowerCase() === 'ordinateur') {
		document.getElementById('congratulations').play();
		alert('Bravo ' + name + ' vous avez accompli votre mission ! Les machines vont de nouveau fonctionner correctement.');
	} else {
		document.getElementById('failed').play();
		alert('Dommage ' + name + " le mot de passe n'a pas encore débloqué les machines... Mais ne perdez pas espoir ! Continuez vos efforts — la mission dépend de vous !");
	}
	document.getElementById("inputPassword").value = "";
	document.getElementById("inputTeamName").value = "";
	window.onbeforeunload = null;
}