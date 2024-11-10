// 2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. 
// It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.

function truncate(str, max) {
    // Check if the string length is greater than the maximum length.
    if (str.length > max) {
      // Truncate the string and add an ellipsis.
      return str.slice(0, max - 3) + '...';
    } else {
      // Return the original string if it's not too long.
      return str;
    }
  }
  
// Testing the function with different strings.
  console.log(truncate('This text will be truncated if it is too long', 30)); 
  console.log(truncate('Hello my name is Olivia', 5)); 
  // The number equals the number of characters allowed.

// a) Write another variant of the truncate function that uses a conditional operator.

function truncateConditional(str, max) {
    // Use the conditional operator to return the truncated string or the original string.
    return str.length > max ? str.slice(0, max - 3) + '...' : str;
  }
  
  // Testing the function with different strings.
  console.log(truncateConditional('This text will be truncated if it is too long', 25));
  console.log(truncateConditional('Hello', 25)); 