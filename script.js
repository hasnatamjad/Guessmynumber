'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number.. You won 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNum = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// EVENT LISTENER OF CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number...');

    // WHEN PLAYER WINS
  } else if (guess === secretNum) {
    // document.querySelector('.message').textContent =
    //   'Correct Number.. You won 🎉';
    displayMessage('You won 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNum) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNum ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You loss The Game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
  // check rough code in readme file if want to
});

// RESETTING THE GAME

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';

  displayMessage('Start guessing...');

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
});
