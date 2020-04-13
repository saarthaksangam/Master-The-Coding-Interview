class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}

class Stack {
    constructor(){
        this.array = []
    }
    peek() {
        return this.array[this.array.length-1]

    }
    push(value){
        this.array.push(value)
        return this
    }
    pop(){
        this.array.pop()
        return this
    }
    isEmpty() {
        if(this.array.length === 0) {return "Stack is empty"}
        else {return "Stack is not empty"}
    }
}
 
const myStack = new Stack();
console.log(myStack.isEmpty());

myStack.push('google')
myStack.push('udemy')
myStack.push('discord')

console.log(myStack.peek())
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());

console.log(myStack);
// myStack.pop()
// console.log(myStack)
// console.log(myStack.isEmpty())


  
  
  
  //Discord
  //Udemy
  //google
  