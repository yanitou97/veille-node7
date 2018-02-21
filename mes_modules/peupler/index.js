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

		let positionC = Math.floor(Math.random()*maxCourriel);
		let courriel = tableau.tabCourriel[positionT];

		collection.push({
			courriel : prenom+nom+courriel,
			telephone : telephone,
			prenom : prenom,
			nom : nom
		})
	}
	console.log(collection);
	return collection;
}

module.exports = peupler;