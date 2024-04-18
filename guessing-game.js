function guessingGame() {
  const secretNumber = Math.floor(Math.random() * 100); 
  let guesses = 0;
  let hasWon = false;

  return function(guess) {
      if (hasWon) {
          return "The game is over, you already won!";
      }

      guesses++;

      if (guess === secretNumber) {
          hasWon = true;
          return `You win! You found ${secretNumber} in ${guesses} guesses.`;
      } else if (guess < secretNumber) {
          return `${guess} is too low!`;
      } else {
          return `${guess} is too high!`;
      }
  };
}

module.exports = { guessingGame };
