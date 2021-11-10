// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
let max, min;
let sum = 0
    if(arr[0] >= arr[1]){
        max = arr[0]
        min = arr[1]
    }

    max=arr[1]
    min = arr[0]

for(let i=min; i <= max; i++) {
    sum += i
}

    return sum;
}
  



function sumAll2(arr) {
const max = arr[0] > arr[1] ? arr[0]:arr[1]
const min = arr[0] < arr[1] ? arr[0] : arr[1]
let sum = 0

    for(let i=min; i <= max; i++) {
        sum += i
    }
    
        return sum;
    }
      
function sumAll2(arr) {

    let sum = 0 
    for(let i=Math.min(...arr); i <= Math.max(...arr); i++) {
        sum += i
     }        
    return sum;
    }
              
