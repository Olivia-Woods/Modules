// Big O Notations Explained

// Constant Time - O(1)
const obj = {
    one: 1,
    two: 2,
};

console.log(obj.one); // O(1)
// Accessing a property of an object takes constant time, O(1), 
// because it does not depend on the size of the object.

// Linear Time - O(n)
const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // O(n) - n stands for the length of the array. Traversing the array one time.
// Iterating through an array takes linear time, O(n), 
// because the time it takes grows linearly with the size of the array.

// Quadratic Time - O(n^2)
const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        console.log(mat[i][j]);
    }
} // O(n^2) - n stands for both the number of rows and columns, assuming rows and columns are the same.
// Iterating through a matrix (a two-dimensional array) takes quadratic time, O(n^2), 
// because you are iterating through both the rows and columns. 
// If the matrix has the same number of rows and columns, the time complexity is O(n^2).

// Summary:
// O(1): Constant time - Operation does not depend on the input size.
// O(n): Linear time - Operation scales linearly with input size.
// O(n^2): Quadratic time - Operation scales quadratically with input size (common in nested loops).