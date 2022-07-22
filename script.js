'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
	document.querySelector('.number').textContent = number;
};
const widthNumber = function (width) {
	document.querySelector('.number').style.width = width;
};
const bgColor = function (color) {
	document.querySelector('body').style.backgroundColor = color;
};
const guessValue = function (value) {
	Number((document.querySelector('.guess').value = value));
};
const displayScore = function (score) {
	document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!guess || typeof guess !== 'number' || guess < 1 || guess > 20) {
		displayMessage('Select a valid number between 1 - 20!');

		// When player wins
	} else if (guess === secretNumber) {
		displayMessage('Correct Number!');
		bgColor('#60b347');

		widthNumber('30rem');
		displayNumber(secretNumber);

		score > highScore
			? ((highScore = score),
			  (document.querySelector('.highscore').textContent = highScore))
			: null;

		//When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			score--;
			displayScore(score);

			displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
		} else {
			displayMessage('You lost the game!');
			displayScore(0);
		}

		//When player guesses too high
	}

	document.querySelector('.again').addEventListener('click', function () {
		score = 20;
		secretNumber = Math.trunc(Math.random() * 20) + 1;
		displayNumber('?');
		widthNumber('15rem');
		displayMessage('Start guessing...');
		displayScore(score);
		bgColor('#222');
		guessValue('');
	});
});
