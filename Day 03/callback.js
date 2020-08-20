function area(x) {
    return x * x;
}

function testArea(callbackfunc) {
    return callbackfunc(20);
}

let res = testArea(area);
console.log(res);
