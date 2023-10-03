const counter = {
  number: 0,
  //método
  increse() {
      setInterval(() => console.log(++this.number), 1000)
  }
}

console.log(counter.increse());

const counter = {
  number: 0,
  //método
  increse() {
      setInterval(function () {
        console.log(++this.number);
      }.bind(this), 1000)
  }
}

console.log(counter.increse());
