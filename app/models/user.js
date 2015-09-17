import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  catname: DS.attr('string'),
});
