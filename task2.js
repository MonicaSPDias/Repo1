//method 1

console.log (Math.min(...[7,3,2]) )// 2
console.log(Math.max(...[4,7,9]) )// 9


let array = [34,-15,-7,-98,7,76]
array.sort((a,b) => a-b) // Sort numerically, ascending

//method 2

let min = array[0]
let max = array[array.length-1]
console.log(min,max)