//"use an if statement in the while loop. 
//Avoid nested loops because it exponentially increases the nuber of steps the program needs to run"

//new idea: have a funciton for each round, and call that function 3 times within the loop 
//unless the user dies in one of the rounds

//prompt user for game begin
let begin = prompt("Do you want to play? if so, type 'yes' ");

if (begin == "yes") { 
    let name = prompt("What is your name?");

    let userHP = 40;
    let botHP = 10;
    let userWins = 0; //keeps track of the user's wins

    function getRandomInteger(){
        let randomDamageHP = Math.random() * (+2 - +1) + +1; //get a random (float) number between 1 and 2
        let damageRounded = Math.round(randomDamageHP); //round that random float to a integer
        return damageRounded;
    }

    while ( userWins < 3 ) { // loop runs as long as the user has less than 3 wins
        console.log(`${name} HP = ${userHP}`); 
        console.log(`Bot HP = ${botHP}`);
        userHP -= getRandomInteger(); //subtract user's health by random rounded number
        botHP -= getRandomInteger(); //subtract bot's health by random rounded number
        
        
        if (userHP <= 0 && botHP <= 0){ //if ther're both dead, it's a tie and the game ends
            console.log(`This round was a tie! ${name} has ${userHP} HP remaining, and bot has ${botHP} HP remaining.`)
            break;
        } else if (botHP <= 0 ) { //checks if the bot is dead
            console.log(`${name} won this round with ${userHP} HP remaining. the bot had ${botHP} HP remaining`);
            userWins += 1;
            botHP = 10;
        } else if (userHP <=0) { //checks if the user is dead
            console.log(`bot won this round with ${botHP} HP remaining. ${name} had ${userHP} HP remaining`)
            break;
        }
    }

    if ( userHP > 0 ) { //chech who won the game
        console.log(`Game over! ${name} won!`)
    } else if (botHP > 0 ) {
        console.log("Game over! The bot won!")
    } else {
        console.log("Game over! it was a tie!")
    }

} else {
    console.log("You did not type 'yes' so nothing happens. Refresh the screen if you want to play!")
}
