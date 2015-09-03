// Level One
// if true, return meow
// if false, return nope

// if (someNumber > 10) {
//   console.log("Numbers larger than 10 are not allowed.");
// } else {
//   console.log("Nice number!");
// }

import Ember from 'ember';

var Cat = Ember.Object.extend({
  x: 2,
  y: 2,

  moveNorth(val = 1) {
    this.incrementProperty('y', val);
  },

  moveEast(val = 1) {
    this.incrementProperty('x', val);
  }
});

export default Ember.Route.extend({
  appName:'Ember Twiddle',

  model() {
    return this.newCat()
  },

  newCat() {
    return Cat.create();
  },

  resetCat() {
    this.controller.set('cat', this.newCat());
  },

  runTests() {
    return this.controller.get('model.x') === 4 &&
      this.controller.get('model.y') === 4;
  },

  actions: {
    testCode(input) {
      var cat = this.controller.get('model');
      eval(input);

      if (!this.runTests()) {
        alert('ya broke it');
        // this.resetCat();
      } else {
        alert('YAY!!!');
        // Here you would move to the next screen
        // this.resetCat();
      }
    }
  }
});
