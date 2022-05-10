let question = true;
var valueToConvert;
var convertion;

const currencys = [
	//this array contains all currency objects
	{ name: 'dollar', value: 205.5 }, //currency object
	{ name: 'euro', value: 122.89 },
	{ name: 'real', value: 4.02 },
];

function getConvertion() { //this function calculate the convertion for all currencys
    value = convertion.value;
    valueToConvert = document.getElementById('valueToConvert').value;
    return alert(
		'For ' +
			valueToConvert +
			' dollar you need ' +
			value * valueToConvert + //call calculate the convertion
			' pesos'
	);
}

function getConvertion2(value, valueToConvert) {
    return value * valueToConvert;
}

function dollar() {
	convertion = currencys.find((value) => value.name === 'dollar'); //with .find the necessary currency is obtained
	var convertBtn = document.getElementById('convert');
	convertBtn.addEventListener('click', getConvertion);
}
function euro() {
	valueToConvert = parseInt(prompt('how many euros do you need?'));
	convertion = currencys.find((value) => value.name === 'euro');
	alert(
		'For ' +
			valueToConvert +
			' euros you need ' +
			getConvertion2(convertion.value, valueToConvert) +
			' pesos'
	);
}
function real() {
	valueToConvert = parseInt(prompt('how many reals do you need?'));
	convertion = currencys.find((value) => value.name === 'real');
	alert(
		'For ' +
			valueToConvert +
			' reals you need ' +
			getConvertion2(convertion.value, valueToConvert) +
			' pesos'
	);
}

opcion1 = document.getElementById('real');
opcion1.addEventListener('click', real);
opcion2 = document.getElementById('euro');
opcion2.addEventListener('click', euro);
opcion3 = document.getElementById('dollar');
opcion3.addEventListener('click', dollar);
