function sum(nums) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// console.log(sum(1,2,3,4,5))

function sumRest(...nums) { //rest operator, takes in any number of arguments, into array nums
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

// console.log(sumRest(1,2,3,4,5))


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");


Function.prototype.myBindCall = function(context, ...bindArgs) { ///rest operator when declared
    const func = this;
    return function (...callArgs) { /// rest operator
        return func.call(context, ...bindArgs, ...callArgs); // spread operator, converts to comma seperated arguments
    }                               // spread operator when invoked
}
// markov.says("meow", "Ned")
// markov.says.myBindCall(pavlov, "meow", "Kush")()
// markov.says.myBindCall(pavlov)("meow", "a tree")
// markov.says.myBindCall(pavlov, "meow")("Markov")

// const notMarkovSays = markov.says.myBindCall(pavlov);
// notMarkovSays("meow", "me")

Function.prototype.myBindArg = function(context) {
    const func = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function () {
        const callArgs = Array.from(arguments);
        return func.apply(context, bindArgs.concat(callArgs));
    }
}

// markov.says("meow", "Ned")
// markov.says.myBindArg(pavlov, "meow", "Kush")()
// markov.says.myBindArg(pavlov)("meow", "a tree")
// markov.says.myBindArg(pavlov, "meow")("Markov")


// const notMarkovSays = markov.says.myBindArg(pavlov);
// notMarkovSays("meow", "me")

function curriedSum(numArgs) {
    const nums = [];
    return function _curriedSum(num){
        nums.push(num);
        if (numArgs === nums.length) {
            let total = 0;
            nums.forEach((num) => { total += num; });
            return total;
        } else {
            return _curriedSum;
        }
    }
}

// console.log(curriedSum(4)(1)(2)(3)(4))


function curriedSum2(numArgs) {
    const nums = [];
    return function _curriedSum(num){
        nums.push(num);
        if (numArgs === nums.length) {
            return nums.reduce((acc,el) => acc + el)
        } else {
            return _curriedSum;
        }
    }
}

// console.log(curriedSum2(4)(1)(2)(3)(4))


Function.prototype.curry = function(numArgs) {
    const func = this;
    const args = [];
    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return func(...args);
        } else {
            return _curry;
        }
    }
}

// console.log(sum.curry(4)(1)(2)(3)(4))

Function.prototype.curryApply = function(numArgs) {
    const func = this;
    const args = [];
    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return func.apply(null, args);
        } else {
            return _curry;
        }
    }
}

// console.log(sum.curry(4)(1)(2)(3)(4))
