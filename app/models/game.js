// cat x, y
// level
// current saved code
// friends (birds) - array
// user store name

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cat: DS.attr('string'),
  level: DS.attr('number'),
  friends: DS.attr[''],
});
