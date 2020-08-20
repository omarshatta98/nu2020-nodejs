
function average(x, y) {
    var avg = (x + y) / 2;
    return avg;
}
console.log("Avverage = " + average(2, 4));

function factorial(x) {
    var fact = 1;
    for (i = x; i > 1; i--) {
        fact *= i;
    }
    return fact;
}
console.log("Factorial = " + factorial(5));