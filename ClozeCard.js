//Require inquirer
var inquirer = require('inquirer');

//ClozeCard Constructor.
var ClozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = function(statements) {
		console.log(statements);
	};
	this.partial = function(answers) {
		console.log(answers);
	};
	this.fullText = function(answers, statements) {
		console.log(answers + statements);
	};

	this.error = function() {
		if (err) console.log(err);
	}
};



var createCloze = function(loop) {
	var count = loop;
	var statements = [];
	var answers = [];

	if (count < 2) {
		inquirer.prompt([
			{
				name: "statement",
				message: "Enter an incomplete statement like this: ________ is the (insert statement)."
			},
			{
				name: "answer",
				message: "Fill in the blank."
			}
		]).then(function(input) {
			statements.push(input.statement);
			answers.push(input.answer);
			count++;
			createCloze(count);
			var newClozeCard = new ClozeCard (statements, answers)
		})
	};
};

// createCloze();

// module.exports = ClozeCard;
module.exports = createCloze;

