let question = true;
let grade = 0;
let convert = 0;

do {
  let option = parseInt(
    prompt(
      "Temperature Converter\n\n1- Celsius to Fahrenheit\n2- Fahrenheit to Celsius\n\nOption: "
    )
  );
  switch (option) {
    case 1:
      grade = parseInt(prompt("ºC: "));
      convert = grade * 1.8 + 32;
      alert(grade + " ºC = " + convert + " ºF");
      break;
    case 2:
      grade = parseInt(prompt("ºF: "));
      convert = (grade - 32) / 1.8;
      alert(grade + " ºF = " + convert + " ºC");
      break;
    default:
      alert(option + "no es una opcion valida");
      break;
  }
  question = confirm("Convert more?");
} while (question == true);
