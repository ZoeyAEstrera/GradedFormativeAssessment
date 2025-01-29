let name1 = prompt("Enter your first name: ");
let name2 = prompt("Enter your last name: ");
let year = prompt("Enter your birth year: ");

let currentYear = new Date().getFullYear();
let agenow = currentYear - parseInt(year);

let message = "Hello " + name1 + " " + name2 + "! How does it feel to be " + agenow + " years old?";

document.getElementById("output").innerText = message;