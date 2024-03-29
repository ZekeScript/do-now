let amount, mainCurrency, secondaryCurrency, convertionRate, lastUpdate;
const Currencys = [];

/**
 * Take the second API data and finish filling the "currencys" empty array
 * witth the blue value of the dollar
 */
const getDollarBlue = (v6Euro, v6Real) => {
	fetch(`https://api.bluelytics.com.ar/v2/latest`)
		.then((res) => res.json())
		.then((data) => {
			Currencys.push({
				name: 'blue',
				peso: data.blue.value_sell,
				euro: v6Euro,
				real: v6Real,
				dollar: 1,
				blue: 1,
			});
		});
};

/**
 * Take the second API data and finish filling the "currencys" empty array
 * witth the blue value of the dollar for the Argentinian Peso
 */
const getPeso = (v6Euro, v6Real, v6Dollar) => {
	fetch(`https://api.bluelytics.com.ar/v2/latest`)
		.then((res) => res.json())
		.then((data) => {
			Currencys.push({
				name: 'peso',
				dollar: v6Dollar,
				euro: v6Euro,
				real: v6Real,
				peso: 1,
				blue: 1 / data.blue.value_sell,
			});
		});
};

/**
 * Take the first API data and full the "currencys" empty array
 * witth the oficial value of the currencys
 */
const getCurrencyValues = () => {
	fetch(`https://v6.exchangerate-api.com/v6/af786ca433f2f75db62c2ccc/latest/BRL`)
		.then((res) => res.json())
		.then((data) => {
			Currencys.push({
				name: 'real',
				peso: data.conversion_rates.ARS,
				dollar: data.conversion_rates.USD,
				blue: data.conversion_rates.USD,
				euro: data.conversion_rates.EUR,
				real: 1,
			});
		});
	fetch(`https://v6.exchangerate-api.com/v6/af786ca433f2f75db62c2ccc/latest/ARS`)
		.then((res) => res.json())
		.then((data) => {
			getPeso(
				data.conversion_rates.EUR,
				data.conversion_rates.BRL,
				data.conversion_rates.USD
			);
		});
	fetch(`https://v6.exchangerate-api.com/v6/af786ca433f2f75db62c2ccc/latest/USD`)
		.then((res) => res.json())
		.then((data) => {
			Currencys.push({
				name: 'dollar',
				peso: data.conversion_rates.ARS,
				dollar: 1,
				blue: 1,
				euro: data.conversion_rates.EUR,
				real: data.conversion_rates.BRL,
			});
			lastUpdate = `Last update
		${data.time_last_update_utc}`;
			getDollarBlue(data.conversion_rates.EUR, data.conversion_rates.BRL);
		});
	fetch(`https://v6.exchangerate-api.com/v6/af786ca433f2f75db62c2ccc/latest/EUR`)
		.then((res) => res.json())
		.then((data) => {
			Currencys.push({
				name: 'euro',
				peso: data.conversion_rates.ARS,
				dollar: data.conversion_rates.USD,
				blue: data.conversion_rates.USD,
				euro: 1,
				real: data.conversion_rates.BRL,
			});
		});
};
getCurrencyValues();

// Rotate animation
function refreshBtn() {
	let rotacion = (360 / 100) * 2.5; // rotation time
	setTimeout(() => {
		document.getElementById('cross').classList.add('rotate');
	}, 100);

	setTimeout(() => {
		document.getElementById('cross').classList.remove('rotate');
	}, rotacion);
}

/**
 * Take the values of both currencies and the convertion amoun
 * and save the values in the localStorage
 */
function saveValues(mainCurrency, secondaryCurrency, amount) {
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
		mainCurrency = leftCurrency.value;
		mainCurrency = Currencys.find((currency) => currency.name === leftCurrency.value);
		convertionRate = mainCurrency[secondaryCurrency];
		saveValues(mainCurrency, secondaryCurrency, amount);
		rightInput = document.getElementById('rightInput');
		rightInput.value = (amount * convertionRate).toFixed(2);
	}
}
function fromRight() {
	if (leftCurrency.value != '' && rightCurrency.value != '') {
		amount = rightInput.value;
		secondaryCurrency = leftCurrency.value;
		mainCurrency = rightCurrency.value;
		mainCurrency = Currencys.find((currency) => currency.name === rightCurrency.value);
		convertionRate = mainCurrency[secondaryCurrency];
		saveValues();
		leftInput = document.getElementById('leftInput');
		leftInput.value = (amount * convertionRate).toFixed(2);
	}
}

/**
 * Take the first API last update data and drop into View
 */
setTimeout(() => {
	document.getElementById('last-update').innerText = lastUpdate.slice(0, -15);
}, 1000);

// Events associated with the Select converter
let leftCurrency = document.getElementById('leftCurrency');
leftCurrency.onchange = () => {
	if (leftCurrency.value != 1 && rightCurrency.value != 1) {
		document.getElementById('leftInput').disabled = false;
		document.getElementById('rightInput').disabled = false;
		fromLeft();
	}
};
let rightCurrency = document.getElementById('rightCurrency');
rightCurrency.onchange = () => {
	if (leftCurrency.value != 1 && rightCurrency.value != 1) {
		document.getElementById('leftInput').disabled = false;
		document.getElementById('rightInput').disabled = false;
		fromRight();
	}
};

// Events associated with the Input converter
let leftInput = document.getElementById('leftInput');
leftInput.onclick = () => (leftInput.value = '');
leftInput.onkeyup = () => fromLeft();
leftInput.onchange = () => fromLeft();
let rightInput = document.getElementById('rightInput');
rightInput.onclick = () => (rightInput.value = '');
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
			duration: 3000,
		}).showToast();
	}
};

// Event to cross the currencies
const crossBtn = document.getElementById('cross');
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
			duration: 3000,
		}).showToast();
	}
};

// Cleanup event
let cleanBtn = document.getElementById('clean');
cleanBtn.onclick = () => {
	leftInput.value = 0;
	rightInput.value = 0;
};
