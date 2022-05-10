var nombre = prompt('nombre');
let saludo = document.createElement("p");
saludo.innerText = "Hola " + nombre + "!";
document.body.append(saludo);