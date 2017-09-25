var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var element = foo;
  array = [`${element}`, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array[1] = element;
  return array;
}
