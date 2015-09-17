import DS from 'ember-data';

export default DS.Model.extend({
  // Start scenario
  start: DS.attr(),
  // End scenario
  end: DS.attr(),
  number: DS.attr(),
});
