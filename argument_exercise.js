function sum(nums) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// console.log(sum(1,2,3,4,5))

function sumRest(...nums) {
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


Function.prototype.myBindCall = function(context, ...bindArgs) {
    const func = this; 
    return function (...callArgs) {
        return func.call(context, ...bindArgs, ...callArgs);
    }
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

markov.says("meow", "Ned")
markov.says.myBindArg(pavlov, "meow", "Kush")()
markov.says.myBindArg(pavlov)("meow", "a tree")
markov.says.myBindArg(pavlov, "meow")("Markov")


const notMarkovSays = markov.says.myBindArg(pavlov);
notMarkovSays("meow", "me")