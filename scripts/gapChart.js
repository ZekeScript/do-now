// setup block
const data2 = {
	labels: [],
	datasets: [
		{
			label: 'Gap',
			data: [],
			borderColor: ['#A91501'],
			backgroundColor: ['#A91501'],
		},
	],
};

// config block
const config2 = {
	type: 'line',
	data: data2,
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
};

// render / init block
const gapChart = new Chart(document.getElementById('gapChart'), config2);

// Get the historical value from the API
function getChartGap() {
	async function fetchdata() {
		const url = 'https://api.bluelytics.com.ar/v2/evolution.json';
		const res = await fetch(url);
		// wait until the request has been completed
		const datapoints = await res.json();
		return datapoints;
	}

	// Render the values if the labels (dates) on the graph
	// and the values of the blue dollar and the oficial dollar
	fetchdata().then((datapoints) => {
		let blueValue;
		let dateValue = [];
		let gap = [];
		datapoints
			.slice(0)
			.reverse()
			.map(function (index) {
				index.source == 'Blue'
					? dateValue.push(index.date) && (blueValue = index.value_sell)
					: gap.push(blueValue - index.value_sell);
			});
		gapChart.config.data.labels = dateValue;
		gapChart.config.data.datasets[0].data = gap;
		gapChart.update();
	});
}

// Get the historical values from TODAY to DAYS
// by function parameter
function getChartGapInterval(days) {
	async function fetchdata() {
		const url = `https://api.bluelytics.com.ar/v2/evolution.json?days=${days}`;
		const res = await fetch(url);
		// wait until the request has been completed
		const datapoints = await res.json();
		return datapoints;
	}

	// Render the values if the labels (dates) on the graph
	// and the values of the blue dollar and the oficial dollar
	fetchdata().then((datapoints) => {
		let blueValue;
		let dateValue = [];
		let gap = [];
		datapoints
			.slice(0)
			.reverse()
			.map(function (index) {
				index.source == 'Blue'
					? dateValue.push(index.date) && (blueValue = index.value_sell)
					: gap.push(blueValue - index.value_sell);
			});
		gapChart.config.data.labels = dateValue;
		gapChart.config.data.datasets[0].data = gap;
		gapChart.update();
	});
}

// listener block
const listenToMaxGapBtn = document.getElementById('maxGapBtn');
listenToMaxGapBtn.onclick = () => getChartGap();
const listenTo5YGapBtn = document.getElementById('5YGapBtn');
listenTo5YGapBtn.onclick = () => getChartGapInterval(3650);
const listenTo1YGapBtn = document.getElementById('1YGapBtn');
listenTo1YGapBtn.onclick = () => getChartGapInterval(730);
const listenTo6MGapBtn = document.getElementById('6MGapBtn');
listenTo6MGapBtn.onclick = () => getChartGapInterval(360);
const listenTo1MGapBtn = document.getElementById('1MGapBtn');
listenTo1MGapBtn.onclick = () => getChartGapInterval(60);
const listenTo5DGapBtn = document.getElementById('5DGapBtn');
listenTo5DGapBtn.onclick = () => getChartGapInterval(10);
