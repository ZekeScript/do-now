let latestValue = [];
let blueLastUpdate;

// Get the historical value from the API
function getLatestValue() {
	async function fetchdata() {
		const url = 'https://api.bluelytics.com.ar/v2/latest';
		const res = await fetch(url);
		// wait until the request has been completed
		const datapoints = await res.json();
		return datapoints;
	}

	fetchdata().then((datapoints) => {
		latestValue.push(datapoints.oficial);
		latestValue.push(datapoints.blue);
		blueLastUpdate = datapoints.last_update;
	});
}
getLatestValue();

function oficialBuyPorcentage(query) {
	let oficialPorcentage = (
		(latestValue[0].value_buy * 100) / query[0].value_buy -
		100
	).toFixed(2);
	return (porcentage =
		oficialPorcentage == 0
			? `<i class="fa-solid fa-arrow-down-up-across-line ms-1"></i> ${oficialPorcentage} %`
			: oficialPorcentage < 0
			? `<i class="fas fa-caret-down ms-1"></i> ` + oficialPorcentage + ` %`
			: `<i class="fa-solid fa-caret-up ms-1"></i> ` + oficialPorcentage + ` %`);
}
function oficialSellPorcentage(query) {
	let oficialPorcentage = (
		(latestValue[0].value_sell * 100) / query[0].value_sell -
		100
	).toFixed(2);
	return (porcentage =
		oficialPorcentage == 0
			? `<i class="fa-solid fa-arrow-down-up-across-line ms-1"></i> ${oficialPorcentage} %`
			: oficialPorcentage < 0
			? `<i class="fas fa-caret-down ms-1"></i> ` + oficialPorcentage + ` %`
			: `<i class="fa-solid fa-caret-up ms-1"></i> ` + oficialPorcentage + ` %`);
}
function blueBuyPorcentage(query) {
	let blueSeellPorcentage = (
		(latestValue[1].value_buy * 100) / query[1].value_buy -
		100
	).toFixed(2);
	return (porcentage =
		blueSeellPorcentage == 0
			? `<i class="fa-solid fa-arrow-down-up-across-line ms-1"></i> ${blueSeellPorcentage} %`
			: blueSeellPorcentage < 0
			? `<i class="fas fa-caret-down ms-1"></i> ` + blueSeellPorcentage + ` %`
			: `<i class="fa-solid fa-caret-up ms-1"></i> ` + blueSeellPorcentage + ` %`);
}
function blueSellPorcentage(query) {
	let blueSeellPorcentage = (
		(latestValue[1].value_sell * 100) / query[1].value_sell -
		100
	).toFixed(2);
	return (porcentage =
		blueSeellPorcentage == 0
			? `<i class="fa-solid fa-arrow-down-up-across-line ms-1"></i> ${blueSeellPorcentage} %`
			: blueSeellPorcentage < 0
			? `<i class="fas fa-caret-down ms-1"></i> ` + blueSeellPorcentage + ` %`
			: `<i class="fa-solid fa-caret-up ms-1"></i> ` + blueSeellPorcentage + ` %`);
}

function renderQuery(query) {
	let resQueryDate = document.getElementById('resQueryDate');
	resQueryDate.innerHTML = `<div class="card border-light bg-dark mt-lg-5">
    <div class="card-header bg-transparent border-light text-center">
      ${query[0].date}
    </div>
    <div class="card-body pe-lg-4 ps-lg-4">
      <h5 class="card-title">Oficial Dollar</h5>
      <p class="card-text">
        Buy: $ ${query[0].value_buy} <br> 
        Sell: $ ${query[0].value_sell}
      </p>
      <h5 class="card-title">Blue Dollar</h5>
      <p class="card-text">
        Buy: $ ${query[1].value_buy} <br> 
        Sell: $ ${query[1].value_sell}
      </p>
    </div>
  </div>
  <div class="card border-light bg-dark mt-lg-5 mt-4">
    <div class="card-header bg-transparent border-light text-center">
      Difference with today<br> (${blueLastUpdate.slice(0, -22)})
    </div>
    <div class="card-body pe-lg-4 ps-lg-4">
      <h5 class="card-title">Oficial Dollar</h5>
      <p class="card-text">
        Buy: $ ${(latestValue[0].value_buy - query[0].value_buy).toFixed(2)}
        <i class="fa-solid fa-right-long me-1 ms-1"></i>
        ${oficialBuyPorcentage(query)} <br>
        Sell: $ ${(latestValue[0].value_sell - query[0].value_sell).toFixed(2)}
        <i class="fa-solid fa-right-long me-1 ms-1"></i>
        ${oficialSellPorcentage(query)}
      </p>
      <h5 class="card-title">Blue Dollar</h5>
      <p class="card-text">
        Buy: $ ${(latestValue[1].value_buy - query[1].value_buy).toFixed(2)}
        <i class="fa-solid fa-right-long me-1 ms-1"></i>
        ${oficialBuyPorcentage(query)} <br>
        Sell: $ ${(latestValue[1].value_sell - query[1].value_sell).toFixed(2)}
        <i class="fa-solid fa-right-long me-1 ms-1"></i>
        ${oficialSellPorcentage(query)}
      </p>
    </div>
  </div>`;
}

// Get the historical value from the API
function getValueByDate(queryDate) {
	async function fetchdata() {
		const url = 'https://api.bluelytics.com.ar/v2/evolution.json';
		const res = await fetch(url);
		// wait until the request has been completed
		const datapoints = await res.json();
		return datapoints;
	}

	fetchdata().then((datapoints) => {
		let queryArray = [];
		datapoints.map(function (index) {
			index.date == queryDate && queryArray.push(index);
		});
		renderQuery(queryArray);
	});
}

let listenQueryDate = document.getElementById('queryDate');
listenQueryDate.onchange = () => {
	getValueByDate(listenQueryDate.value);
};
