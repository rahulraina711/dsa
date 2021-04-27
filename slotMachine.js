arr=['721', '321', '932', '532' ]

let n = arr[0].length;

let sum = 0;

function theFinder(arr){
    for (let i=0; i<n ; i++){
        let curMax = 0;
        for(let x=0; x<arr.length; x++){
            let splitArr = arr[x].split("").map(e=> parseInt(e));
            let inMax = splitArr.reduce((a,b)=>Math.max(a,b))
            if (inMax > curMax) curMax = inMax;
            splitArr.splice(splitArr.indexOf(inMax), 1);
            let newW = splitArr.join("")
            arr[x] = newW
        }
        sum += curMax;
    }
    return sum
}

console.log(theFinder(arr));
