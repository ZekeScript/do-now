let question = true;
let money = 0;

function getDollar(currency) {
    return currency * 205.5;
}
function getEuro(currency) {
	return currency * 122.89;
}
function getReal(currency) {
	return currency * 4.02;
}

do {
	let option = parseInt(
		prompt(
			'Currency Converter\n\n1- Dollar\n2- Euro\n3- Real\n\nOption: '
		)
	);
	switch (option) {
		case 1:
			money = parseInt(prompt('how many dollars do you need?'));
			alert('For ' + money + ' dollars you need ' + getDollar(money) + ' pesos');
			break;
		case 2:
			money = parseInt(prompt('how many euros do you need?'));
			alert('For ' + money + ' euros you need ' + getEuro(money) + ' pesos');
            break;
        case 3:
            money = parseInt(prompt('how many reals do you need?'));
            alert('For ' + money + ' reals you need ' + getReal(money) + ' pesos');
		default:
			alert(option + ' no es una opcion valida');
			break;
	}
	question = confirm('Convert more?');
} while (question == true);
