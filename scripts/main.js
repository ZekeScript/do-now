//f = (c x 1.8) + 32
//c = (f - 32) / 1.8

let pregunta = true;

do {
    alert('Temperature Conversor\n\n1- Celsius to Fahrenheit\n2- fahrenheit to Celsius');
    let grades = parseInt(prompt('Option: '));
    pregunta = confirm('Convert more?');
} while (pregunta == true);