// Function.prototype.inherits = function(parent) {
//   function surrogate() {}
//   surrogate.prototype = parent.prototype;
// 
//   this.prototype = new surrogate();
//   this.prototype.constructor = this;
// };

class MovingObject {
  constructor(speed) {
    this.speed = speed;
  }
}

class Ship extends MovingObject {
  constructor(speed) {
    super(speed);
  }
}

// function MovingObject (speed) {
//   this.speed = speed;
// }
// 
// function Ship (speed) {
//   MovingObject.call(speed);
// }
// Ship.inherits(MovingObject);
// 
// function Asteroid () {}
// Asteroid.inherits(MovingObject);

s = new Ship(3);
console.log(s);
console.log(s.speed);
m = new MovingObject(3);
console.log(m.speed);
