# [doNow](https://ezest6.github.io/shiny-fiesta/)

doNow (dollar now) is a web application mainly for staying updated with both dollars in Argentina. Made it with a darker minimalistic design.

## Tech Stack

**Client:** Vanilla JavaScript, HTML+CSS, Bootstrap

**Libraries:** Chart.js, Toastify

**Server:** GitHub

## Features

- Currency converter
- Rate query of a specific day
- Historical evolution
- Historical gap

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

## Deployment

[Run it](https://ezest6.github.io/shiny-fiesta/)

## Badges

![Stars](https://img.shields.io/github/stars/ezEst6/shiny-fiesta?style=social)

![Issues](https://img.shields.io/github/issues-raw/ezEst6/shiny-fiesta?style=social)

![Repo size](https://img.shields.io/github/repo-size/ezEst6/shiny-fiesta)

## Things I learned

- The first issue I faced was the converter. I did this project when I started to learn JavaScript and I want to work with keyUp events. So, it was very difficult. Maybe a currency-converter is not a very good idea for a first-time project but I learned a lot because of that (e.g. how JavaScript handles the flow of process).

- Another big issue was the charts. I didn't know how to implement dynamic charts in JavaScript and was very frustrating because I couldn't find how to do that until I found Chart.js. It's a powerful library for charts and has very good documentation, so took me 2 weeks to learn it.

## API Reference

It's developed with two APIs one, for the international value for all currencies, and another how to bring information from a scraper, the value for the informal dollar.

#### [ExchangeRate-API](https://www.exchangerate-api.com/)

It's an API for given a supplied base currency it will return the whole list of other currencies we support and their corresponding exchange rates. It's paid but the free version support 1.5k request

#### Get latest

```http
  GET v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
```

| Parameter      | Type     | Description                |
| :------------- | :------- | :------------------------- |
| `YOUR-API-KEY` | `string` | **Required**. Your API key |

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `CURRENCY` | `string` | **Required**. ISO 4217 Three Letter Currency Code for that currency |

#### [Bluelytics](https://bluelytics.com.ar/)

API to get the current [dolar blue](https://es.wikipedia.org/wiki/Mercado_negro_de_divisas) rate in Argentina, from various sources.

#### Get latest value

```http
  GET api.bluelytics.com.ar/v2/latest
```

The response is a JSON object with the following attributes

```http
{
  "oficial": {
    "value_avg": 132.29,
    "value_sell": 135.29,
    "value_buy": 129.29
  },
  "blue": {
    "value_avg": 289,
    "value_sell": 294,
    "value_buy": 284
  },
  "oficial_euro": {
    "value_avg": 142.25,
    "value_sell": 145.47,
    "value_buy": 139.02
  },
  "blue_euro": {
    "value_avg": 310.75,
    "value_sell": 316.13,
    "value_buy": 305.38
  },
  "last_update": "2022-07-15T16:25:27.431563-03:00"
}
```

#### Get historical data

```http
  GET api.bluelytics.com.ar/v2/evolution.json?days=2
```

| Parameter | Type      | Description                                            |
| :-------- | :-------- | :----------------------------------------------------- |
| `days`    | `integer` | **Optional**. Get last N/2 days instead of all history |

## Author

- [@ezEst](https://github.com/ezEst6)

## Feedback

If you have any feedback, please reach out to me at estiga27@gmail.com

## Credits

- [Javier Verón](https://www.linkedin.com/in/walterjavierveron/)
- [Santiago Vega](https://www.linkedin.com/in/santiagoeliseovega/)
- [matiu](https://github.com/matiu)

## License

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
