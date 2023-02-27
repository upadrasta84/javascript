//CLOSURES

/*

// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3

//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----

// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  let counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is 0

//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----

function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  
  // Call add() 3 times
  add();
  add();
  add();
  
  //The counter should now be 3. But it is 1.

*/
//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  console.log(add());

  
  // the counter is now 3

//The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
//This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
//This is called a JavaScript closure. It makes it possible for a function to have "private" variables.


/*
Currying is an advanced technique of working with functions. It’s used not only in JavaScript, but in other languages as well.

Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

Currying doesn’t call a function. It just transforms it.

As you can see, the implementation is straightforward: it’s just two wrappers.

The result of curry(func) is a wrapper function(a).
When it is called like curriedSum(1), the argument is saved in the Lexical Environment, and a new wrapper is returned function(b).
Then this wrapper is called with 2 as an argument, and it passes the call to the original sum.
*/

function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  console.log( 'curried sum',curriedSum(1)(2) ); // 3

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//CLOSUREs
const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Currying

const add2 = (a, b) => a + b

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-90))

// Tipper
const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount
    }
}
const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))
console.log(tip30(100))
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

