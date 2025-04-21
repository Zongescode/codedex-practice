// my luckyNumber

const luckyNumber = 5
let guees = Math.floor(Math.random()*10) +1;
while (guees != 5){
    console.log(`Nope, it isn't ${guees}`);
    guees = Math.floor(Math.random()*10) +1;

}
console.log(`My lucky number is ${guees}`);

