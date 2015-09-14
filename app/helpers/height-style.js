import Ember from 'ember';

export function heightStyle(params/*, hash*/) {
  var [maxX, maxY] = params;

  return `width:${(1/(maxX + 1)) * 100}%; height:${(1/(maxY + 2)) * 100}%;`;
}

export default Ember.Helper.helper(heightStyle);
