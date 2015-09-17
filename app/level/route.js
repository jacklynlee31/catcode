import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    switch (params.level) {
      case '3': {
        return this.store.createRecord('level', {
          level: 'Level 3',
          levelNum: 3,
          desc: 'Mittens found George the bird! He is hiding on a ledge. <br><br>We know how to make Mittens move and <span class="code">jumpUp();</span> but we can also <span class="code">jumpDown(1);</span><br> to climb off the ledge and back to the ground.<br><br> It looks like Mittens will have to climb up and down a ledge, then climb again to catch George. <br>Can you figure out how to catch him?',
          start: {
            cat: {x: 0, y: 1, img: '/CatWalk3.png'},
            bird: {x: 4, y: 2, img: '/bird3.png'},
            blocks: [
              {x: 0, y: 0, color: 'red'},
              {x: 1, y: 0, color: 'orange'},
              {x: 2, y: 1, color: 'yellow'},
              {x: 2, y: 0, color: 'yellow'},
              {x: 3, y: 0, color: 'green'},
              {x: 4, y: 0, color: 'blue'},
              {x: 4, y: 1, color: 'blue'},
            ]
          },
          end: {
            cat: {x: 4, y: 2},
            bird: {x: 4, y: 2},
          },
        });
      }
      case '2': {
        return this.store.createRecord('level', {
          level: 'Level 2',
          levelNum: 2,
          desc: 'Francis the bird flew up on a ledge, but Mittens can catch him using code! <br><br> You know how to move Mittens using <span class="code">cat.moveLeft();</span> and <span class="code">cat.moveRight();</span> but we can also make Mittens jump! Use <span class="code">cat.jumpUp(1);</span> to climb up to the ledge. <br><br>Can you figure out how to catch Francis?',
          start: {
            cat: {x: 0, y: 1, img: '/CatWalk2.png'},
            bird: {x: 4, y: 2, img: '/bird2.png'},
            blocks: [
              {x: 0, y: 0, color: 'red'},
              {x: 1, y: 0, color: 'orange'},
              {x: 2, y: 0, color: 'yellow'},
              {x: 3, y: 0, color: 'green'},
              {x: 4, y: 0, color: 'blue'},
              {x: 4, y: 1, color: 'blue'},
            ]
          },
          end: {
            cat: {x: 4, y: 2},
            bird: {x: 4, y: 2},
          },
        });
      }
      default: {
        return this.store.createRecord('level', {
          level: 'Level 1',
          levelNum: 1,
          desc: 'Mittens the cat has lost track of her bird friends. Help her find them using code! <br><br> Mittens can move on the rainbow path using <span class="code">moveLeft</span> and <span class="code">moveRight</span>. <br>For example, if we wanted her to move 2 spaces to the left, we would say <span class="code">cat.moveLeft(2)</span>. <br><br>The number of spaces you want Mittens to move goes inside of the parentheses. <br><br>Harold the bird is <span class="code">4</span> spaces away! Can you figure out how to catch him?',
          start: {
            cat: {x: 0, y: 1, img: '/CatWalk.png'},
            bird: {x: 4, y: 1, img: '/bird.png'},
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
      }
    }
  },
  setupController: function(controller, model) {
    this._super(controller, model);

    controller.resetLevel();
  }
});
