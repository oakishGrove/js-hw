/*
 * Author: Dainius Gaižutis
 * Email:  gaizutis.dainius@gmail.com
 */
//1. Write two binary functions, add and mul, that take two numbers and return their sum and product.
function add(a, b) {
    return a+b;
}

function mul(a, b) {
    return a * b;
}

console.log(add(3, 4)); // 7
console.log(mul(3, 4)); // 12



//  2. Write a function that takes an argument and returns a function
//  that returns that argument.
function identify(arg) {
    return () => {
        return arg;
    }
}
const idf = identify(3);
idf();    // 3
console.log(idf())




//     3. Write a function addf that adds from two invocations.
function conaddf(a) {
    return (b) => {
        return a + b;
    }
}
console.log(conaddf(3)(4));    // 7
// conaddf(3)(4);    // 7



// 4. Write a function that takes a binary function,
// and makes it callable with two invocations.
function applyf(func) {
    return (a) => {
        return (b) => {
            return func(a, b);
        }
    }
}
// const addf = applyf(add);
// addf(3)(4);           // 7

const addf = applyf(add);
console.log(addf(3)(4)); // 7
console.log(applyf(mul)(5)(6));    // 30

// 5. Write a function that takes a function and an argument,
// and returns a function that can supply a second argument.

function curry(func, a) {
    return (b) => {
        return func(a, b);
    }
}

// const add3 = curry(add, 3);
// add3(4);             // 7
// curry(mul, 5)(6);    // 30
const add3 = curry(add, 3);
console.log(add3(4)); // 7
console.log(curry(mul, 5)(6)); // 30



// 6. Write a function twice that takes a binary
// function and returns a unary function that passes
// its argument to the binary function twice.

function twice(func) {
    return (a) => {
        return func(a, a);
    }
}

const double = twice(add);
console.log(double(11));    // 22
const square = twice(mul);
console.log(square(11));    // 121

// const double = twice(add);
// double(11);    // 22
// const square = twice(mul);
// square(11);    // 121



// 7. Write a function composeu that takes two unary
// functions and returns a unary function that calls
// them both.

function composeu(f1, f2) {
    return (arg) => {
        return f2(f1(arg));
    }
}
console.log(composeu(double, square)(3));    // 36
// composeu(double, square)(3);    // 36
// 8. Write a function that adds from many invocations, until it sees an empty invocation.
function addg(a) {
    function addgInner(b) {
        if (b === undefined) {
            return a;
        } else {
            return addg(a+b);
        }
    }
    return addgInner;
}

// addg(3)(4)(5)();     // 12
// addg(1)(2)(4)(8)();  // 15
console.log(addg(3)(4)(5)());     // 12
console.log(addg(1)(2)(4)(8)());  // 15

// 9. Write a function that will take a binary function and apply it to many invocations.
function applyg(func) {
    function applygInner(first) {
        return (next) => {
            if (next === undefined) {
                return first;
            }
            return applygInner(func(first, next));
        };
    };
    return applygInner;
}

// applyg(add)(3)(4)(5)();       // 12
// applyg(mul)(1)(2)(4)(8)();    // 64
console.log(applyg(add)(3)(4)(5)());       // 12
console.log(applyg(mul)(1)(2)(4)(8)());    // 64

// 10. Make a function that returns a function that will return the next fibonacci number.

function fibonaccif() {
    this.first = 0;
    this.second = 1;

    function step() {
        let next = this.first + this.second;
        this.first = this.second;
        this.second = next;
    }

    return () => {
        let retval = this.first;
        step();
        return retval;
    }
}

const fib = fibonaccif();
console.log(fib());    // 0
console.log(fib());    // 1
console.log(fib());    // 1
console.log(fib());    // 2
console.log(fib());    // 3
console.log(fib());    // 5

// const fib = fibonaccif();
// fib();    // 0
// fib();    // 1
// fib();    // 1
// fib();    // 2
// fib();    // 3
// fib();    // 5