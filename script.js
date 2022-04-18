'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (guess === 0) {
    displayMessage('🔴No Number');
  } //when the player wins
  else if (guess === secretNumber) {
    //when guess is right
    displayMessage('Correct Number🥳');
    // score++;
    // document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'lightgreen';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber && guess <= 20) {
    if (score > 1) {
      // document.querySelector('.message').textContent =guess > secretNumber ? 'Too High📈' : 'Too Low📉';
      displayMessage(guess > secretNumber ? 'Too High📈' : 'Too Low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose');
      document.querySelector('.score').textContent = 0;
    }
  }
  //When Guess is high
  // else if (guess > secretNumber && guess <= 20) {
  //   if (score > 1) {
  //     displayMessage('Too High📈');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('You Lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //When Guess is Low
  // else if (guess < secretNumber && guess <= 20) {
  //   if (score > 1) {
  //     displayMessage('Too Low📉');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('You Lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //}
  else {
    displayMessage('Type Number Between 1 to 20');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
