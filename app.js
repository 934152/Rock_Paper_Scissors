/* requirements: 
1. Need inputs for user to select rock, paper, or scissors
2. Computer then needs to select a random action
3. There needs to be a distinction for who won
4. The winner needs to get a point on the scoreboard

*/
//Setup variables
let userScore = 0;
let computerScore = 0;
const userScore_span =  document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.getElementById('result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissors');
const header = document.getElementById('header');
const actions = ["rock","paper","scissors"]

//add eventlistener for header element
/*header.addEventListener("mouseover", function(){
    return alert("Let's play rock, paper, scissors!")
});
*/
//Create game function to compare computerChoice and userChoice
function game(userChoice){
    const computerChoice = computerAction();
    switch (userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
        break;
    }
};

//create functions to determine win, lose, and draw
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice} ${smallUserWord} beats ${computerChoice}${smallCompWord}. You win!`
    
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice} ${smallUserWord} loses to ${computerChoice}${smallCompWord}. You lost.`
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoice} ${smallUserWord} ties ${computerChoice}${smallCompWord}. It's a draw!`
    
}

//computer needs to select an action
function computerAction (){
    let randomNumber = Math.floor(Math.random() * actions.length);
        return actions[randomNumber];
    }

function main(){

//create eventlistener for click on rock, paper, scissor buttons
    rock_div.addEventListener("click", function(){
    game("rock");
    });

    paper_div.addEventListener("click", function(){
        game("paper");
    });

    scissor_div.addEventListener("click", function(){
        game("scissors")
    });

}

main();