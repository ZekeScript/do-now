let queryArray;
let latestValue = [];
let lastUpdate;

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
		lastUpdate = datapoints.last_update;
	});
}
getLatestValue();

function changeRate() {
	return (((beforeLastValue.value_sell * 100) / lastValue.value_sell - 100) * -1).toFixed(
		2
	);
}

function renderQuery(query) {
	let resQueryDate = document.getElementById('resQueryDate');
	resQueryDate.innerHTML = `
    <div class="card border-light bg-dark mt-5">
      <div class="card-header bg-transparent border-light">${query[0].date}</div>
      <div class="card-body pe-4 ps-4">
        <h5 class="card-title">Dollar</h5>
        <p class="card-text">$ ${query[0].value_buy} - $ ${query[0].value_sell}</p>
        <h5 class="card-title">Blue Dollar</h5>
        <p class="card-text">$ ${query[1].value_buy} - $ ${query[1].value_sell}</p>
      </div>
    </div>

    <div class="card border-light bg-dark mt-5">
      <div class="card-header bg-transparent border-light">Difference</div>
      <div class="card-body pe-4 ps-4">
        <h5 class="card-title">Dollar</h5>
        <p class="card-text">$ ${(latestValue[0].value_buy - query[0].value_buy).toFixed(2)} - $ ${
		(latestValue[0].value_sell - query[0].value_sell).toFixed(2)
	}</p>
        <h5 class="card-title">Blue Dollar</h5>
        <p class="card-text">$ ${latestValue[1].value_buy - query[1].value_buy} - $ ${
		latestValue[1].value_sell - query[1].value_sell
	}</p>
      </div>
      <div class="card-footer bg-transparent border-light">${0}</div>
    </div>

    <div class="card border-light bg-dark mt-5">
      <div class="card-header bg-transparent border-light">${lastUpdate.slice(
				0,
				-22
			)}</div>
      <div class="card-body pe-4 ps-4">
        <h5 class="card-title">Dollar</h5>
        <p class="card-text">$ ${latestValue[0].value_buy} - $ ${
		latestValue[0].value_sell
	}</p>
        <h5 class="card-title">Blue Dollar</h5>
        <p class="card-text">$ ${latestValue[1].value_buy} - $ ${
		latestValue[1].value_sell
	}</p>
      </div>
    </div>
`;
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
		queryArray = [];
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
