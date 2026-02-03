let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    losses: 0,
    ties: 0
}
updateScore();
function pick(){
    let move='';
    const n=Math.random();
    if(n<1/3) move='rock';
    else if (n<2/3) move='paper';  
    else move='scissors';
    return move;
}
function playGame(s){
    let move=pick();
    let result='';
    if(move==s) result='Tie.';
    else if((move=='rock' && s=='paper') ||
    (move=='paper' && s=='scissors') ||
    (move=='scissors' && s=='rock')) result='You win.';
    else result='You lose.';
    if(result=='Tie.') score.ties++;
    else if(result=='You win.') score.wins++;
    else score.losses++;
    localStorage.setItem('score',JSON.stringify(score));
    updateResult(result);
    updateScript(s,move);
    updateScore();
}
function updateScore(){
    document.querySelector('.score')
    .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function updateScript(s,move){
    document.querySelector('.moves')
    .innerHTML=`You <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${s}-emoji.png"> 
    <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${move}-emoji.png"> 
    Computer`;
}
function updateResult(result){
    document.querySelector('.result')
    .innerHTML=result;
}
