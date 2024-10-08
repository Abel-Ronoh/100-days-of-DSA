// using for loop
let array = [1,2,3,4,5]
for (let i = 0; i < array.length; i++){
    console.log(array[i])
}
console.log(array)

//using for of loop

for (let x of array){
    console.log (x)
}
console.log(array)

//using forEach

array.forEach(function(number){
    console.log(number)
})