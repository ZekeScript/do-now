let question = true;
let money = 0;

const currencys = [
	{ name: 'dollar', value: 205.5 },
	{ name: 'euro', value: 122.89 },
	{ name: 'real', value: 4.02 },
];

do {
	let option = parseInt(
		prompt('Currency Converter\n\n1- Dollar\n2- Euro\n3- Real\n\nOption: ')
	);
	switch (option) {
		case 1:
			money = parseInt(prompt('how many dollars do you need?'));
			const convertion = currencys.find((value) => value.name === 'dollar');
			alert(
				'For ' + money + ' dollar you need ' + convertion.value * money + ' pesos'
			);
			break;
		case 2:
			money = parseInt(prompt('how many euros do you need?'));
			const convertion1 = currencys.find((value) => value.name === 'euro');
			alert(
				'For ' + money + ' euros you need ' + convertion1.value * money + ' pesos'
			);
			break;
		case 3:
			money = parseInt(prompt('how many reals do you need?'));
			const convertion2 = currencys.find((value) => value.name === 'real');
			alert(
				'For ' + money + ' reals you need ' + convertion2.value * money + ' pesos'
			);
		default:
			alert(option + ' no es una opcion valida');
			break;
	}
	question = confirm('Convert more?');
} while (question == true);
