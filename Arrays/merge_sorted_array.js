//mergeSorted([0, 3, 4, 31], [4, 6, 30]);
//method 1
function mergeSorted1(arr1, arr2) {
    const mergedArray = []
    let i = 1;
    let j = 1;
    if(arr1.length === 0)
        return arr2
    else if(arr2.length === 0)
        return arr1
    arr1Item = arr1[0]
    arr2Item = arr2[0]
    while ( arr1Item || arr2Item ) {
        if(arr2Item === undefined || arr1Item < arr2Item) {
            mergedArray.push(arr1Item)
            arr1Item = arr1[i]
            i++
        }
        else {
            mergedArray.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }
    console.log(mergedArray.join(', '))
}



//method 2 - my method
function mergeSorted2(arr1, arr2) {
    if(arr1.length===0 || arr2.length===0) {
        console.log("Please enter both the arrays.");
    }

    for(let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }

    arr1.sort(function(a, b){ return a - b})
    console.log(arr1.join(', '))

}

mergeSorted1([0, 3, 4, 31], [4, 6, 30])
mergeSorted2([0, 3, 4, 31], [4, 6, 30])
