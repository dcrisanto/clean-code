// código que se repite
const average1 = (90 +50 +70) / 3;
const average2 = (80 + 90 +70 + 80) / 4;
const average3 = (40 + 100) / 2;

const calculateAverage = (...averages) => {
  const result = averages.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / averages.length;
  return result;
}

console.log(`average1 ${average1}`);
console.log(calculateAverage(90, 50, 70));

console.log(`average2 ${average2}`);
console.log(calculateAverage(80, 90, 70, 80));

console.log(`average3 ${average3}`);
console.log(calculateAverage(40, 100));



