"use strict";

const tableau = require("./tableau.js");

console.log(tableau.tabNom);
console.log(tableau.tabPrenom);
console.log(tableau.tabTelephone);

const maxNom = tableau.tabNom.length;
const maxPrenom = tableau.tabPrenom.length;
const maxTelephone = tableau.tabTelephone.length;

const peupler = () => {
	console.log("ok");
	
	let positionN = Math.floor(Math.random()*maxNom);
	let nom = tableau.tabNom[positionN];

	let positionP = Math.floor(Math.random()*maxPrenom);
	let prenom = tableau.tabPrenom[positionP];

	let positionT = Math.floor(Math.random()*maxTelephone);
	let telephone = tableau.tabTelephone[positionT];

	return {
		telephone : telephone,
		prenom : prenom,
		nom : nom
	};
}

module.exports = peupler;