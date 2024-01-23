// Before ES6
function Bike (name, model){
this.name =  name;
this.model = model;
}

Bike.prototype.getDetail = function(){
    return `The bike name is ${this.name} and its model is ${this.model}`
}

const result = new Bike("hero", "lets start")
console.log("Bike", result.getDetail())

// ES6 Class

class Car {
    constructor(name, model){
        this.name = name;
        this.model = model;
    }

    getDetail(){
        return `The car name is ${this.name} and its model is ${this.model}`
    }
}

const car = new Car("Adi", "2024");
console.log("Car", car.getDetail())