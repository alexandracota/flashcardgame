//Require inquirer
var inquirer = require('inquirer');

//Constructor
var ClozeCard = function(text, cloze) {
	//All vars will be arrays.
	this.text = text;
	this.cloze = cloze;
}

//Question and answer array.
var questions = [];
var answers = [];

//Keep track of how many times we are looping through.
var loop = 0;


var createBasic = function(loop) {
	//If the questionLoop count is less than 2...
	if (loop < 2) {
		//Prompt user to create question.
		inquirer.prompt([
			{
				name: "question",
				message: "Create a question: "
			},
		//Prompt user to enter answer.
			{
				name: "answer",
				message: "Enter the answer: "
			}
		//Then run a callback function
		]).then(function(input) {
			//Push question into question array
			questions.push(input.question);
			//Push answers into answer array.
			answers.push(input.answer);
			//Add one to the loop count.
			loop++;
			//Use recursion to run the function within callback function.
			createBasic(loop);
		})
	} else {
		console.log("Done!");
	}


};

createBasic(loop);




module.exports = ClozeCard;

