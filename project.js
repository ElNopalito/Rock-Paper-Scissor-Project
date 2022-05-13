let player = 'Player'
let player2 = 'Player 2'
const Rock = 'Rock'
const Scissor = 'Scissor'
const Paper = 'Paper'
const Boulder = 'Boulder' 
const playBtn = document.getElementById('playBtn')
const playBtn2 = document.getElementById('playBtn2')
const randomChoice = ['Rock', 'Paper', 'Scissor', 'Boulder']
const generateVar = Math.floor(Math.random()*randomChoice.length)
const generateVar2 = Math.floor(Math.random()*randomChoice.length)
//!---------------------------------Generating random game variable and tying to Player 1----------------------------------------------------
player = randomChoice[generateVar]
switch (randomChoice[generateVar]){
    case randomChoice[0]:
    console.log(Rock);
        break;
    case randomChoice[1]:
    console.log(Paper);
        break;
    case randomChoice[2]:
    console.log(Scissor);
        break;
    case randomChoice[3]:
    console.log(Boulder);
        break;
}
//!------------------------------------Generating a random game variable and tying to Player 2 ---------------------------------------------------
player2 = randomChoice[generateVar2]
switch (randomChoice[generateVar2]){
    case randomChoice[0]:
    console.log(Rock);
        break;
    case randomChoice[1]:
    console.log(Paper);
        break;
    case randomChoice[2]:
    console.log(Scissor);
        break;
    case randomChoice[3]:
    console.log(Boulder);
        break;
}
//!-------------------------------------------The Event Listener for Player---------------------------------------------
playBtn.addEventListener('click', function Game(){
if(player === player2){
    console.log('Tie');
}
else if(player ===  randomChoice[0] && player2 === randomChoice[1]){
    console.log(`Player 2 wins`);
    alert(`Player 2 Wins`)
}
else if(player === randomChoice[0] && player2 == randomChoice[2]){
    console.log(`Player 1 Wins`);
}
else if(player == randomChoice[0] && player2 == randomChoice[3]){
    console.log(`Player 2 wins`);
}
else if(player ===  randomChoice[1] && player2 === randomChoice[0]){
    console.log(`Player 2 wins`);
}
else if(player ===  randomChoice[1] && player2 === randomChoice[2]){
    console.log(`Player 2 wins`);
}    
else if(player ===  randomChoice[1] &&
    player2 === randomChoice[3]){
    console.log(`Player 2 wins`);
}    
else if(player ===  randomChoice[2] && player2 === randomChoice[0]){
    console.log(`Player 2 wins`);
}    
else if(player ===  randomChoice[2] && player2 === randomChoice[1]){
    console.log(`Player 2 wins`);
}    
else if(player ===  randomChoice[2] && player2 === randomChoice[3]){
    console.log(`Player 2 wins`);
}
else if(player ===  randomChoice[3] && player2 === randomChoice[0]){
    console.log(`Player 1 Wins`);
}    
else if(player ===  randomChoice[3] && player2 === randomChoice[1]){
    console.log(`Player 1 Wins`);
}    
else if(player ===  randomChoice[3] && player2 === randomChoice[2]){
    console.log(`Player 1 Wins`);
}    
})
//!------------------------------------------------The Event Listener for Player 2--------------------------------------------------------------
playBtn2.addEventListener('click', function Game2(){
if(player2 === player){
    console.log('Tie');
}
else if(computer === randomChoice[0] && player === randomChoice[1]){
    console.log(`Player 1 Wins`);
}
else if(computer === randomChoice[0] && player === randomChoice[2]){
    console.log(`Player 2 wins`);
}
else if(computer === randomChoice[0] && player === randomChoice[3]){
    console.log(`Player 1 Wins`);
}
else if(player2 === randomChoice[1] &&  player === randomChoice[0]){
    console.log(`Player 2 wins`);
}
else if(computer === randomChoice[1] && player === randomChoice[2]){
    console.log(`Player 1 Wins`);
}
else if(player2 === randomChoice[1] &&  player === randomChoice[3]){
    console.log(`Player 1 Wins`);
}
else if(player2 === randomChoice[2] &&  player === randomChoice[0]){
    console.log(`Player 1 Wins`);
}
else if(player2 === randomChoice[2] &&  player === randomChoice[1]){
    console.log(`Player 2 wins`);
}
else if(player2 === randomChoice[2] &&  player === randomChoice[3]){
    console.log(`Player 1 Wins`);
}
else if(player2 === randomChoice[3] &&  player === randomChoice[0]){
    console.log(`Player 2 wins`);
}
else if(player2 === randomChoice[3] &&  player === randomChoice[1]){
    console.log(`Player 2 wins`);
}
else if(player2 === randomChoice[3] &&  player === randomChoice[2]){
    console.log(`Player 2 wins`);
}
})





