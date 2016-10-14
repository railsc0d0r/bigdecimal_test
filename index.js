'use strict';

let Big = require('big.js');

let addFloats = function(a,b) {
    let result = a + b;
    console.log(a + ' + ' + b + ' = ' + result);

    let big_a = new Big(a);
    let big_b = new Big(b);

    let result2 = big_a.plus(big_b);
    console.log('Same w/ BigDecimal: ' + result2);
}

let multiplyFloats = function(a,b) {
    let result = a * b;
    console.log(a + ' * ' + b + ' = ' + result);

    let big_a = new Big(a);
    let big_b = new Big(b);

    let result2 = big_a.times(big_b);
    console.log('Same w/ BigDecimal: ' + result2);
}

let computePowOfFloats = function(a,b) {
    let result = Math.pow(a,b);
    console.log(a + ' pow ' + b + ' = ' + result);

    let big_a = new Big(a);
    let big_b = new Big(b);

    let result2 = Math.pow(big_a,big_b);
    console.log('Same w/ BigDecimal: ' + result2);
}

addFloats(0.2,0.05);
multiplyFloats(0.4, 0.1);
computePowOfFloats(0.9,0.01);
