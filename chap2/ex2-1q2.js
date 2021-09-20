// 2-1. draw empty square, ascii art
// note: this program only works for n>=2

let s = window.prompt('Enter size of the square');
/* convert the input string into a number */
let n = parseInt(s);

/* build a line with n stars */
let topAndBottom = '';
for (let i=0; i<n; i++) { topAndBottom += '* '; }
/* build a line with 1 star, n-2 space, and 1 star */
let middle = '* ';
for (let i=0; i<n-2; i++) { middle += '  '; }
middle = middle + '* ';

/* build a square with n lines */
let sqr = '';
sqr = sqr + topAndBottom + '\n';
for (let i=0; i<n-2; i++) { sqr = sqr + middle + '\n';}
sqr = sqr + topAndBottom + '\n';
console.log(sqr);