"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!👍';
// document.querySelector('.number').textContent = 25;
// document.querySelector('.score').textContent = 13;
// document.querySelector('. guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 9;
let highScore = 0;
let gameOver = false;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😬 no number!";
  }

  //correct guess
  else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!👍";
    document.querySelector(".number").textContent = secretNumber;
    if (!gameOver) {
      document.querySelector(".number").style.width = "30rem";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".score").textContent = score;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }
    score++;

    gameOver = true;
  }

  //when guess is different
  else if (guess !== secretNumber) {
    if (guess > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈Too High Number!" : "📉Too low Number!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        'Oop"s! You lost the game🤡';
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#B22222";
    }
  }

  //guess is bigger
  // else if (guess > secretNumber) {
  //   if (score > 1) {

  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Oop"s! You lost the game🤡';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#B22222';
  //   }
  // }

  //guess is less
  //   else if (guess < secretNumber) {
  //     if (score > 0) {

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         'Oop"s! You lost the game🤡';
  //       document.querySelector('body').style.backgroundColor = '#B22222';
  //     }
  //   }
  // });

  document.querySelector(".again").addEventListener("click", function () {
    score = 9;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    gameOver = false;
    document.querySelector(".message").textContent = "Start guessing...!";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
});
