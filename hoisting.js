/*var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);*/

//Ejemplo 0
//console.log(example);
//var example = "I'm the example!";
//var example;
//console.log(example); //undefined
//example = "I'm the example!";

//console.log(example);
//let example = "I'm the example!";
//Reference error

//console.log(hello);
//var hello = "world";
//var hello;
//console.log(hello); undefined
//hello = "world";

/* var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
} */
//magnet

/* var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan); */
//super cool

/* var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
} */
//chicken
//half-chicken

/* mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food); */
//mean is not a function

/* console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre); */
//undefined
//rock
//r&b
//disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
//san jose
//seattle
//burbank
//san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
//{name: "Chicago", students: 65, hiring: true}
//error cant reasing constant variable
