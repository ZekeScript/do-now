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
	return (
		((beforeLastValue.value_sell * 100) / lastValue.value_sell - 100) *
		-1
	).toFixed(2);
}

function removeClass() {
	document.getElementById('card-body').classList.remove('visually-hidden');
}
function addClass() {
	document.getElementById('card-body').classList.add('visually-hidden');
}

let card_header = document.getElementById('card-header');
card_header.onmouseover = () => removeClass();
card_header.onmouseleave = () => addClass();

setTimeout(() => {
	let rate = changeRate();
	let rate_value = document.getElementById('rate-value');
	let value_sell = document.getElementById('value-sell');
	let value_buy = document.getElementById('value-buy');
	rate_value.innerText = rate;
	value_buy.innerText = lastValue.value_buy;
	value_sell.innerText = lastValue.value_sell;
	Number(rate) === 0
		? document.getElementById('caret').classList.add('fa-arrow-down-up-across-line')
		: Number(rate) < 0
		? document.getElementById('caret').classList.add('fa-caret-down')
		: document.getElementById('caret').classList.add('fa-caret-up');
}, 800);
