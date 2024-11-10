// Exercise 5 Arrays

// Create Array with 5 Elements
let fruits = ['Avocado', 'Banana', 'Grape', 'Mango', 'Orange'];
console.log('Initial Fruits:', fruits);

// Replace Position 1 and 4
fruits[1] = 'Blueberry';
fruits[4] = 'Olive';
console.log('After Replacement:', fruits);

// Add Element to Beginning 
fruits.unshift('Apple')
console.log('After Adding Element to Beginning:', fruits);

// Remove End Element 
let lastFruits = fruits.pop();
console.log('Last Fruit Removed:', fruits);

// Print Array to Console 
console.log('Final Fruits:', fruits);