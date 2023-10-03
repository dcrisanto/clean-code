const getResult = () => "Results";
const result = getResult();
console.log(result);

// sin arrowFunctions
const numbersList = [1,2,3,4,5,6];
const resultSinArrowFunction = numbersList.map(function(n) {
  return n*2
});

console.log(resultSinArrowFunction);

// con arrowFunction
const result = numbersList.map(number => number*2);
console.log(result);


