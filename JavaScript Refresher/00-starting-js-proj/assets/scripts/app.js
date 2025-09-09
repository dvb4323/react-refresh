import { apiKey } from "./util.js";
import * as util from "./util.js";

let vari = "hi";
vari = "hello";
const varia = 1;

console.log(apiKey);
console.log(util);

if (10 != 1) {
  console.log("hi");
}

function greetUser(userName, message = "good") {
  //   console.log("hello " + userName + message);
  return "Hi, I am" + userName + ". " + message;
}

console.log(greetUser("Binh", " good morning"));

//arrow function (anonymous function - function doesn't have a name)
// export default function () {
//   console.log("hello");
// }
export default (userName, message) => {
  return userName + message;
};

//export default userName => {} (only 1 parameter)
//number => number*3; (function only return)
//number => {{age: number}} (return object)

//object
const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("hello");
    console.log(this.age);
  },
};

console.log(user);
user.greet();

//OOP
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("hi");
  }
}

const user1 = new User("Manuel, 35");
console.log(user1);

//Array
const hobbies = ["sports", "cooking", "reading"];
console.log(hobbies[1]);

hobbies.push("working");
console.log(hobbies);

console.log(hobbies.findIndex((item) => item === "Sports"));
const editedHobbies = hobbies.map((item) => item + "!");
console.log(editedHobbies);
