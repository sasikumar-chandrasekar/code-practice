// In JavaScript, a prototype is a mechanism that allows you to add 
// properties and methods to an object's constructor function. this means 
// that objects created from that constructor function will inherit 
// these properties and methods.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
};

const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Smith');

console.log(person1.getFullName());
console.log(person2.getFullName());
