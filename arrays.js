var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = [1];
  var element = 'foo';
  array = [`${element}`, ...array];
  return array;
}


