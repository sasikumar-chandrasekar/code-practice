// the "this" keyword is a special identifier that refers to the current execution context or the object on which a method is being invoked.

const userList = [{ name: "Kumar" }, { name: "Manu" }, { name: "Vinodh" }]

const message = {
    name: "Guest",
    greeting() {
        return `Hello ${this.name}!`;
    },
    morning() {
        return `${this.greeting()} Good Morning`;
    },
    askWeather() {
        return "How is weather?";
    }
}

const messageQueue = userList.map((user) => ({ ...message, ...user }));

console.log(messageQueue[2].greeting());
console.log(messageQueue[2].askWeather());
