/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function convertToKilograms(event) {
	const value = event.target[0].value;
	const resultPounds = (value * 2.2046);
	document.getElementById("Pounds").innerText = resultPounds;
	const resultOunces = (value * 35.274);
	document.getElementById("Grams").innerText = resultOunces;
	const resultGrams = (value / 0.001);
	document.getElementById("Ounces").innerText = resultGrams;
	event.preventDefault();
}