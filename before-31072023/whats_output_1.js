function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    function logcount() {
        console.log(count);
    }

    return [increment, log, logcount];
}

//   
const [increment, log, logcount] = createIncrement();

increment();
increment();
increment();
log(); // What is logged?
logcount(); // What is logged?"
