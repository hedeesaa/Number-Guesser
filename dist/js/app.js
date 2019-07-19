let min = 1,
  max = 10,
  winningNum = makeRandom(min, max);
guessNum = 3;
const guess = document.querySelector("#input"),
  gameBtn = document.querySelector("#submit"),
  message = document.querySelector(".message"),
  minNum = document.querySelector(".min-num");
maxNum = document.querySelector(".max-num");

minNum.textContent = min;
maxNum.textContent = max;

gameBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if (gameBtn.value === "Try Again") {
    restartGame();
  } else {
    num = Number(guess.value);

    if (isNaN(num) || num < min || num > max) {
      showMessage(
        `Please Enter a Number Between ${min} and ${max}`,
        "red",
        "normal"
      );
    } else if (num === winningNum) {
      showMessage(`${num} is correct, YOU WIN!`, "green", "bold");

      gameAgain();
    } else {
      guessNum = guessNum - 1;
      if (guessNum === 0) {
        showMessage(
          `Sorry, Game Over, the correct answer was ${winningNum}`,
          "red",
          "normal"
        );

        gameAgain();
      } else {
        showMessage(
          `${num} is not correct, You can have ${guessNum} guesses left`,
          "red",
          "normal"
        );
      }
    }
  }

  guess.value = "";
});

function showMessage(msg, color, weight) {
  message.textContent = msg;
  message.style.color = color;
  message.style.fontWeight = weight;
  guess.style.borderColor = color;
}

function gameAgain() {
  gameBtn.value = "Try Again";
  gameBtn.style.background = "#da4597";
  guess.disabled = true;
}

function restartGame() {
  window.location.reload();
}

function makeRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
