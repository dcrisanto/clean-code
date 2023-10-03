// var
var age = 34;
{
  console.log(`valor dentro del bloque ${age}`)
  var age = 33
}

console.log(`valor fuera del bloque ${age}`);
age = age * 2;
console.log(`valor cambiado ${age}`);

// let
let age = 34;
{
  console.log(`valor dentro del bloque ${age}`)
  age = 33
}

console.log(`valor fuera del bloque ${age}`);
age = age * 2;
console.log(`valor cambiado ${age}`);

// const
const PI = 3.14159
PI = 3.1416 // error: not reasignar valor
console.log(PI);


