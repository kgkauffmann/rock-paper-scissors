function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convert playerSelection to lowercase for case-insensitivity
  
    if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
      return "Invalid input. Please choose Rock, Paper, or Scissors.";
    }
  
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    }
  
    if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  const playerSelection = prompt("Enter your choice 'rock', 'paper' or 'scissors':");
  const computerSelection = getComputerChoice();
  console.log(`Computer's choice: ${computerSelection}`);
  console.log(playRound(playerSelection, computerSelection));