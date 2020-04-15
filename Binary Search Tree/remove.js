class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      //Code here
      const newNode = new Node(value)
      if(!this.root) {
          this.root = newNode
      }
      else {
          let currentNode = this.root
          while(true) {
              if(value < currentNode.value) {
                  if(!currentNode.left) {
                      currentNode.left = newNode
                      return this
                  }
                  currentNode = currentNode.left
              } else {
                  if(!currentNode.right) {
                      currentNode.right = newNode
                      return this
                  }
                  currentNode = currentNode.right
              }
          }
      }
    }
    lookup(value){
        //Code here
        if(!this.root) {
            return 'Tree is empty'
        }
        let currentNode = this.root
        while(currentNode) {
            if(value < currentNode.value) {
                currentNode = currentNode.left
            }
            else if(value > currentNode.value) {
                currentNode = currentNode.right
            }
            else if(value === currentNode.value) {
                return currentNode
            }
        }
        return false
    }
    
    remove(value) {
        if(!this.root) {
            return false
        }
        let currentNode = this.root
        let parentNode = null
        while(currentNode) {
            if(value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            }

            else if(value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            }

            else if(value === currentNode.value) {
                //option 1: no right child
                if(currentNode.right === null) {
                    if(parentNode === null) {
                        this.root = currentNode.left
                    }
                    else {

                        //if parent>current value, make current left child a child of parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        }
                        
                        //if parent<current value, make current left child a child of parent
                        else if(currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                }

                //option 2: right child which does not have a left child
                else if (currentNode.right.left === null) {
                    if(parentNode === null) {
                        this.root = currentNode.left
                    }
                    else {
                        currentNode.right.left = currentNode.left
                        //if parent>current value, make current left child a child of parent
                        if(currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left
                        }
                        
                        //if parent<current value, make current left child a child of parent
                        else if(currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left
                        }
                    }
                }
                //option 3: right child that has a left child
                else {

                    //find the right child's left most child
                    let leftmost = currentNode.right.left
                    let leftmostParent = currentNode.right
                    while(leftmost.left !== null) {
                        leftmostParent = leftmost
                        leftmost = leftmost.left
                    }
                }
            }

        }
    }
  }
  
const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(90))
// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree)
  
  //     9
  //  4     20
  //1  6  15  170
  
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
  
  
  
  
  
  