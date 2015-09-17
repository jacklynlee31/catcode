import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  firebase: Ember.inject.service(),

  actions: {
    login(email, password) {
      this.get('firebase').authWithPassword({
        email,
        password,
      }, (error) => {
        if (error) {
          window.alert("Login Failed. Please make sure your e-mail and password are correct, or Sign Up to create a new account.", error);
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
