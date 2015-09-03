import Ember from 'ember';
import Cat from 'catcode/models/cat';


export default Ember.Controller.extend({
  newCat() {
    return Cat.create();
  },

  resetCat: Ember.on('init', function() {
    this.set('cat', this.newCat());
  }),

  runTests() {
    return this.get('cat.x') === 4;
  },

  actions: {
    testCode(input) {
      var cat = this.get('cat');
      eval(input);

      if (!this.runTests()) {
        console.log('ya broke it');
        // this.resetCat();
      } else {
        console.log('YAY!!!');
        // Here you would move to the next screen
        // this.resetCat();
      }
    }
  }
});
