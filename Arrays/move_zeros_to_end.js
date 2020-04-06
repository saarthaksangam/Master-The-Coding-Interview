function move_zero_to_end(arr) {
    count = 0
    for ( let i = 0; i < arr.length; i++) {
        if(arr[i]!= 0) {
            [arr[count], arr[i]] = [arr[i], arr[count]]
            count++
        }
    }

    console.log(arr.join(', '))
}

move_zero_to_end([5,3,0,4,0,5,6,1,0,8])