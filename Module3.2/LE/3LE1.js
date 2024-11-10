// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter.

// Test it with different strings.

function ucFirstLetters(str) {
  // Split the string into an array of words.
  let words = str.split(" ");

  // Map over each word in the array.
  let capitalizedWords = words.map(word => {
    // Capitalize the first letter of each word and concatenate it with the rest of the word.
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the array of capitalized words back into a single string.
  return capitalizedWords.join(" ");
}

// Testing the function with different strings.
console.log(ucFirstLetters("western australia"));
console.log(ucFirstLetters("hello olivia")); 