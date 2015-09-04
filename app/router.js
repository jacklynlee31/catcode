import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('level-one');
  this.route('level-two');
  this.route('login');
  this.route('levels');
  this.route('signup');
  this.route('level-three');
  this.route('end');
});

export default Router;
