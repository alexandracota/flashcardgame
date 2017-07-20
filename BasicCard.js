var inquirer = require('inquirer');
var ClozeCard = require('./ClozeCard.js');

//Constructor for front and back of basic card.
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	this.displayCard = function() {
		console.log(front + back);
	}
};

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
			//Create new Basic Card.
			var newBasicCard = new BasicCard(questions, answers);
			///HOW DO I DISPLAY THE CARDS???///
		})
	};
};

// createBasic(loop);

// module.exports = BasicCard;
module.exports = createBasic;