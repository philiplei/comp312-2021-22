// 2-2. find largest number in an array of number

let num = [32, 15, 20, 41, 2, 39];
let largestSoFar = num[0];
for (let k of num) {
    // compare k with largestSoFar
    if (k>largestSoFar) {
        largestSoFar = k
    }
}
console.log(largestSoFar);