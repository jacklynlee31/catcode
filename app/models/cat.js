import Ember from 'ember';

export default Ember.Object.extend({
  friends: [],
  name: '',
  game: null,
  x: 0,
  y: 0,

  _moveTo(x, y) {
    if (this.game.findByCoords(x, y) !== 'block') {
      this.set('x', x);
      this.set('y', y);
    }
  },

  moveRight(val = 1) {
    if (val) {
      this._moveTo(this.get('x') + 1, this.get('y'));
      this.moveRight(val - 1);
    }
  },

  moveLeft(val = 1) {
    if (val) {
      this._moveTo(this.get('x') - 1, this.get('y'));
      this.moveLeft(val - 1);
    }
  },

  // moveLeft(val = 1) {
  //   this.incrementProperty('x', -val);
  // },

  // image: 'catwalk.png'
  // url: "http"
});

// make regular object
