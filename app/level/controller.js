import Ember from 'ember';
import Cat from 'catcode/models/cat';
import Bird from 'catcode/models/bird';
import Block from 'catcode/models/block';
import Game from 'catcode/models/game';
import _ from 'lodash/lodash';

export default Ember.Controller.extend({
  newCat() {
    var cat = Cat.create(this.get('model.start.cat'));
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
    return this.get('model.start.blocks').map(function(block) {
      return  Block.create(block);
    });
  },

  resetLevel: function() {
    var cat = this.newCat();
    var bird = this.newBird();
    var blocks = this.setupBlocks();

    var characters = {cat, bird, blocks};
    var game = new Game();
    game.setProperties(characters);
    this.set('game', game);
    cat.set('game', game);

    this.setProperties(characters);
  },

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
        this.resetLevel();
      } else {
        this.flashMessage('success', 'Content Saved');

        this.transitionToRoute('level-two');
      }
    }
  },

  computeStatements() {
    this.statements = this.get('myCode').split(/[;/n]+/);
  },

  runTests() {
    var endScenario = this.get('model.end');

    var testCat = this.get('cat').getProperties('x', 'y');
    var testBird = this.get('bird').getProperties('x', 'y');

    return _.isEqual(testCat, endScenario.cat) && _.isEqual(testBird, endScenario.bird);
  },

  actions: {
    testCode() {
      this.computeStatements();
      return this.tick();
    }
  }
});
