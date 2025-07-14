//Spread operator... spreads the elements of an array
//into individual elements. Used for copying, merging, or
//passing to arguments.

//Rest parameters... is used to collect multiple args
//into a single array. Used when you dont know how many
//arguments a function will take.

const removeFromArray = function(array, ...remove) {
    return array.filter((item) => !remove.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
