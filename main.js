var Basic = require('./BasicCard.js');
var Cloze = require('./ClozeCard.js');


//Create variable for process.argv[2]
var action = process.argv[2];

if (action === "basic") {
	Basic.BasicCard();
} else if (action === "cloze") {
	Cloze.ClozeCard();
};