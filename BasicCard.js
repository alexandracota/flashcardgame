var inquire = require('inquirer');

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	//Display method.
	this.displayCard = "This is where the front and the back of the card go."
};

var newBasicCard = new BasicCard("George Washington was the ", "first president.");





module.exports = BasicCard;
module.exports = newBasicCard;