// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works.
// b) Add a new method to print the full time final score.
// c) Add a new object property to keep track of the number of fouls and a method to increment it, similar but separate to the score. 
// Include the foul count in the half time and full time console messages.
// d) Test your object by chaining all the method calls together in different combinations.

const basketballGame = {
    score: 0, // Total score of the game.
    fouls: 0, // Total number of fouls committed.
    
    // Increment score by 1 for a free throw.
    freeThrow() {
        this.score++; // Increase score by 1 using ++ operator (increment operator).
        return this; // Return the object for chaining.
    },
    
    // Increment score by 2 for a basket.
    basket() {
        this.score += 2; // Increase score by 2.
        // The += operator takes the current value of the variable and adds the value on the right side of the operator to it.
        return this; // Return the object for chaining.
    },
    
    // Increment score by 3 for a three-pointer.
    threePointer() {
        this.score += 3; // Increase score by 3.
        return this; // Return the object for chaining.
    },
    
    // Increment the foul count by 1.
    foul() {
        this.fouls++; // Increase fouls by 1 (using ++ operator).
        return this; // Return the object for chaining.
    },

    // Print halftime score and fouls.
    halfTime() {
        console.log('Halftime score is ' + this.score + ', fouls: ' + this.fouls);
        return this; // Return the object for chaining.
    },
    
    // Print the final score and fouls.
    finalScore() {
        console.log('Final score is ' + this.score + ', fouls: ' + this.fouls);
        return this; // Return the object for chaining.
    }
};

// Testing Scores by Chaining Method Calls Together
basketballGame
    .basket()         // Score: +2 points for a basket (Total: 2)
    .freeThrow()      // Score: +1 point for a free throw (Total: 3)
    .freeThrow()      // Score: +1 point for another free throw (Total: 4)
    .basket()         // Score: +2 points for another basket (Total: 6)
    .threePointer()   // Score: +3 points for a three-pointer (Total: 9)
    .foul()           // Foul count: +1 foul (Total fouls: 1)
    .halfTime()       // Output halftime score: 9 points and 1 foul.
    .threePointer()   // Score: +3 points for a three-pointer after halftime (Total: 12)
    .foul()           // Foul count: +1 foul (Total fouls: 2)
    .finalScore();    // Output final score: 12 points and 2 fouls. 
    // Final score combines scores from halftime and additional points.