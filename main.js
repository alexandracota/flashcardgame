var Basic = require('./BasicCard.js');
var Cloze = require('./ClozeCard.js');

//Create variable for process.argv[2]
var action = process.argv[2];

if (action === "basic") {
	// console.log("Path to basic.");
	Basic(0);
} else if (action === "cloze") {
	// console.log("Path to cloze.");
	Cloze(0);
	// console.log('after cloze')
};