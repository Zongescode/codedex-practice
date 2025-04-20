// Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes.
let questions = "Question: Today its a lucky day?";
console.log(questions);
let number8 = Math.floor(Math.random() * 10);

if (number8 === 1){
    console.log("Magic 8 Ball: Yes - definitely");
} else if (number8 === 2){
    console.log("Magic 8 Ball: It is decidedly so. ");
} else if (number8 ===3 ){
    console.log("Magic 8 Ball: Without a doubt.");

}else if (number8 ===4 ){
    console.log("Magic 8 Ball: Reply hazy, try again. ");
    
}else if (number8 ===5 ){
    console.log("Magic 8 Ball: Ask again later.");
    
}else if (number8 ===6 ){
    console.log("Magic 8 Ball: Better not tell you now. ");
    
}else if (number8 ===7 ){
    console.log("Magic 8 Ball: My sources say no.");
    
}else if (number8 ===8 ){
    console.log("Magic 8 Ball: Outlook not so good. ");
    
}else if (number8 ===9 ){
    console.log("Magic 8 Ball: Very doubtful.");
}else{
    console.log("Oh fortune in not here,give a try again"); // maybe here shoul be a "Reply hazy, try again" but it gonna be reapeat 2 time so i make my own answer
}
