// Set ensures that no duplicates are allowed

// Create a Set with the names of your classmates
const classmates = new Set(['Alice', 'Bob', 'Charlie', 'Alice', 'Dave'])

// Check how many unique classmates you have
console.log(classmates.size) 
// Note: Sets automatically remove duplicate values, so 'Alice' is only counted once

// Add a new classmate to the Set
classmates.add('Eve')

// Check if 'Charlie' is in the Set
console.log(classmates.has('Charlie')) 

// Remove 'Alice' from the Set
classmates.delete('Alice')

// Bonus Task: Iterate through the Set using for..of
console.log('Using for..of:')
for (const classmate of classmates) {
    console.log(classmate)
}

// Bonus Task: Iterate through the Set using forEach()
console.log('Using forEach():')
classmates.forEach(classmate => {
    console.log(classmate)
})