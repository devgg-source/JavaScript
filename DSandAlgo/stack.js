/*  Stack!.. */

class Stack {
 constructor(){    
  this.count = 0;
  this.storage = {};
 }

  //Adds the value onto the end of the stack
  push = (val) => {
    this.storage[this.count] = val;
    this.count++;
  };

  //Removes and returns the value at the end of the stac
  pop = () => {
    if (this.count == 0) return undefined;

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  //Returns size of the stack
  size = () => {
    return this.count;
  };

  //Returns the value at the end of the stack

  peek = () => {
    return this.storage[this.count - 1];
  };
};
