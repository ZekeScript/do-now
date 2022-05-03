let question = true;
let money;
var convertion;

const CURRENCYS = [ //this array contains all currency objects
	{ name: 'dollar', value: 205.5 }, //currency object
	{ name: 'euro', value: 122.89 },
	{ name: 'real', value: 4.02 },
];

function getConvertion(value, money) { //this function calculate the convertion for all currencys
	return value * money;
}

do {
	let option = parseInt(
		prompt('Currency Converter\n\n1- Dollar\n2- Euro\n3- Real\n\nOption: ') //navigation menu
	);
	switch (option) {
		case 1:
			money = parseInt(prompt('how many dollars do you need?'));
			convertion = CURRENCYS.find((value) => value.name === 'dollar'); //with .find the necessary currency is obtained
			alert(
				'For ' +
					money +
					' dollar you need ' +
					getConvertion(convertion.value, money) + //call calculate the convertion
					' pesos'
			);
			break;
		case 2:
			money = parseInt(prompt('how many euros do you need?'));
			convertion = CURRENCYS.find((value) => value.name === 'euro');
			alert(
				'For ' +
					money +
					' euros you need ' +
					getConvertion(convertion.value, money) +
					' pesos'
			);
			break;
		case 3:
			money = parseInt(prompt('how many reals do you need?'));
			convertion = CURRENCYS.find((value) => value.name === 'real');
			alert(
				'For ' +
					money +
					' reals you need ' +
					getConvertion(convertion.value, money) +
					' pesos'
			);
			break;
		default:
			alert(option + ' no es una opcion valida');
			break;
	}
	question = confirm('Convert more?');
} while (question == true);
