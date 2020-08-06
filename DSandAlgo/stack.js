/*  Stack!.. */

var Stack = () => {
  this.count = 0;
  this.storage = {};

  //Adds the value onto the end of the stack
  this.push = (val) => {
    this.storage[this.count] = val;
    this.count++;
  };

  //Removes and returns the value at the end of the stac
  this.pop = () => {
    if (this.count == 0) return undefined;

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  //Return size of the stack
  this.size = () => {
    return this.count;
  };

  //Returns the value at the end of the stack

  this.peek = () => {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.peek();
