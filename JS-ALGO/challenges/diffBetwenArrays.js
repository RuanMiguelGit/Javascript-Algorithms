// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Before
function diffArray(arr1, arr2) {
  let union = [];
  let answer = []
 for(let i = 0; i < arr1.length; i++) {
      if(!union.includes(arr1[i])) {
          union.push(arr1[i])
      }
  }

  for (let i = 0; i < arr2.length ; i++) {
      if(!union.includes(arr2[i])) {
          union.push(arr2[i])
      }
  }

  for ( let i = 0; i < union.length; i++) {
      if(arr1.includes(union[i]) && !arr2.includes(union[i])){
            answer.push(union[i])
      }
      if(arr2.includes(union[i]) && !arr1.includes(union[i])){
          answer.push(union[i])
      }
  } 
  return answer;
}


function diffArray2(arr1, arr2) {
    let union = [];
    let answer = []
   for(const first of arr1) {
        if(!union.includes(first)) {
            union.push(first)
        }
    }
  
    for (const second of arr2) {
        if(!union.includes(second)) {
            union.push(second)
        }
    }
  
    for ( const data of union) {
        if(arr1.includes(data) && !arr2.includes(data)){
              answer.push(data)
        }
        if(arr2.includes(data) && !arr1.includes(data)){
            answer.push(data)
        }
    } 
    return answer;
  }
  

  function diffArray3(arr1, arr2) {
    let union = new Set([...arr1, ...arr2])
    let answer = []

    for ( const data of union) {
        if(arr1.includes(data) && !arr2.includes(data)){
              answer.push(data)
        }
        if(arr2.includes(data) && !arr1.includes(data)){
            answer.push(data)
        }
    } 
    return answer;
  }
  
  console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]));

