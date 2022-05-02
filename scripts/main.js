let question = true;
let money = 0;

class Currency {
	constructor(name, value) {
		this.name = name;
		this.value = value;
	}
}

const dollar = new Currency(dollar, 205.5);
const euro = new Currency(euro, 122.89);
const real = new Currency(real, 4.02);

const currencys = [];

currencys.push(dollar);
currencys.push(euro);
currencys.push(real);

function getDollar(currency) {
	return currency * dollar.value;
}
function getEuro(currency) {
	return currency * euro.value;
}
function getReal(currency) {
	return currency * real.value;
}

do {
	let option = parseInt(
		prompt('Currency Converter\n\n1- Dollar\n2- Euro\n3- Real\n\nOption: ')
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
