const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");

function Asteroid(options) {
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);