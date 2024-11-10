// Handling Decimal Operations Safely with Factors

const DECIMAL_PLACES = 2;

// Part B: Safe Addition Function
function currencyAddition(float1, float2) {
    const factor = Math.pow(10, DECIMAL_PLACES); // Factor for scaling
    const sum = (float1 * factor + float2 * factor) / factor; // Perform addition after scaling
    return parseFloat(sum.toFixed(DECIMAL_PLACES)); // Format the result to 2 decimal places
}

// Testing currencyAddition with additional values
console.log(0.3 == currencyAddition(0.1, 0.2)); // Expected output: true
console.log(currencyAddition(0.1, 0.2)); // Expected output: 0.3
console.log(currencyAddition(0.25, 0.15)); // Expected output: 0.40

// Part C: Safe Operation Function
function currencyOperation(float1, float2, operation) {
    const factor = Math.pow(10, DECIMAL_PLACES); // Factor for scaling
    let result;

    switch (operation) {
        case '+':
            result = (float1 * factor + float2 * factor) / factor; // Addition
            break;
        case '-':
            result = (float1 * factor - float2 * factor) / factor; // Subtraction
            break;
        case '*':
            result = (float1 * factor * float2) / (factor * factor); // Multiplication
            break;
        case '/':
            result = float2 !== 0 ? (float1 * factor) / (float2 * factor) : NaN; // Division
            break;
        default:
            console.error("Invalid operation. Choose from '+', '-', '*', or '/'");
            return NaN;
    }
    return parseFloat(result.toFixed(DECIMAL_PLACES)); // Return with 2 decimal places
}

// Testing currencyOperation with additional values
console.log(0.3 == currencyOperation(0.1, 0.2, '+')); // Expected output: true
console.log(currencyOperation(0.25, 0.15, '+')); // Expected output: 0.40
console.log(currencyOperation(0.3, 0.1, '-')); // Expected output: 0.20
console.log(currencyOperation(0.1, 0.2, '*')); // Expected output: 0.02
console.log(currencyOperation(0.2, 0.1, '/')); // Expected output: 2.00