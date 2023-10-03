// Parámetro de number
function getDouble(number) {
  return number * 2
}

// Argumento 10
getDouble(10);

// Parámetro por defecto
function greet(person = "strange") {
  console.log(`Hello ${person}`);
}

greet();
greet('Dorelly');

// sin usar rest
function add(x,y) {
  return x + y;
}

const result = add(1,2,3,4,5);
console.log(result);

// uso de rest
function add(...args) {
  const sum = args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}

const result = add(1,2,3,4,5,6);
console.log(result);

function add(x,y, ...args) {
  console.log(args);
}

add(1,2,3,4,5);

const course = {
  title: "JavaScript Definitivo",
  content: "Todo lo que necesitas saber"
}

const courseCloned = Object.assign({}, course);

const spreadCourseCloned = { ...course};

console.log(courseCloned);
console.log(spreadCourseCloned);

const numbers = [1,2,3];
const clonedNumbers = numbers.slice();
const spreadClonedNumbers = [...numbers]

console.log(clonedNumbers);
console.log(spreadClonedNumbers);

const numbersA = [1,2,3];
const numbersB = [4,5,6];
const add = [...numbersA, ...numbersB];
console.log(add);
