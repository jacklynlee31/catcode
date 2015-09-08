import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  firebase: Ember.inject.service(),

  actions: {
    login(email, password) {
      this.get('firebase').createUser({
        email,
        password,
      }, (error) => {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          this.get('session').authenticate('authenticator:firebase', {
            email,
            password
          });
        }
      });
    }
  }
});
