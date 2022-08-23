
let reverseString = "please reverse this string";
//Split string in to an array of letters


//function that will actually reverse string
function reverse(str) {

  let result = "";
//iterate backwards
  for (let i = str.length-1; i >= 0; i--) {
    
    result += str[i];
  }
return (result);
}
 console.log(reverse(reverseString))

