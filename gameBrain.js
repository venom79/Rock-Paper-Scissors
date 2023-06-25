console.log('Rock Paper Scissors');
let player = document.getElementById('playerChoice')
let computer = document.getElementById('computerChoice');
let playerPick = "";
let computerPick = "";
let winner ;
let html="";
let playerCount = 0;
let computerCount = 0;
let i =1;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function ComputerChoice(){
    const randomChoice = Math.ceil(Math.random()*(4-1) +1)-1;
    if(randomChoice == 1){
        computer.innerHTML = `<img src="./images/rock-emoji.png" alt="">`;
        computerPick = "rock";
    }
    else if(randomChoice == 2){
        computer.innerHTML = `<img src="./images/paper-emoji.png" alt="">`;
        computerPick = "paper";
    }
    else{
        computer.innerHTML = `<img src="./images/scissors-emoji.png" alt="">`;
        computerPick = "scissors";
    }
}

function winnerCheck(){
    if(playerPick === computerPick){
        winner = "tie";
    }
    else if((playerPick == "rock" && computerPick == "scissors") ||
            (playerPick == "paper" && computerPick == "rock") ||
            (playerPick == "scissors" && computerPick == "paper")){
                winner = "player";
                playerCount++
            }
    else{
        winner = "computer";
        computerCount++;
    }
    let result = document.getElementById('result');
    if(winner != "tie"){
    result.innerHTML = `<h1>${winner} wins!</h1>`;
    }
    else{
        result.innerHTML = `<h1>its a tie !</h1>`;
    }

    tableUpdate();
    scoreUpdate();
}

function tableUpdate(){
    let tableBody = document.getElementById('tableBody');
    html +=`<tr>
                <td>${i++}</td>
                <td>${playerPick}</td>
                <td>${computerPick}</td>
                <td>${winner}</td>
            </tr>`;
    tableBody.innerHTML = html;
}    

function scoreUpdate(){
    let playerScore = document.getElementById('playerScore');
    let computerScore = document.getElementById('computerScore');
    if(winner == "player"){
        playerScore.innerHTML = `<h3 class="scoreCount">${playerCount}</h3>`
    }
    else{
        computerScore.innerHTML = `<h3 class="scoreCount">${computerCount}</h3>`
    }
}

rock.addEventListener('click',()=>{
    ComputerChoice();
    playerPick = "rock";
    player.innerHTML = `<img src="./images/rock-emoji.png" alt="">`;
    winnerCheck();
})    
paper.addEventListener('click',()=>{
    ComputerChoice();
    playerPick = "paper";
    player.innerHTML = `<img src="./images/paper-emoji.png" alt="">`;
    winnerCheck();
})    
scissors.addEventListener('click',()=>{
    ComputerChoice();
    playerPick = "scissors";
    player.innerHTML = `<img src="./images/scissors-emoji.png" alt="">`;
    winnerCheck();
})    


let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    document.location.reload();
})

let history = document.getElementById('history');
history.addEventListener('click',()=>{
    let table = document.getElementById('table');
    let classes = table.classList;

    if(classes[1]=='unvisible'){ 
        history.innerHTML = `Hide`;
        table.classList.remove('unvisible')
    }
    else{
        history.innerHTML = `History`;
        table.classList.add('unvisible')
    }
})