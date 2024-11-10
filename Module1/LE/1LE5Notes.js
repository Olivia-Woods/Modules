// 1. Adding Elements using push() - Adds an element to the end of the array.
let seas = ['Black Sea', 'Caribbean Sea', 'Baltic Sea'];
console.log('Initial seas:', seas); // [ 'Black Sea', 'Caribbean Sea', 'Baltic Sea' ]

seas.push('Red Sea');
console.log('After push:', seas); // [ 'Black Sea', 'Caribbean Sea', 'Baltic Sea', 'Red Sea' ]

// 2. Adding Elements using unshift() - Adds an element to the beginning of the array.
seas.unshift('Adriatic Sea');
console.log('After unshift:', seas); // [ 'Adriatic Sea', 'Black Sea', 'Caribbean Sea', 'Baltic Sea', 'Red Sea' ]

// 3. Removing Elements using pop() - Removes the last element from the array.
let rivers = ['Mississippi', 'Amazon', 'Nile'];
let lastRiver = rivers.pop();
console.log('Last river removed (pop):', lastRiver); // Nile
console.log('Remaining rivers after pop:', rivers); // [ 'Mississippi', 'Amazon' ]

// 4. Removing Elements using shift() - Removes the first element from the array.
let firstRiver = rivers.shift();
console.log('First river removed (shift):', firstRiver); // Mississippi
console.log('Remaining rivers after shift:', rivers); // [ 'Amazon' ]

// 5. Finding Index using indexOf() - Finds the index of a specific element.
let volcanoes = ['Mount Vesuvius', 'Mount Etna', 'Mount Fuji'];
let fujiIndex = volcanoes.indexOf('Mount Fuji');
console.log('Index of Mount Fuji:', fujiIndex); // 2

// 6. Finding Length using length - Gets the number of elements in the array.
let numVolcanoes = volcanoes.length;
console.log('Number of volcanoes:', numVolcanoes); // 3