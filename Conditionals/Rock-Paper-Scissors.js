// Rock Paper Scissors game
/*Rock beats Scissors.
Scissors beat Paper.
Paper beats Rock.*/
let player = 0; // 0 to represent "Rock", a 1 to represent "Paper", or a 2 to represent "Scissors."
let computer = Math.floor(Math.random()*3);
console.log(computer);
if (player === 0 && computer === 0){
    console.log(`Player picked: Rock`);
    console.log(`Computer picked: Rock`);
    console.log("Draw,do it again");
}else if (player === 1 && computer === 1){
    console.log(`Player picked: Paper`);
    console.log(`Computer picked Paper`);
    console.log("Draw,do it again")
}else if (player === 2 && computer === 2){
    console.log(`Player picked: Scissors`);
    console.log(`Computer picked Scissors`);
    console.log("Draw,do it again")
}else if (player === 0 && computer === 1){
    console.log(`Player picked: Rock`);
    console.log(`Computer picked Paper`);
    console.log('The Computer won!');
}else if (player === 1 && computer === 0){
    console.log(`Player picked: Paper`);
    console.log(`Computer picked Rock`);
    console.log('The Player won!');
}else if (player === 2 && computer === 1){
    console.log(`Player picked: Scissors`);
    console.log(`Computer picked Paper`);
    console.log('The Player won!');
}else if (player === 2 && computer === 0){
    console.log(`Player picked: Scissors`);
    console.log(`Computer picked Rock`);
    console.log('The Computer won!');
}else if (player === 1 && computer === 2){
    console.log(`Player picked: Paper`);
    console.log(`Computer picked Scissors`);
    console.log('The Computer won!');
}else if (player === 0 && computer === 2){
    console.log(`Player picked: Rock`);
    console.log(`Computer picked Scissors`);
    console.log('The Player won!');
}else if (player === 0 && computer === 2){
    console.log(`Player picked: Rock`);
    console.log(`Computer picked Scissors`);
    console.log('The Player won!');
}
