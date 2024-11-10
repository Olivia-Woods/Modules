// 9. Given the below salaries object;
let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

// a) Function to calculate and return the total of all salaries.
function sumSalaries(salaries) {
    let total = 0;
    for (let salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}

// b) Function to calculate and return the name of the person earning the highest salary.
function topEarner(salaries) {
    let maxSalary = -Infinity;
    let earner = '';
    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            earner = name;
        }
    }
    return earner;
}

// Testing the functions.
console.log('Total Salaries:', sumSalaries(salaries)); // Total Salaries
console.log('Top Earner:', topEarner(salaries)); // Name of the top earner