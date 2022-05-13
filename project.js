let player = 'Player'
let player2 = 'Player 2'
const Rock = 'Rock'
const Scissor = 'Scissor'
const Paper = 'Paper'
const Boulder = 'Boulder' 
let loaded = true
let isGameover = false
const playBtn = document.getElementById('playBtn')
const resetBtn = document.getElementById('reset')
const randomChoice = ['Rock', 'Paper', 'Scissor', 'Boulder']
const generateVar = Math.floor(Math.random()*randomChoice.length)
const generateVar2 = Math.floor(Math.random()*randomChoice.length)

//!---------------------------------Generating random game variable and tying to Player 1----------------------------------------------------
function player1Game(){
    player = randomChoice[generateVar]
    console.log(generateVar);
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
}}
//!------------------------------------Generating a random game variable and tying to Player 2 ---------------------------------------------------
function player2Game(){
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
}}
//!-------------------------------------------The Event Listener for Player---------------------------------------------------------
function Game1(){
    if(player === player2){
        console.log('Tie');
        isGameover = true
        alert(`Tie`)
    }
    else if(player ===  randomChoice[0] && player2 === randomChoice[1]){
        console.log(`Player 2 wins`);
        isGameover = true
        alert(`Player 2 Wins by Paper`)
    }
    else if(player === randomChoice[0] && player2 === randomChoice[2]){
        console.log(`Player 1 Wins`);
        isGameover = true
        alert(`Player 1 Wins by Rock`)
    }
    else if(player == randomChoice[0] && player2 === randomChoice[3]){
        console.log(`Player 2 wins`);
        isGameover = true
        alert(`Player 2 Wins by Boulder`)
    }  
    else if(player ===  randomChoice[1] && player2 === randomChoice[0]){
        console.log(`Player 1 wins`);
        isGameover = true
        alert(`Player 1 Wins by Paper`)
    } 
    else if(player ===  randomChoice[1] && player2 === randomChoice[2]){
        console.log(`Player 2 wins`);
        isGameover = true
        alert(`Player 2 Wins Scissors`)
    }    
    else if(player ===  randomChoice[1] && player2 === randomChoice[3]){
        console.log(`Player 2 wins`);
        isGameover = true
        alert(`Player 2 Wins by Boulder`)
    }    
    else if(player ===  randomChoice[2] && player2 === randomChoice[0]){
        console.log(`Player 2 wins`);
        isGameover = true
        alert(`Player 2 Wins by Rock`)
    }    
    else if(player ===  randomChoice[2] && player2 === randomChoice[1]){
        console.log(`Player 2 wins`);
        isGameover = true
        alert(`Player 2 Win by Paper`)
    }    
    else if(player ===  randomChoice[2] && player2 === randomChoice[3]){
        console.log(`Player 2 wins`);
        isGameover = true
        alert(`Player 2 Wins by Boulder`)
    }
    else if(player ===  randomChoice[3] && player2 === randomChoice[0]){
        console.log(`Player 1 Wins`);
        isGameover = true
        alert(`Player 1 Wins by Boulder`)
    }    
    else if(player ===  randomChoice[3] && player2 === randomChoice[1]){
        console.log(`Player 1 Wins`);
        isGameover = true
        alert(`Player 1 Wins by Boulder`)
    }    
    else if(player ===  randomChoice[3] && player2 === randomChoice[2]){
        console.log(`Player 1 Wins`);
        alert(`Player 1 Wins by Boulder`)
        isGameover = true
    }    
}
Game1()
//!------------------------------------------------Buttons---------------------------------------------
playBtn.addEventListener('click', function pleaseWork(){
     if(isGameover === false){
         player1Game()
         player2Game()
         Game1()
     } else{
         console.log('Game Over!');
     }       
}) 

resetBtn.addEventListener('click', function (){
    location.reload()
    }
)
