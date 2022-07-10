// setup block
const data = {
	labels: [],
	datasets: [
		{
			label: 'Blue dollar',
			data: [],
			borderColor: ['#36a2eb'],
			backgroundColor: ['#36a2eb'],
		},
		{
			label: 'Dollar',
			data: [],
			borderColor: ['#7dbd00'],
			backgroundColor: ['#7dbd00'],
		},
	],
};

// config block
const config = {
	type: 'line',
	data,
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
};

// render / init block
const evoChart = new Chart(document.getElementById('evoChart'), config);

// Get the historical value from the API
function getChart() {
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
		let blueValue = [];
		let oficialValue = [];
		let dateValue = [];
		datapoints
			.slice(0)
			.reverse()
			.map(function (index) {
				index.source == 'Blue'
					? dateValue.push(index.date) && blueValue.push(index.value_sell)
					: oficialValue.push(index.value_sell);
			});
		evoChart.config.data.labels = dateValue;
		evoChart.config.data.datasets[0].data = blueValue;
		evoChart.config.data.datasets[1].data = oficialValue;
		evoChart.update();
	});
}

// Get the historical values from TODAY to DAYS
// by function parameter
function getChartInterval(days) {
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
		let blueValue = [];
		let oficialValue = [];
		let dateValue = [];
		datapoints
			.slice(0)
			.reverse()
			.map(function (index) {
				index.source == 'Blue'
					? dateValue.push(index.date) && blueValue.push(index.value_sell)
					: oficialValue.push(index.value_sell);
			});
		evoChart.config.data.labels = dateValue;
		evoChart.config.data.datasets[0].data = blueValue;
		evoChart.config.data.datasets[1].data = oficialValue;
		evoChart.update();
	});
}

// listener block
const listenToMaxEvoBtn = document.getElementById('maxEvoBtn');
listenToMaxEvoBtn.onclick = () => getChart();
const listenTo5YEvoBtn = document.getElementById('5YEvoBtn');
listenTo5YEvoBtn.onclick = () => getChartInterval(3650);
const listenTo1YEvoBtn = document.getElementById('1YEvoBtn');
listenTo1YEvoBtn.onclick = () => getChartInterval(730);
const listenTo6MEvoBtn = document.getElementById('6MEvoBtn');
listenTo6MEvoBtn.onclick = () => getChartInterval(360);
const listenTo1MEvoBtn = document.getElementById('1MEvoBtn');
listenTo1MEvoBtn.onclick = () => getChartInterval(60);
const listenTo5DEvoBtn = document.getElementById('5DEvoBtn');
listenTo5DEvoBtn.onclick = () => getChartInterval(10);
