// ámbito global
let gretting = 'Hello World ...';

const gret = () => console.log(gretting);

gret();
console.log(gretting);

// local o de función
const gretLocal = () => {
  let grettingLocal = 'Hello World Local!!!';
  console.log(grettingLocal);
}

gretLocal();
console.log(grettingLocal); // no acceso de manera global

// ámbito de bloque
{
  let grettingBloque = "Hello World!!!";
  var lang = "English";
  console.log(`saludo dentro del bloque ${grettingBloque}`);
}

console.log(`idioma fuera del bloque ${lang}`);
console.log(grettingBloque); // sólo se accede en el bloque

// ámbito estático
const age = 34;

const printAge = () => console.log(age);

const mainApp = () => {
  const age = 33;
  printAge();
}

mainApp();
