let rate, amount, mainCurrency, secondaryCurrency;
const currencys = [
	// This array contains all currency objects
	{ name: 'dollar', peso: 117.43, dollar: 1, euro: 0.96, real: 5.06 }, // currency object
	{ name: 'euro', peso: 122.26, dollar: 1.04, euro: 1, real: 5.27 },
	{ name: 'real', peso: 23.2, dollar: 0.2, euro: 0.19, real: 1 },
	{ name: 'peso', peso: 1, dollar: 0.0085, euro: 0.0082, real: 0.043 },
];

// Rotate animation
function refreshBtn() {
	let rotacion = (360 / 100) * 2.5; // rotation time
	setTimeout(() => {
		document.getElementById('btnRefresh').classList.add('rotate');
	}, 100);

	setTimeout(() => {
		document.getElementById('btnRefresh').classList.remove('rotate');
	}, rotacion);
}

/**
 * Take the values of both currencies and the convertion amoun
 * and save the values in the localStorage
 */
function saveValues() {
	localStorage.setItem('mainCurrency', JSON.stringify(mainCurrency));
	localStorage.setItem('secondaryCurrency', secondaryCurrency);
	localStorage.setItem('amount', amount);
}

/**
 * Both functions (fromLef and fromRight) do the calculations for the conversion
 * first takes the values ​​in both select
 * then, look up the conversion rate using both currencies names
 * then, writes the values ​​to localStorage
 * and finally uses the attached rate and amount in the input to do the calculations for the conversion
 */
function fromLeft() {
	amount = leftInput.value;
	secondaryCurrency = rightCurrency.value;
	mainCurrency = currencys.find((currency) => currency.name === leftCurrency.value);
	rate = mainCurrency[secondaryCurrency];
	saveValues();
	rightInput.value = (amount * rate).toFixed(2);
}
function fromRight() {
	amount = rightInput.value;
	secondaryCurrency = leftCurrency.value;
	mainCurrency = currencys.find((currency) => currency.name === rightCurrency.value);
	rate = mainCurrency[secondaryCurrency];
	saveValues();
	leftInput.value = (amount * rate).toFixed(2);
}

// Events associated with the Select
let leftCurrency = document.getElementById('leftCurrency');
leftCurrency.onchange = () => fromRight();
let rightCurrency = document.getElementById('rightCurrency');
rightCurrency.onchange = () => fromLeft();

// Events associated with the Input
let leftInput = document.getElementById('leftInput');
leftInput.onkeyup = () => fromLeft();
let rightInput = document.getElementById('rightInput');
rightInput.onkeyup = () => fromRight();

// Events to get last conversion
const lastConvertion = document.getElementById('lastConvertion');
lastConvertion.onclick = () => {
	amount = document.getElementById('leftInput');
	const lastLeftCurrency = JSON.parse(localStorage.getItem('mainCurrency'));
	const lastRightCurrency = localStorage.getItem('secondaryCurrency');
	const lastAmount = localStorage.getItem('amount');
	leftCurrency.value = lastLeftCurrency.name;
	rightCurrency.value = lastRightCurrency;
	amount.value = lastAmount;
	fromLeft();
};

// Event to cross the currencies
const crossBtn = document.getElementById('btnRefresh');
crossBtn.onmousedown = refreshBtn;
crossBtn.onclick = () => {
	const newRightCurrencyValue = leftCurrency.value;
	const newLeftCurrencyValue = rightCurrency.value;
	leftCurrency.value = newLeftCurrencyValue;
	rightCurrency.value = newRightCurrencyValue;
	fromLeft();
};

// Cleanup event
let cleanBtn = document.getElementById('clean');
cleanBtn.onclick = () => {
	leftInput.value = 0;
	rightInput.value = 0;
};
