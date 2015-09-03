import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  hunger: DS.attr('number'),
  x: 0,
  y: 2,
  // image: 'catwalk.png'
  // url: "http"
});
