// JavaScript Object and JSON Manipulation Tasks

// Task 1: Convert JavaScript Object to JSON String
const student = {
    name: 'Olivia',
    age: 26,
    subjects: ['Math', 'Business', 'English'],
    isGraduated: false
};

// Convert to JSON String
const studentJSON = JSON.stringify(student);
console.log("Task 1 - JSON String:", studentJSON);

// The Type of studentJSON is String
console.log("Task 1 - Type of studentJSON:", typeof studentJSON);


// Task 2: Convert JSON String to JavaScript Object
const carJSON = '{"make": "Tesla", "model": "Model X", "year": 2022}';

// Convert to JavaScript Object
const car = JSON.parse(carJSON);
console.log("Task 2 - JavaScript Object:", car);

// Access and Print Car's Make and Model
console.log(`Task 2 - Car Make: ${car.make}, Model: ${car.model}`);


// Task 3: Prevent Circular Reference Error
const room = { number: 101 };
const meeting = { title: 'Project Sync', participants: ['Alice', 'Bob'] };
room.meeting = meeting;
meeting.place = room;

// Function to Remove Circular References
function removeCircularReferences(key, value) {
    const seen = new WeakSet();
    return function(key, value) {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
}

// Convert to JSON String Safely
const safeRoomJSON = JSON.stringify(room, removeCircularReferences());
console.log("Task 3 - JSON String without Circular References:", safeRoomJSON);


// Task 4: Create a Deep Copy of Nested Object
const originalBox = {
    size: 'large',
    dimensions: {
        width: 100,
        height: 50
    },
    contents: ['books', 'clothes', 'toys']
};

// Create a deep copy using JSON.stringify() and JSON.parse()
const deepCopyBox = JSON.parse(JSON.stringify(originalBox));
console.log("Task 4 - Deep Copy of Original Box:", deepCopyBox);