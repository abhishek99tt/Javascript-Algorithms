// function fibonacci(n) {
//     let arr = [0,1];
//     for (let i=2; i<n; i++){
//         // arr.push(arr[i-1] + arr[i-2]);
//         arr[i] = arr[i-1] + arr[i-2];
//     }
//     return arr;
// }

function fibonacci(n) {
    if(n<=1) return n
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(3))
console.log(fibonacci(7))