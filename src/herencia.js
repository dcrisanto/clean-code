// Clase Padre
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hello I am " + this.name;
}

// Clase hija
function Developer(name) {
  this.name = name;
}

// herencia
Developer.prototype = Object.create(Person.prototype);
// método propio
Developer.prototype.writeCode = function(coffee) {
  if(coffee) console.log('I am working in a new feature');
  else console.log('I need coffee, please!');
}

var developer1 = new Developer('Dorelly');
console.log(developer1.greet());
developer1.writeCode('coffee');


// Con ES6
// Clase padre
class Person {
  constructor(name){
    this.name = name; 
  }
  greet() {
    return `My name is ${this.name}`
  }
}

// Clase hija
class Developer extends Person {
  constructor(name){
    super(name) // super: llama el constructor de la clase padre
  }

  writeCode (coffee) {
    coffee ? console.log('I am developing a new feature') 
           : console.log('I need coffee, please!')
  }
}

const developer1 = new Developer('Dorelly');
console.log(developer1.greet());
developer1.writeCode(true);
