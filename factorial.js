function fact(n) {
    let num = 1
    for (let i = 1; i <=n; i++) {
        num = i * num 
    }
    return num
}

console.log(fact(2));
console.log(fact(1));
console.log(fact(4));
console.log(fact(5));