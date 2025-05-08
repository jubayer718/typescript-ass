"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
function filterByRating(items) {
    const filteredValue = items.filter((item) => item.rating > 4 || item.rating === 4);
    return filteredValue;
}
function concatenateArrays(...arrays) {
    let concatValue = arrays.reduce((acc, curr) => acc.concat(curr), []);
    return concatValue;
}
const x = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
const y = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
console.log(x, y);
