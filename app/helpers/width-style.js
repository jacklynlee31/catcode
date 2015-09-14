import Ember from 'ember';

export function widthStyle(params/*, hash*/) {
  var [x, y, maxX, maxY] = params;

  return params;
}

export default Ember.Helper.helper(widthStyle);

// import Ember from 'ember';

// export function gamePositionStyle(params/*, hash*/) {
//   var [x, y, maxX, maxY] = params;

//   return `left:${(x/(maxX + 1)) * 100}%; bottom:${(y/(maxY + 2)) * 100}%;`;
// }

// export default Ember.Helper.helper(gamePositionStyle);
