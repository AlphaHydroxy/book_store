var _ = require("lodash");
var BookWorm = require('../bookworm.js');

// parent class
function BookWorm() {}

BookWorm.prototype = function(){
  somthing: function(){

  }
}

// child class
function AngryBookWorm() {
  // Call the parent constructor
  BookWorm.call(this);
}

// childclass inherit parent class characteristics
AngryBookWorm.prototype = Object.create(BookWorm.prototype);
// correct the constructor pointer because it points to Person
AngryBookWorm.prototype.constructor = AngryBookWorm;

AngryBookWorm.prototype = function(){
  
}




module.exports = AngryBookWorm;