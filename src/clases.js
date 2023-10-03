// Antes ES6
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hello I am " + this.name;
}

var person = new Person('Dorelly');
console.log(person.name);
console.log(person.greet());

// Con ES6
class Cat {
  constructor(catName){
    this.catName = catName; 
  }
  greet() {
    return `Hello I am a cat and my name is ${this.catName}`
  }
}

const cat = new Cat('Michi');
console.log(cat.catName);
console.log(cat.greet());
