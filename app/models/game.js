import Ember from 'ember';

export default Ember.Object.extend({
  xValues: Ember.computed.mapBy('blocks', 'x'),
  maxX: Ember.computed.max('xValues'),

  yValues: Ember.computed.mapBy('blocks', 'y'),
  maxY: Ember.computed.max('yValues'),

  cat: null,
  bird: null,
  blocks: [],

  findByCoords: function(x, y){
    // check coordinates of cat
    if (x === this.get('cat.x') && y === this.get('cat.y')) {
      return 'cat';
    }
    // check coordinates of bird
    if (x === this.get('bird.x') && y === this.get('bird.y')) {
      return 'bird';
    }
    // check coordinates of each block in block
    return this.get('blocks').reduce(function(prev, block) {
      if (x === block.get('x') && y === block.get('y')) {
        return 'block';
      }

      return prev;
    }, null);

  },
});

