// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {
  // Welcome message
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");
  return;
}
  // TODO: Create a random number between 1 and 100 and store it in a variable called targetNumber
  const targetNumber = (Math.floor(Math.random() * 100) + 1);
  // Example: const targetNumber = Math.floor(Math.random() * 100) + 1;
  //const targetNumber = (87); // For testing purposes, you can set this to a fixed number
  // TODO: Create a variable to track how many guesses the player has made
  let guessCount = 0;

  // Create a variable to store the player's current guess
  let guess = null;

  // TODO: Create a loop that keeps asking the player for a guess until they guess correctly
  // Use window.prompt() to ask for a number
  let keepPlaying = true;
    //continue until guess matches random number
  while (guess !== targetNumber) {
    guess = parseInt(window.prompt("Enter your guess (1-100):"), 10);
    guessCount++; 
    window.alert(`You guessed: ${guess}`);

    if (guess < targetNumber) {
      window.alert("Too low! Try a higher number.");
      //window.alert(`Too low! Target number is ${targetNumber}.`); just to play around with the game
    } else if (guess > targetNumber) {
      window.alert("Too high! Try a lower number.");
      //window.alert(`Too high! Target number is ${targetNumber}.`); just to play around with the game
    } else {
      window.alert(`Congratulations! You guessed the number in ${guessCount} attempts!`);
    }
    
  const playAgain = window.confirm("Do you want to play again?"); 
    if (playAgain) {
      playHighLowGame(); 
    } else {
      window.alert("Thanks for playing! Goodbye!");
      keepPlaying = false; 
    } 
  }


  // Inside your loop:
  // 1️⃣ Convert the input to a number using parseInt()
  // 2️⃣ Check if the guess is too high, too low, or correct
  // 3️⃣ Use window.alert() to tell the player the result
  // 4️⃣ Count the number of attempts

  // TODO: When the player guesses correctly:
  // - Alert them that they won and show how many attempts it took
  // - Ask if they want to play again using window.confirm()
  // - If yes, call playHighLowGame() again
  // - If no, show a “Thanks for playing” message


  // 🚀 Call the function to start the game
  //playHighLowGame();
