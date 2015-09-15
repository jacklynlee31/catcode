import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('level', {
      start: {
        cat: {x: 0, y: 1},
        bird: {x: 4, y: 1},
        blocks: [
          {x: 0, y: 0, color: 'red'},
          {x: 1, y: 0, color: 'orange'},
          {x: 2, y: 0, color: 'yellow'},
          {x: 3, y: 0, color: 'green'},
          {x: 4, y: 0, color: 'blue'},
        ]
      },
      end: {
        cat: {x: 4, y: 1},
        bird: {x: 4, y: 1},
      },
    });
  },
  setupController: function(controller, model) {
    this._super(controller, model);

    controller.resetLevel();
  }
});
