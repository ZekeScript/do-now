fetch('https://api.bluelytics.com.ar/v2/latest')
.then((res) => res.json())
.then((data) => {
	console.log(data.blue.value_sell);
});


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
	if (leftCurrency.value != '' && rightCurrency.value != '') {
		amount = leftInput.value;
		secondaryCurrency = rightCurrency.value;
		mainCurrency = currencys.find((currency) => currency.name === leftCurrency.value);
		rate = mainCurrency[secondaryCurrency];
		saveValues();
		rightInput = document.getElementById('rightInput');
		rightInput.value = (amount * rate).toFixed(2);
	}
}
function fromRight() {
	if (leftCurrency.value != '' && rightCurrency.value != '') {
		amount = rightInput.value;
		secondaryCurrency = leftCurrency.value;
		mainCurrency = currencys.find(
			(currency) => currency.name === rightCurrency.value
		);
		rate = mainCurrency[secondaryCurrency];
		saveValues();
		leftInput = document.getElementById('leftInput');
		leftInput.value = (amount * rate).toFixed(2);
	}
}

// Events associated with the Select
let leftCurrency = document.getElementById('leftCurrency');
leftCurrency.onchange = () => fromLeft();
let rightCurrency = document.getElementById('rightCurrency');
rightCurrency.onchange = () => fromRight();

// Events associated with the Input
let leftInput = document.getElementById('leftInput');
leftInput.onkeyup = () => fromLeft();
leftInput.onchange = () => fromLeft();
let rightInput = document.getElementById('rightInput');
rightInput.onkeyup = () => fromRight();
rightInput.onchange = () => fromRight();

// Events to get last conversion
const lastConvertion = document.getElementById('lastConvertion');
lastConvertion.onclick = () => {
	leftCurrency = document.getElementById('leftCurrency');
	rightCurrency = document.getElementById('rightCurrency');
	amount = document.getElementById('leftInput');

	const lastLeftCurrency = JSON.parse(localStorage.getItem('mainCurrency'));
	const lastRightCurrency = localStorage.getItem('secondaryCurrency');
	const lastAmount = localStorage.getItem('amount');
	if (lastRightCurrency != null) {
		leftCurrency.value = lastLeftCurrency.name;
		rightCurrency.value = lastRightCurrency;
		amount.value = lastAmount;
		fromLeft();
	} else {
		Toastify({
			text: 'No convertion yet!',
			duration: 3000
		}).showToast();
	}
};

// Event to cross the currencies
const crossBtn = document.getElementById('btnRefresh');
crossBtn.onclick = () => {
	leftCurrency = document.getElementById('leftCurrency');
	rightCurrency = document.getElementById('rightCurrency');

	const newRightCurrencyValue = leftCurrency.value;
	const newLeftCurrencyValue = rightCurrency.value;
	if (newRightCurrencyValue != '' && newLeftCurrencyValue != '') {
		refreshBtn();
		leftCurrency.value = newLeftCurrencyValue;
		rightCurrency.value = newRightCurrencyValue;
		fromLeft();
	} else {
		Toastify({
			text: 'Select both currencies!',
			duration: 3000
		}).showToast();
	}
};

// Cleanup event
let cleanBtn = document.getElementById('clean');
cleanBtn.onclick = () => {
	leftInput.value = 0;
	rightInput.value = 0;
};
