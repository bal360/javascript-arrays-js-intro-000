var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(chocolateBars, anotherBar) {
  return [anotherBar, ...chocolateBars];
 } 
function destructivelyAddElementToBeginningOfArray(chocolateBars, anotherBar) {
  chocolateBars.unshift(anotherBar);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, anotherBar) {
  return [...chocolateBars, anotherBar];
}
function destructivelyAddElementToEndOfArray(chocolateBars, anotherBar) {
  chocolateBars.push(anotherBar);
  return chocolateBars;
}
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}

