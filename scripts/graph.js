function getChart() {
  async function fetchdata() {
    const url = "https://api.bluelytics.com.ar/v2/evolution.json";
    const res = await fetch(url);
    // wait until the request has been completed
    const datapoints = await res.json();
    console.log(datapoints);
    return datapoints;
  }
  
  fetchdata().then((datapoints) => {
    const date = datapoints.slice(0).reverse().map(function (index) {
      if (index.source == "Blue") {
        return index.date;
      }
    });
    const value = datapoints.slice(0).reverse().map(function (index) {
      if (index.source == "Blue") {
        return index.value_sell;
      }
    });

    console.log(date);
    console.log(value);
    myChart.config.data.labels = date;
    myChart.config.data.datasets[0].data = value;
    myChart.update();
  });
}
getChart();

// setup
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Blue dollar evolution",
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "line",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("blueGraph"), config);
