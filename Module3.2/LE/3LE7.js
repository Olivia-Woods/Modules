// 7. Array of Book Objects
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

console.log(books)

// a) Function to get book title by bookId.
function getBookTitle(bookId) {
    const book = books.find(b => b.id === bookId); // Time Complexity: Linear Time 
    return book ? book.title : 'Book Not Found';
}

// Testing getBookTitle function.
console.log(getBookTitle(1)); 
console.log(getBookTitle(3)); 
console.log(getBookTitle(6)); 

// b) Function to get all books written before 1950.
function getOldBooks() {
    return books.filter(b => b.year < 1950);
}

// Testing getOldBooks function.
console.log(getOldBooks());

// c) Function to add genre property to all books. Shallow Copy...
function addGenre() {
    return books.map(b => ({ ...b, genre: 'Classic' }));
}

// Testing addGenre function.
console.log(addGenre());

// d) Function to get book titles by author initial.
function getTitles(authorInitial) {
    return books
        .filter(b => b.author.startsWith(authorInitial))
        .map(b => b.title);
}

// Testing getTitles function.
console.log(getTitles('F')); // Output: ['The Great Gatsby']
console.log(getTitles('H')); // Output: ['To Kill a Mockingbird']
console.log(getTitles('J')); // Output: ['The Catcher in the Rye']

// e) Function to find the latest book.
function latestBook() {
    return books.reduce((latest, book) => (book.year > latest.year ? book : latest), books[0]);
}

// Testing latestBook function.
console.log(latestBook());
// Output: { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }