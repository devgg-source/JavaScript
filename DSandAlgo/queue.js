/* Queues */

class Queue{ 
    collection = [];
    
    //Prints the queue.
    print = ()=> {
        console.log(this.collection);
    };
    
    //Adds the element onto the queue
    enqueue = (element)=> {
        this.collection.push(element);
    };
    
    //Removes and returns the element to the queue
    dequeue = ()=> {
        return this.collection.shift(); 
    };
    
    //Returns front element of the queue
    front = ()=> {
        return this.collection[0];
    };
    
    //Returns size of the queue
    size = ()=> {
        return this.collection.length; 
    };
    
    //Checks whether queue is empty or not and returns result.
    isEmpty = ()=> {
        return (this.collection.length === 0); 
    };
}
