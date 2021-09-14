// 2-6. implement the data structure queue as an object literal

let q = {
  // data properties to hold the content of the queue
  content: [],

  enqueue(elem) {
    // add 'elem' at the end of queue
    this.content.push(elem);
  },
  dequeue() {
    // remove the element at the head of queue, and return the element
    if (this.content.length==0) {
      console.log('Cannot dequeue from empty queue');
      return;
    }
    return this.content.shift();
  },
  count() {
    // returns the number of elements in the queue
    return this.content.length;
  },
  toString() {
    // return the content of the queue as string
    return `<< ${this.content.join(', ')} <<`;
  }
};

q.enqueue('a'); q.enqueue('b'); q.enqueue('c');
console.log( q.dequeue() ); // print 'a'
console.log( q.count() );   // print 2
q.enqueue('d');
console.log(`The queue contains ${q}.`);