// 2-2. fibonacci numbers

const n = 10;
let fib = [ ];

// the first two fibonacci numbers are 0 and 1
fib.push(0);
fib.push(1);

// in each step, calculate the fib number at this pos 
for (let pos = 2; pos<n; pos++) {
    fib.push(fib[pos-1]+fib[pos-2]);
}

console.log(fib);

// fib should contain [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]