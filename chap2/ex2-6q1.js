// 2-6. point and quadrant

let point = {
  x: -2,
  y: 3,
  toString() { return `(${this.x},${this.y})` },
  quadrant() { 
    /* your work */ 
    if (this.x >=0) {
      return (this.y >= 0) ? 'I' : 'IV';
    } else {
      return (this.y >= 0) ? 'II' : 'III';
    }
  }
};
// prints "The point (-2,3) is in quadrant IV"
console.log(`The point ${point} is in quadrant ${point.quadrant()}`);
