// 2-3. sum of numbers in an array

function sum(num) {
    let ans = 0;
    for (let k of num) { ans += k; }
    return ans;
}
  
let x = [1,2,3,4,5];
let ans = sum(x);
console.log('Correct? ', ans==15);