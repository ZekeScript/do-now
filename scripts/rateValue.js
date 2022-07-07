let lastValue, beforeLastValue;

async function getLastValue() {
	const endpoint = new URL(`https://api.bluelytics.com.ar/v2/evolution.json?days=4`);
	const res = await fetch(endpoint);
	const data = await res.json();
	return data;
}

getLastValue().then((data) => {
	lastValue = data[1];
	beforeLastValue = data[3];
});

function changeRate() {
	return ((beforeLastValue.value_sell * 100) / lastValue.value_sell - 100).toFixed(2);
}

let rate = changeRate();

function removeClass() {
	document.getElementById('card-body').classList.remove('visually-hidden');
}
function addClass() {
	document.getElementById('card-body').classList.add('visually-hidden');
}

let card_header = document.getElementById('card-header');
card_header.onmouseenter = () => removeClass();
card_header.onmouseleave = () => addClass();

let rate_value = document.getElementById('rate-value');
rate_value.innerText = rate;
