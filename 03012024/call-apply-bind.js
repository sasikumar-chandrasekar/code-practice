// call

const object = {
    name: "Kumar",
    role: "Full Stack Developer"
};

function showMessage(messageOne, messageTwo){
    return `${messageOne}: ${this.name} and ${messageTwo} ${this.role}`
};

// call
const call = shocleaerwMessage.call(object, "Name is", "He is a");
console.log("call", call);

// apply
const apply = showMessage.apply(object, ["Name is", "He is a"]);
console.log("apply", apply);

// bind
const show = showMessage.bind(object);
const bind = show("Name is", "He is a");
console.log("bind", bind);