import Ember from 'ember';
import Cat from 'catcode/models/cat';
import Bird from 'catcode/models/bird';
import Block from 'catcode/models/block';

export default Ember.Controller.extend({
  newCat() {
    var cat = Cat.create(this.get('model.start.cat'));
    debugger;
    this.get('session.currentUser').then((user) => {
      cat.set('name', user.get('catname'));
    });
    return cat;
  },

  newBird() {
    var bird = Bird.create(this.get('model.start.bird'));
    return bird;
  },

  setupBlocks() {
    debugger;
    return this.get('model.start.blocks').map(function(block) {
      return  Block.create(block);
    });
  },

  resetLevel: Ember.on('init', function() {
    this.set('cat', this.newCat());
    this.set('bird', this.newBird());
    this.set('blocks', this.setupBlocks());
  }),

  resetTick() {
     setTimeout(() => {
      Ember.run(this, 'tick');
    }, 400);
  },

  tick() {
    if (this.statements.length) {
      var currentStatement = this.statements.shift();
      var cat = this.get('cat');
      eval(currentStatement);

      this.resetTick();
      console.log('tick');
    } else {
      if (!this.runTests()) {
        console.log('ya broke it');
        // this.resetCat();
      } else {
        console.log('YAY!!!');
        // Here you would move to the next screen
        // this.resetCat();
      }
    }
  },

  computeStatements() {
    this.statements = this.get('myCode').split(/[;/n]+/);
    // clearInterval(this.interval);
    // this.tick(this.get('now').add({hours: 1, }))
    // x.split(/[;/n]+/)
    // wherever there is a semicolon & new line
  },

  runTests() {
    return this.get('cat.x') === 4;
  },

  actions: {
    testCode() {
      this.computeStatements();
      return this.tick();
    }
  }
});
