// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access 
// and print to the console each of those object properties and their values. Test it using the sydney object below.
// b) Create a new object for a different city with different properties and call your function again with the new object.

// Placing the function declaration at the top of the script helps avoid errors and improves the logical flow of the code.
// Function to Print
function printCityInfo(city) { // Iterate over each property in the city object.
    for (const property in city) { // Check if the property is a direct property of the city object (not inherited).
        if (city.hasOwnProperty(property)) { // Print the property name and its corresponding value.
            console.log(`${property}: ${city[property]}`);
        }
    }
}

// Sydney Object
const sydney = {
Name: 'Sydney',
Population: 5_121_000,
State: 'NSW',
Founded: '26 January 1788',
Timezone: 'Australia/Sydney'
}

// Call the function with the Sydney object to print its information.
console.log("Sydney Information:");
printCityInfo(sydney);

// New City Melbourne
const melbourne = {
    Name: 'Melbourne',              
    Population: 5_061_000,         
    State: 'VIC',                 
    Founded: '30 August 1835',     
    Timezone: 'Australia/Melbourne' 
};

// Call the function with the Melbourne object to print its information.
console.log("\nMelbourne Information:");
printCityInfo(melbourne);