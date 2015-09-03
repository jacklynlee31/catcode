import Ember from 'ember';

export default Ember.Object.extend({
  friends: [],
  x: 0,
  y: 0,

  moveRight(val = 1) {
    this.incrementProperty('x', val);
  },

  moveLeft(val = 1) {
    this.incrementProperty('x', -val);
  },

  // moveLeft(val = 1) {
  //   this.incrementProperty('x', -val);
  // },

  // image: 'catwalk.png'
  // url: "http"
});

// make regular object
