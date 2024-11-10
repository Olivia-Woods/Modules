// JSON String Array (In Quotes, Making It a String)
let booksJSON = [
    `{
        "title": "Olivia's Book",
        "author": "Olivia Woods",
        "pages": 100
    }`,
    `{ 
        "title": "Olivia's Book: Part 1",
        "author": "Olivia Woods",
        "pages": 80
    }`,
    `{ 
        "title": "Olivia's Book: Part 2",
        "author": "Olivia Woods",
        "pages": 60
    }`,
    `{ 
        "title": "Olivia's Book: Part 3",
        "author": "Olivia Woods",
        "pages": 40
    }`,
    `{ 
        "title": "Olivia's Book: Part 4",
        "author": "Olivia Woods",
        "pages": 20
    }`
    ];
    
    // Convert the Array of JSON Strings into JavaScript Objects
    let books = booksJSON.map(bookString => JSON.parse(bookString));
    
    // Print Entire Array of Book Objects to Console 
    console.log(books);
    
    // Print Individual Book Details
    books.forEach((book, index) => {
        console.log(`Book ${index + 1}:`);
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Pages: ${book.pages}`);
    });
