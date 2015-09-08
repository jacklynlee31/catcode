import Ember from 'ember';

export default Ember.Route.extend({

  firebase: Ember.inject.service('firebase'),

  actions: {
    signup(username, password, catname) {
      var firebase = this.get('firebase');

      firebase.createUser({username, password}, (err, data) => {
        if (err) {
          return console.log(err);
        }

        this.get('session').authenticate('authenticator:firebase', {
          username,
          password
        }).then((data) => {
          this.session.get('currentUser').set('username', username);

          this.session.get('currentUser').save().then(() => {
            this.transitionTo('levels');
          });
        });

      });
    }
  }
});

// export default Ember.Route.extend({
//   model:function() {
//     return this.store.createRecord('user');
//   },
//   actions: {
//     save: function(user) {
//       user.save().then(() => {
//         this.transitionTo('levels');
//       });
//     }
//   }
// });
