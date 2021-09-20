// 2-2. matrix inverse

let mat = [ 
    [ 1, 0 ],
    [-1, 3 ]
];

let [ [a,b], [c,d] ] = mat;
let inv;  // inverse of mat

const det = a * d - b * c;
if (det==0) {
    console.log("The matrix has no inverse");
} else {
    inv = [
      [  d/det, -b/det],
      [ -c/det,  a/det]  
    ];
    console.log(`The inverse of the matrix is ${inv}`);
}