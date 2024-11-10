// JSON String (In Quotes, Making It A String)
let bookJSON = `{
    "title": "Olivia's Book",
    "description": "Exercise 6: Creating a JSON object variable for a book as part of coding practice.",
    "author": "Olivia Woods",
    "pages": 100
}`;

// Convert JSON String to JavaScript Object
let book = JSON.parse(bookJSON);

// Print Entire Book to Console 
console.log(book);

// Print Book Objects to Console
console.log(book.title);      
console.log(book.description); 
console.log(book.author);      
console.log(book.pages); 

// Update Description of Book
book.description = "A Revised Description: Learning JSON and JavaScript Objects.";

// Print the Updated Description to Console
console.log(book.description);