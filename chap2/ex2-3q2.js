// 2-3. generate an array of odd numbers

function odd (upper) {
    let ans = [];
    let k = 1;
    while (k<=upper) {
        ans.push(k);
        k = k+2;
    }
    return ans;
}

let a = odd(1);
console.log(a); // should print [1]
console.log(odd(9)); // should print [1,3,5,7,9]
console.log(sum(odd(10*2-1))); // should print 100
