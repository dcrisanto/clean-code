greet();

function greet() {
  let gretting = "Hello World";
  console.log(gretting);
}

/*-----------------*/
const greet = () => {
  let gretting = "Hello World";
  console.log(gretting);
}

greet();

/*---------------------*/
var greet = "Hello";

// función autoinvocada: no necesita de un llamado a la función para llamarla

(
  function(){
    console.log(greet); // indefined
    var greet = "Hi";
    console.log(greet);
  }
)()

/*---------------------*/
let greet = "Hello";

// función autoinvocada: no necesita de un llamado a la función para llamarla

(
  function(){
    console.log(greet);
    greet = "Hi";
    console.log(greet);
  }
)()
