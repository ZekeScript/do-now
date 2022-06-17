export default chart;

let myCanvas = document.getElementById('blueGraph').getContext('2d');

let chart = new Chart(myCanvas, {
    type: "line",
    data: {
        labels: ['vino', 'tequila', 'cerveza'],
        datasets: [{
            data: [12, 39, 5]
        }]
    }   
})
