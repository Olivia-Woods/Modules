// JavaScript Map Function

// Introduction
// The Map object in JavaScript is a collection of key-value pairs where both keys and values can be of any type.
// It is a more flexible and powerful alternative to the traditional JavaScript object when you need to use complex keys,
// maintain key order, or perform frequent additions and deletions with optimal performance.

// Creating a Map
const map = new Map();

// Adding Key-Value Pairs
map.set('name', 'Alice');
map.set('age', 25);
map.set(true, 'boolean key');
map.set({ key: 'value' }, 'object key');

console.log('Map size:', map.size); // Map size: 4

// Accessing Values
console.log('Name:', map.get('name')); // Name: Alice
console.log('Age:', map.get('age')); // Age: 25
console.log('Boolean key:', map.get(true)); // Boolean key: boolean key

// Checking for Keys
console.log('Has "name" key:', map.has('name')); // Has "name" key: true
console.log('Has "address" key:', map.has('address')); // Has "address" key: false

// Deleting a Key-Value Pair
map.delete('age');
console.log('Map size after deletion:', map.size); // Map size after deletion: 3

// Iterating Over a Map
// Using for...of loop
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Using forEach method
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Converting Map to Array
const mapArray = Array.from(map);
console.log('Map as an array:', mapArray);

// Converting Array to Map
const array = [['a', 1], ['b', 2], ['c', 3]];
const newMap = new Map(array);
console.log('New map from array:', newMap);

// Clearing a Map
map.clear();
console.log('Map size after clearing:', map.size); // Map size after clearing: 0

// Notes
// - Maps maintain the insertion order of the keys.
// - The size property returns the number of key-value pairs in the Map.
// - Keys in a Map can be of any type, including objects, functions, and primitives.
// - Map methods include set(), get(), has(), delete(), clear(), keys(), values(), and entries().