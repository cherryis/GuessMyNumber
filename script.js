'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!'; //Emoji => Windows key + .key

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log('.guess'.value);
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
let highScore = 0;

//message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When input is null
  if (!guess) {
    displayMessage('❌No Number!'); //=> Windows key + .key

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    //Change background color, box width
    document.querySelector('body').style.backgroundColor = '#8eb7c1';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👀 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Again button for reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
