


function change (arr, sum) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j])
        //  if(arr[i] + arr[j] === sum) {
        //   return true
        // }
      }
  
  }
  return false
  
  
  }
  const arr = [1,2,3,4,5,6,7,8,9]
  
  console.log(change(arr, 6))