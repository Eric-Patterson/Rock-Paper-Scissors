function capitalize(word){
    let firstLetter = word.slice(0,1);
    let finalWord = firstLetter.toUpperCase() + word.slice(1);
    return finalWord;
}

document.getElementById("playButton").addEventListener("click", function playRound(){
    
  
    human = alert ("Type rock paper scissors");
    human = prompt ('');
    while(human !== 'rock'  && human !== 'paper'  && human !== 'scissor' ) {
       human = prompt ('please type a valid input');
    }
    let player = document.querySelector("#player");
    player.textContent = `Players rolls: ${capitalize(human)}`;
    

    numberGen = Math.floor(Math.random() * 3) + 1;  
    if (numberGen <= 1){
        computerPlay = 'rock';
    } else if(numberGen <=2){
        computerPlay = 'paper';
    } else {
        computerPlay = 'scissor';
    }

    let computer = document.querySelector("#computer");
    computer.textContent = `Computer rolls: ${capitalize(computerPlay)}`;
   
      if (human === computerPlay){
        let whoWon = document.querySelector("#won");
        whoWon.textContent = "Its a tie";  
    } else if(human === "rock" && computerPlay === "paper"){
        let whoWon = document.querySelector("#won");
        whoWon.textContent = "Computer Won";  
    } else if(human === "paper" && computerPlay === "scissor"){
        let whoWon = document.querySelector("#won");
        whoWon.textContent = "Computer Won";     
    } else if(human === "scissor" && computerPlay === "rock"){
        let whoWon = document.querySelector("#won");
        whoWon.textContent = "Computer Won";
    } else{
        let whoWon = document.querySelector("#won");
        whoWon.textContent = "You Won";   
    }
     
    
    
});
  



