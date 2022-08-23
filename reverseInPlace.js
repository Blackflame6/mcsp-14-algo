// let arr = [1,2,3,4,5,6,7]

// let temp1 = arr[0]
// let temp2 = arr[1]
// let temp3 = arr[2]

// arr[0] = arr[arr.length-1]
// arr[1] = arr[arr.length-2]
// arr[2] = arr[arr.length-3]


// arr[arr.length-1] = temp1
// arr[arr.length-2] = temp2
// arr[arr.length-3] = temp3

// console.log(arr)




//THIS IS THE GENERAL IDEA
// temp = first
//first = last
//last = temp
let arr = "[1,2,3,4,5,6,7]"
function reverseInPlace(arr) {

for (let i = 0; i < Math.floor( arr.length / 2 ); i++) {
let temp = arr[i]
 arr[i] = arr[arr.length-1-i]
 arr[arr.length-1-i] = temp

}
return arr
}



console.log(arr)
reverseInPlace(arr)
console.log(arr)

 




