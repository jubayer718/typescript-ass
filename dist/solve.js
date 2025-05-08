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
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
console.log(processValue(22));
