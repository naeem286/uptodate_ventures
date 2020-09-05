// Given the array of integers, replace every element with it's neighbouring numbers, then find the duplicate numbers
// and sum them up. It is guaranteed that provided integers are unique, which means they will not repeat.
// 
// For example for the input: -3,5,8,-1,6,11
// resulting array after replacement would be -4,-2,4,6,7,9,-2,0,5,7,10,12 and duplicate numbers are -2,7 and the 
// result will be 5.

exports.overlappingSpreads = function(data) {
    //TODO implement me
    var arr = [];
    for (x of data) {
        arr.push(x - 1);
        arr.push(x + 1);
    }
    var object = {};
    var result = [];

    // Counts number of items an item repeats in the array
    arr.forEach(function (item) {
        if (!object[item]) object[item] = 0;
        object[item] += 1;
    });

    // Checks for duplicate item
    for (var prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }

    // Sums up duplicate values in the array
    var sum = 0;
    for (y of result) {
        sum += Number(y);
    }
    console.log(sum);
    return sum;
}
