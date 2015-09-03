import Ember from 'ember';

export default Ember.Route.extend({
  model:function() {
    return this.store.createRecord('game');
  },
  actions: {
    save: function(game) {
      game.save().then(() => {
        this.transitionTo('levels');
      });
    }
  }
});
