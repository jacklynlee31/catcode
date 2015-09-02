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

  resetCat: Ember.on('init', function() {
    this.set('cat', Cat.create());
  }),

  runTests() {
    return this.get('cat.x') === 4 &&
      this.get('cat.y') === 4;
  },

  actions: {
    testCode(input) {
      var cat = this.get('cat');
      eval(input);

      if (!this.runTests()) {
        alert('ya broke it');
        this.resetCat();
      } else {
        alert('YAY!!!');
        // Here you would move to the next screen
        this.resetCat();
      }
    }
  }
});
