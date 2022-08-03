let wins=0;
let lose=0;
let playerSelection;
game();
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    return randomChoice;
}

function checksRoundWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Draw";
    }
    else if(playerSelection==0 && computerSelection==1){
        lose++;
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection==0 && computerSelection==2){
        wins++;
        return "You Win! Scissors beats Paper";
    }
    else  if(playerSelection==1 && computerSelection==0){
        wins++;
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection==1 && computerSelection==2){
        lose++;
        return "You Lose! Paper beats Rock";
    }
    else  if(playerSelection==2 && computerSelection==0){
        lose++;
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection==2 && computerSelection==1){
        wins++;
        return "You Win! Paper beats Rock";
    }
}

function playerSelectionFunc(message="Type in your Choice (Rock, Paper or Sciccors)!"){
    playerSelection = prompt(message).toLowerCase();
        if(playerSelection=="scissors"){
            playerSelection=0;
        }
        else if(playerSelection=="rock"){
            playerSelection=1;
        }
        else if(playerSelection=="paper"){
            playerSelection=2;
        }
        else{
            playerSelectionFunc("not valid choose between rock, paper, or scissors!");
        }
}

function game(){
    let roundsToPlay=parseInt(prompt("How many rounds do you wanna play?"));
    (Number.isNaN(roundsToPlay)) ? game(): console.log(roundsToPlay);
    
    for(let i=0; i<roundsToPlay;i++){
        playerSelectionFunc();
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(checksRoundWinner(playerSelection, computerSelection));
    }
    if(wins>lose){
        console.log("You win!")
    }
    else if(wins==lose){
        console.log("Draw!")
    }
    else{
        console.log("You Lose!")
    }

    if(prompt("Again ? Type: yes").toLowerCase()=="yes"){
        console.clear();
        game();
    }
    
}