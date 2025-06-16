d3.select('#print').on('click', function(d) {
	window.print();
});

function validatePassword(form) {
	let name = document.getElementById("inputTeamName").value;
	let password = document.getElementById("inputPassword").value;
	if (password == 'ordinateur') {
		alert(name + ' vous avez accompli votre mission, bravo ! Les machines vont de nouveau fonctionner correctement.');
	}
}