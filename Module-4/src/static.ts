class Counter {
  static count: number;

  //No need constructor for static property
  // constructor(count: number){
  //     this.count = count
  // }

  static increment(): number {
    return (Counter.count = Counter.count + 1);
  }

  static decrement(): number {
    return (Counter.count = Counter.count - 1);
  }
}

console.log(Counter.increment()); // initial=0, current=1
console.log(Counter.increment()); // previous=1, current=2
