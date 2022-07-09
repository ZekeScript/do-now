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
const myChart = new Chart(document.getElementById('evoChart'), config);

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
		myChart.config.data.labels = dateValue;
		myChart.config.data.datasets[0].data = blueValue;
		myChart.config.data.datasets[1].data = oficialValue;
		myChart.update();
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
		myChart.config.data.labels = dateValue;
		myChart.config.data.datasets[0].data = blueValue;
		myChart.config.data.datasets[1].data = oficialValue;
		myChart.update();
	});
}

// listener block
const listenToMaxButton = document.getElementById('MaxButton');
listenToMaxButton.onclick = () => getChart();

const listenTo5YButton = document.getElementById('5YButton');
listenTo5YButton.onclick = () => getChartInterval(3650);

const listenTo1YButton = document.getElementById('1YButton');
listenTo1YButton.onclick = () => getChartInterval(730);

const listenTo6MButton = document.getElementById('6MButton');
listenTo6MButton.onclick = () => getChartInterval(360);

const listenTo1MButton = document.getElementById('1MButton');
listenTo1MButton.onclick = () => getChartInterval(60);

const listenTo5DButton = document.getElementById('5DButton');
listenTo5DButton.onclick = () => getChartInterval(10);
