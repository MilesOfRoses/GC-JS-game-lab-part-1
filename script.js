//"use an if statement in the while loop. 
//Avoid nested loops because it exponentially increases the nuber of steps the program needs to run"

//new idea: have a funciton for each round, and call that function 3 times within the loop 
//unless the user dies in one of the rounds

//prompt user for game begin
let begin = prompt("Do you want to play? if so, type 'yes' ");

if (begin == "yes" || begin == "Yes" || begin == "YES" ) { //check different ways of typing 'yes' 
    let name = prompt("What is your name?");
    let userHP = 35;
    let botHP = 10;
    let userWins = 0; //keeps track of the user's wins

    function getRandomInteger(){
        let randomDamageHP = Math.random() * (+2 - +1) + +1; //get a random (float) number between 1 and 2
        let damageRounded = Math.round(randomDamageHP); //round that random float to a integer, 2 or 1
        return damageRounded;
    }

    while ( userWins < 3 ) { // loop runs until the user has won 3 times
        console.log(`${name} has ${userHP} health points left.`); 
        console.log(`Grant the Mighty Chicken has ${botHP} health points left.`);
        userHP -= getRandomInteger(); //subtract user's health by 1 or 2 randomly
        botHP -= getRandomInteger(); //subtract bot's health by 1 or 2 randomly
        
        if (userHP <= 0 && botHP <= 0){ //if they're both dead, it's a tie and the game ends
            console.log(`This round was a tie! ${name} had ${userHP} HP remaining, and Grant the Mighty Chicken had ${botHP} HP remaining.`)
            break;
        } else if (botHP <= 0 ) { //checks if the bot is dead
            console.log(`${name} won this round with ${userHP} HP remaining. Grant the Mighty Chicken had ${botHP} HP remaining`);
            userWins += 1;
            botHP = 10; //resets the bot's HP for the next round
        } else if (userHP <=0) { //checks if the user is dead
            console.log(`Grant the Mighty Chicken won this round with ${botHP} HP remaining. ${name} had ${userHP} HP remaining`)
            break;
        }
    }

    if ( userHP > 0 ) { //The game is over, check who won
        console.log(`Game over! ${name} won!`)
    } else if (botHP > 0 ) {
        console.log("Game over! Grant the Mighty Chicken won!")
    } else {
        console.log("Game over! it was a tie!")
    }

} else {
    console.log("You did not type 'yes' so nothing happens. Refresh the screen if you want to play!");
}
