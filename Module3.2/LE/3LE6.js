// 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates.
function unique(duplicatesArray) {
    // Use a Set to store unique values since Sets automatically handle duplicates.
    return [...new Set(duplicatesArray)];
}

// Testing the function with the provided arrays.
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)); 
console.log(unique(testScores)); 

// Test with an additional array.
const animals = ['cat', 'dog', 'fish', 'cat', 'bird', 'dog'];
console.log(unique(animals));


// Without SET
const myNumbers = [55, 84, 97, 63, 55, 32, 84, 91, 55, 0, 43, 0];

function unique(arr) {
    const hasSeen = {};
    const newArr = [];

    arr.forEach((val) => {
        if (hasSeen[val]) {
            return;
        }
        newArr.push(val);
        hasSeen[val] = true;
    });

    return newArr;
}

console.log(unique(myNumbers));