import DS from 'ember-data';

export default DS.Model.extend({
  // Start scenario
  start: DS.attr(),
  // End scenario
  end: DS.attr(),
  number: DS.attr(),
});

// start DS.attr
//    cat (json)
//    birds (json)
// end
//    cat
//    birds

// cat.moveRight
// cat.moveLeft
// cat.pickup
// cat.jump / cat.climb
