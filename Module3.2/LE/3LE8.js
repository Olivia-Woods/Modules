// 8. Creating a phone book for names beginning with A, B, or C.
const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

// a) Create a new phoneBookDEF Map for names beginning with D, E, or F.
const phoneBookDEF = new Map();

// b) Initialise the contents of phoneBookDEF.
const defEntries = [
    ['David', '0467334455'],
    ['Ella', '0478445566'],
    ['Frank', '0489556677']
];
phoneBookDEF.set('David', '0467334455');
phoneBookDEF.set('Ella', '0478445566');
phoneBookDEF.set('Frank', '0489556677');

// c) Update the phone number for Caroline.
phoneBookABC.set('Caroline', '0455221199'); // Update Caroline's number

// d) Function to print names and phone numbers in the given Map.
function printPhoneBook(contacts) {
    for (let [name, number] of contacts) {
        console.log(`${name}: ${number}`);
    }
}

// Testing the printPhoneBook function.
console.log("Phone Book ABC:");
printPhoneBook(phoneBookABC);

console.log("\nPhone Book DEF:");
printPhoneBook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map.
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f) Print out the full list of names in the combined phone book.
console.log("\nCombined Phone Book:");
printPhoneBook(phoneBook);