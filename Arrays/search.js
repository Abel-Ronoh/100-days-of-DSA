
// target = 5
// for (let i = 0; i < array.length; i++){
//     if (array[i] == target){
//         console.log(i);
//     }
// }







let Array = [];
for (let i = 0; i < 100000000; i++) {
    Array.push(i);
}





















target = 500000
// Linear search
for (let i = 0; i < Array.length; i++){
    if (Array[i] == target){
        console.log(i);
        return
    }
}









// let left = 0
// let right = Array.length -1
// while (left <= right){
//     mid = Math.floor((left + right) /2)
//     if (Array[mid] == target){
//         console.log(mid)
//         return;

//     }
//     if (target > Array[mid]){
//         left = mid
//     }
//     else{
//         right = mid
//     }
// }