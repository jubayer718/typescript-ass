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
console.log(filterByRating([
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
]));
