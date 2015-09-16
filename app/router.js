import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('level', {path: 'level/:level'});
  this.route('levels');
  this.route('login');
  this.route('signup');
  this.route('end');
});

export default Router;
