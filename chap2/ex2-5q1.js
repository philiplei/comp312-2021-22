let N = [ 32, 53, 42, 25, 48, 10 ];

let a1 = N.map( (n)=>{ return n.toString(16); } );
/* alternative solutions */
let a1 = N.map( (n)=>n.toString(16) );
let a1 = N.map( function(n) { return n.toString(16); } );

let a2 = N.filter( (n)=> { return (n>=20)&&(n<=40); } );

let a3 = N.filter( (n)=> { return (n%2==0) } ).length;

let a4 = N.reduce( (a,b)=>{ return (a+b); } );
