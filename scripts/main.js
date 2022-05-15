const currencys = [
	//this array contains all currency objects
	{ name: 'dollar', toPeso: 117.43, toEuro: 0.96, toReal: 5.06 }, //currency object
	{ name: 'euro', toPeso: 122.26, toDollar: 1.04, toReal: 5.27 },
	{ name: 'real', toPeso: 23.2, toDollar: 0.2, toEuro: 0.19 },
	{ name: 'peso', toDollar: 0.0085, toEuro: 0.0082, toReal: 0.043 },
];

function changeLabelLeft() {
    var labelLeft = document.getElementById('labelLeft');
	if (currency1.value != "") {
		labelLeft.innerText = 'Amount of ' + currency1.value + 's';
    }
    else {
        labelLeft.innerText = 'Amount';
    }
}
function changeLabelRight() {
    var labelRight = document.getElementById('labelRight');
	if (currency2.value != "") {
		labelRight.innerText = 'Amount of ' + currency2.value + 's';
    }
    else {
        labelRight.innerText = 'Amount';
    }
}

let currency1 = document.getElementById('currency1');
currency1.addEventListener('change', changeLabelLeft);
let currency2 = document.getElementById('currency2');
currency2.addEventListener('change', changeLabelRight);