class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first.value
    }
    enqueue(value){
        const newNode = new Node(value)
        if(!this.last) {
            this.first = newNode
            this.last = newNode
        }
        else { 
            this.last.next = newNode
            this.last = newNode
        }
        this.length++

        return this
    }
    dequeue(){
        if(!this.first){ 
            return "Queue is empty"
        }
        if(this.first === this.last){
            this.last = null
        }
        
        this.first = this.first.next
        this.length--
        
        return this

    }
    //isEmpty;
}
  
const myQueue = new Queue();
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
console.log(myQueue);
myQueue.dequeue()
console.log(myQueue);
console.log(myQueue.peek());


  
  
  //Joy
  //Matt
  //Pavel
  //Samir
  
  