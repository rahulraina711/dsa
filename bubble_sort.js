
let bubbleSort = (arr) =>{
    var noSwaps;
    for (var i =arr.length; i>0; i--){
        noSwaps =true;
        for(var j=0; j<i-1; j++){
            if (arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps =false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([51,32,8,46,125,48,9,36,25,15,6,66,25,29]))
console.log(bubbleSort([8,9,1,2,3,4,5,6,7]))