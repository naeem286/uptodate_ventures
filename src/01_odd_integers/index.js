// Given the array of integers, find out which numbers are odd numbers.
//
// For example if our array is 1,3,5,6,8,2,0,11 the result will be 1,3,5,11

exports.oddIntegers = function(data) {
    //TODO implement me
    const oddNumbers = data.filter((number) => number%2!==0);
    console.log(oddNumbers);
    return oddNumbers
}
