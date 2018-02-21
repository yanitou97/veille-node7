"use strict";

const tableau = require("./tableau.js");

const maxNom = tableau.tabNom.length;
const maxPrenom = tableau.tabPrenom.length;
const maxTelephone = tableau.tabTelephone.length;

const peupler = () => {
	console.log("ok");
	let collection = [];
	for (let i=0;i<10;i++){
		let positionN = Math.floor(Math.random()*maxNom);
		let nom = tableau.tabNom[positionN];

		let positionP = Math.floor(Math.random()*maxPrenom);
		let prenom = tableau.tabPrenom[positionP];

		let positionT = Math.floor(Math.random()*maxTelephone);
		let telephone = tableau.tabTelephone[positionT];

		collection.push({
			telephone : telephone,
			prenom : prenom,
			nom : nom
		})
	}
	console.log(collection);
	return collection;
}

module.exports = peupler;