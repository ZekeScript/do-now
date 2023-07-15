# Currency Converter App

This is a currency converter app that allows you to convert between different currencies. It retrieves currency exchange rates from various APIs and provides a user interface to perform conversions.

## Features

- Convert between different currencies using real-time exchange rates.
- Supports conversion between the following currencies: Argentine Peso (ARS), US Dollar (USD), Euro (EUR), and Brazilian Real (BRL).
- Displays the latest exchange rates for the official and blue market (unofficial) dollar.
- Provides a historical chart of exchange rate evolution for the official and blue market dollar.
- Allows selection of different time intervals for the chart (max, 5 years, 1 year, 6 months, 1 month, 5 days).
- Displays the difference between today's exchange rates and the selected historical date.
- Provides the ability to query exchange rates for specific dates.
- Shows the percentage change in exchange rates compared to the selected historical date.
- Includes a rotating animation on the refresh button.
- Allows clearing the input fields with a clean button.

## Installation and Setup

1. Clone the repository or download the source code.
2. Open the index.html file in a web browser.

## Usage

1. Select the currencies you want to convert from and to using the dropdown menus.
2. Enter the amount you want to convert in the input field.
3. The converted amount will be displayed in the corresponding output field.
4. You can switch the conversion direction by clicking the arrow button.
5. To view the last conversion made, click the "Last Conversion" button.
6. To view the historical exchange rate chart, click the buttons corresponding to different time intervals.
7. You can query exchange rates for specific dates by selecting a date from the dropdown menu.
8. The difference in exchange rates between today and the selected historical date will be displayed.
9. The percentage change in exchange rates will be shown, indicating if it has increased or decreased.

Note: The app retrieves real-time data from external APIs, so an internet connection is required.

## Screenshots

#### Home

![Home](https://user-images.githubusercontent.com/57415369/179135600-7a6df8ef-9dd2-427a-a1ef-3c86fe3ad7d2.png)

#### Currency Converter

![Currency converter](https://user-images.githubusercontent.com/57415369/179135710-b8e6e79d-1dc0-4d96-b2f1-212878691599.png)

![Currency converter](https://user-images.githubusercontent.com/57415369/179135861-87e57764-74f8-426c-b977-c344586769c4.png)

#### Query By Date

![Query By Date](https://user-images.githubusercontent.com/57415369/179135976-94b9db8b-62e2-4935-9d40-71e90a5b91d3.png)

![Query By Date](https://user-images.githubusercontent.com/57415369/179136105-d3e2d858-39e5-4ab1-a600-3df7924df838.png)

#### Historical charts

![Evo chart](https://user-images.githubusercontent.com/57415369/179136280-6ec13729-43ec-4674-81e4-b9b9ef0c948f.png)

![Evo chart](https://user-images.githubusercontent.com/57415369/179136422-86340dc9-77ba-4513-94f6-61efccbddcba.png)

## Demo

![doNow mobile version](https://user-images.githubusercontent.com/57415369/179321381-97e92192-bec4-4344-9f28-ac84329bafe9.gif)

## API References

The app uses the following APIs:

- `https://v6.exchangerate-api.com`: Retrieves exchange rate data for different currencies.
- `https://api.bluelytics.com.ar`: Fetches historical exchange rate data and the latest values for the official and blue market dollar.

## Credits

- [Javier Verón](https://www.linkedin.com/in/walterjavierveron/)
- [Santiago Vega](https://www.linkedin.com/in/santiagoeliseovega/)
- [matiu](https://github.com/matiu)

This app was developed by [Your Name]. It uses the following libraries and technologies:

- JavaScript
- HTML
- CSS
- Chart.js (https://www.chartjs.org/)
- Toastify (https://apvarun.github.io/toastify-js/)

## License

This project is licensed under the [MIT License](LICENSE).
