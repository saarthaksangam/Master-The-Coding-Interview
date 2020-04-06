//method 1 - through reverse iteration of string as an array
function string_reverse1(str) {
    if(!str || str.length < 2 || typeof str!= 'string')
        console.log("Invalid Input. Please input a string.");
    
    const backwards = []
    const totalItem = str.length - 1
    for(let i = totalItem; i >= 0; i --) {
        backwards.push(str[i])

    }
    console.log(backwards.join(''));                
} 

//method 2 - using built-in reverse() function
let string_reverse2 = (str) => console.log(str.split('').reverse().join(''));

//method 3 - without the split
let string_reverse3 = (str) => console.log([...str].reverse().join(''));



string_reverse1("Hello")
string_reverse2("World")
string_reverse3("Safe from Coronavirus?")