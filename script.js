/*Rock, Paper, Scissors game
Requirements: 
1. Need to input the user action
2. Need a way to hold the moves/actions - Array?
3. Need a random method for pick which move/action to make
4. Need to display the randomly picked move/action
5. Need a way to know if computer or user won
6. Need a way to keep score of wins and losses
*/

//This file is only for rock, paper, scissors in the console.

//An array with the list of possible moves
const actions = ['Rock','Paper','Scissors'];

//Request a user action
let request = prompt("Do you want to play a game?");

if (request == "Yes"){
    alert("Ok, let's play!");
// User needs to make a move, we also need to make sure it is a valid move
    let move = prompt("Make your move.");
    switch (move){
        case 'Rock':
// computer needs to select a move            
            computerMove = makeAction()
        break;
        
        case 'Scissors':
            computerMove = makeAction()
        break;

        case 'Paper':
            computerMove = makeAction()
        break;

        default:
            alert('That is not a valid move.')
    };
} else {
    alert("Ok, let me know when you want to play.");
};

//Computer needs to select a random move from the list of actions
function makeAction(){
    let compAction = Math.floor(Math.random() * actions.length);
    let selectAction = actions[compAction]
    return alert(selectAction);
};

/*
function Game(){
    let request = prompt("Do you want to play a game?");
    if (request === 'Yes'){
        console.log('Ok, lets play!');
    } else {
        console.log('Let me know when you want to play');
    }
};
*/




