let insertionSort = (arr)=>{
    for (var i =1; i<arr.length; i++){
        var current_val = arr[i];
        for(var j=i-1; j>=0 && arr[j]>current_val ;j--){
            arr[j+1] = arr[j]

        }
        arr[j+1] = current_val;
        console.log(arr)

    }
    return arr
}

var searchInsert=function(arr, target){
    if(arr.includes(target)){
        return arr.indexOf(target)
    }
    else{
        arr.push(target)
        var newArr = insertionSort(arr)
        return newArr.indexOf(target)       
    }
}
//console.log(searchInsert([1,3,5,6], 2))
//console.log(insertionSort([2,1,9,76,4]))