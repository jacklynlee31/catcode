import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    switch (params.level) {
      case '3': {
        return this.store.createRecord('level', {
          level: 3,
          desc: 'Help your cat find its friends! George the bird flew over a ledge. We can catch him using code! You know how to move left and right and how to jump. Now we can make your cat <span class="code">jump down</span>! We can jump down using <span class="code">cat.jumpDown</span>. <br><br> Can you figure out how to catch George?',
          start: {
            cat: {x: 0, y: 1, img: 'catwalk3.png'},
            bird: {x: 4, y: 2, img: 'bird3.png'},
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
          level: 2,
          desc: 'Help your cat find its friends! Francis the bird flew up on a ledge. We can catch him using code! You know how to move your cat left and right. We can also make your cat <span class="code">jump</span>! <br>We can jump using <span class="code">cat.jumpUp</span>. <br><br>Can you figure out how to catch Francis?',
          start: {
            cat: {x: 0, y: 1, img: 'catwalk2.png'},
            bird: {x: 4, y: 2, img: 'bird2.png'},
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
          level: 1,
          desc:
            'Help your cat find its friends! Harold the bird is only four steps to the right of your cat. You can catch him using code! Your cat can move around using <span class="code">moveLeft</span> and <span class="code">moveRight</span>. So, if we wanted your cat to move 2 spaces to the left, we would say <span class="code">cat.moveLeft(2);</span>. <br><br> Can you figure out how to catch Harold?',
          start: {
            cat: {x: 0, y: 1, img: 'catwalk.png'},
            bird: {x: 4, y: 1, img: 'bird.png'},
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
