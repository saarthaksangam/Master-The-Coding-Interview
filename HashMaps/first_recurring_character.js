//Google Question
//Given an array = [2, 5, 1, 2, 6, 7, 5]
//it should return 2
//Given an array = [1, 2, 3, 4, 5]
//it should return undefined

function first_rec_char(arr) {
    console.clear()
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                return arr[i]

            }
        }
    }
    return undefined
} //O(n^2)


console.log(first_rec_char([2, 5, 1, 2, 6, 7, 5]))