let sum = (...args) => {
  return args.reduce((acc, el) =>  acc + el);
};

Function.prototype.myBind2 = function(ctx, ...args) {
  return (...callArgs) => this.apply(ctx, args.concat(callArgs));
};

Function.prototype.myBind = function(ctx){
  const that = this;
  const args = Array.from(arguments).slice(1);
  return function bound() {
    const callArgs = Array.from(arguments);
    return that.apply(ctx, args.concat(callArgs));
  };  
};


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// 
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
// 
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
// 
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
// 
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
// 
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

function curriedSum(numTimes) {
  const nums = [];
  
  function _curriedSum(num) {
    nums.push(num);
    
    if (nums.length === numTimes) {
      return nums.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  }
  
  return _curriedSum;
}
// 
// 
// const sums = curriedSum(3);
// console.log(sums(5)(30)(10));


Function.prototype.curry = function(numArgs) {
  const args = [];
  const that = this;
  
  function _curry(arg){
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curry;
    }
  }
  
  return _curry;
};

Function.prototype.curry1 = function(numArgs) {
  const nums = [];
  
  const _curry = (num) => {
    nums.push(num);
    
    if (nums.length === numArgs) {
      return this(...nums);
    } else {
      return _curry;
    }
  };
  
  return _curry;
};

function add(...args) {
  return args.reduce( (acc, el) => acc + el );
}

 // const sums = curriedSum(3);

console.log(add.curry(3)(1)(2)(3));

console.log(add.curry1(4)(1)(2)(3)(4));