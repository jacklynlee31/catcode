// cat x, y
// level
// current saved code
// friends (birds) - array
// user store name

import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  catname: DS.attr('string'),
  // name: DS.attr('string'),
  // cat: DS.attr('string'),
  // level: DS.attr('number'),
  // friends: DS.attr[''],
});
