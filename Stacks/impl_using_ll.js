class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
}

class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top

    }
    push(value){
        const new_node = new Node(value)
        if(this.length === 0) {
            this.top = new_node
            this.bottom = new_node
            this.length = 1
        }
        else {
            new_node.next = this.top
            this.top = new_node
            this.length++
            return new_node
        }
    }
    pop(){
        if(this.length === 0) { return "Stack is already empty"}
        if(this.top === this.bottom) { this.bottom = null }
        const deletedNode = this.top

        this.top = this.top.next
        this.length--
        return deletedNode
    }
    isEmpty() {
        if(this.length === 0) {return "Stack is empty"}
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
  