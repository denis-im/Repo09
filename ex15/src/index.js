// Only change code below this line
function switchCase(letter) {
  switch (letter) {
    case "a":
      return "antelope";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
  }
}

var animals;

console.log(animals = switchCase("a"));
console.log(animals = switchCase("b"));
console.log(animals = switchCase("c"));
console.log(animals = switchCase("d"));
console.log(animals = switchCase(4));

// Only change code above this line
module.exports = switchCase;
