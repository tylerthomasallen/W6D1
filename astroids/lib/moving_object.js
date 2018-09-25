Function.prototype.inherits = function(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject(options) {
  this.pos = options.pos;
  this.val = options.val;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0, 
    2 * Math.PI,
    false
  );
  
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.val[0];
  this.pos[1] += this.val[1];
};

module.exports = MovingObject;

