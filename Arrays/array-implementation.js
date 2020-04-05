class MyArray{
    constructor() {
        this.length = 0
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop(){
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete_by_key(index){
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length-1]
        this.length--
    }
}

const newArray = new MyArray()
newArray.push("Hello")
newArray.push("World")
newArray.push("!")
newArray.pop()
newArray.delete_by_key(0)
newArray.get(0)
console.log(newArray)