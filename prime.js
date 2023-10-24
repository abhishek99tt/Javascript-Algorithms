function prime(n) {
    if(n<2) {
        return false
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n%i == 0) {
            return false
        }
    }
    return true
}

console.log(prime(3));
console.log(prime(4));
console.log(prime(15));
console.log(prime(29));
console.log(prime(31));