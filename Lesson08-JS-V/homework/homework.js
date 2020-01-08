// Do not change any of the function names


//PROBLEM 1 - VERSION 1
//Error for both versions: createUserClass() › should return a user constructor that correctly builds user objects

// create an ES6 class or a constructor function called User
// it should accept an options object with username, name, email, and password properties
// in the constructor set the username, name, email, and password properties
// the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
// {{name}} should be the name set on each instance
// return the class
function createUserClass() {
    return User;
}

User.prototype.sayHi = function() {
    return `Hello, my name is ${this.name}`;
};


function User (username, name, email, password) {
  this.username = username;
  this.name = name;
  this.email = email;
  this.password = password;
}

const userConstructor = createUserClass();
const user = new userConstructor;
user.sayHi();


// PROBLEM 1 - VERSION 2 -- using class with same error about the constructor object 
function createUserClass() {
  return User;
}

class User {
  constructor(username, name, email, password) {
      this.username = username;
      this.name = name;
      this.email = email;
      this.password = password;
  }
  sayHi(){
      `Hello, my name is ${this.name}`;
  }
}


//PROBLEM 2 --> this works
// const userConstructor = createUserClass();
// const user = new userConstructor();
// user.sayHi();
function addPrototypeMethod(Constructor) {
    Constructor.prototype.sayHi = function(){
        return 'Hello World!';
    };
}


//PROBLEM 3 
//Error: addReverseString(StringPrototype) › should add a reverse string method to the String prototype that returns a reversed version of the string

// add a method to the string constructor's prototype that returns a reversed copy of the string
// name this method reverse
// hint:
// you will need to use 'this' inside of reverse
// function addReverseString() {
// }

function addReverseString() {
    let listWord = [];
    for (let i=this.string.length-1; i >=0; i--){
        listWord.push(this.string[i]);
    }
    return listWord.join('');
}

String.prototype.reverse = function addReverseString(){};


// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
