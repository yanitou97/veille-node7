"use strict";

const tableau = require("./tableau.js");

console.log(tableau.tabVille);
console.log(tableau.tabDomaine);

const maxVille = tableau.tabVille.length;
const maxDomaine = tableau.tabDomaine.length;

const peupler = () => {
	console.log("ok");
	
	let positionV = Math.floor(Math.random()*maxVille);
	let ville = tableau.tabVille[positionV];

	let positionD = Math.floor(Math.random()*maxDomaine);
	let domaine = tableau.tabDomaine[positionD];

	return {
		domaine : domaine,
		ville : ville
	};
}

module.exports = peupler;